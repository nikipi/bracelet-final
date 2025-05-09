import { createContext, useState, useEffect } from "react";
import { createCheckout, updateCheckout } from "../lib/queries/checkoutQuery";
import { ShopifyData } from "@/lib/shopify";
const defaultValue = {};

const CartContext = createContext(defaultValue);

export default function ShopProvider({ children }: any) {
  const [cart, setCart]: any = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }

      setCheckoutId(cartObject[1]?.id);
      setCheckoutUrl(cartObject[1]?.checkoutUrl);
    }
  }, []);

  async function addToCart(
    newItem: any,
    quantity: number,
    note: any,
    beadSequence: any
  ) {
    setCartOpen(true);
    let newCart = [...cart];

    console.log("🛒 Adding item to cart:", newItem);
    console.log("Current cart:", cart);
    console.log("Quantity to add:", quantity);

    if (cart.length === 0) {
      console.log("Cart is empty. Creating new checkout...");

      newItem.variantQuantity = quantity;

      const checkout = await createCheckout(
        newItem.id,
        quantity,
        note,
        beadSequence
      );
      console.log("Checkout created:", checkout);

      const cartLineId = checkout.lines.edges[0].node.id;
      newItem.cartLineId = cartLineId;

      setCart([newItem]);
      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.checkoutUrl);

      localStorage.setItem(
        "checkout_id",
        JSON.stringify([[newItem], checkout])
      );

      console.log("Cart after adding new item:", [newItem]);
      console.log("Checkout saved to localStorage");
    } else {
      console.log("Cart already has items. Checking for existing variant...");

      const existingItemIndex = cart.findIndex(
        (item: any) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        console.log("Variant exists in cart. Increasing quantity.");

        newCart[existingItemIndex].variantQuantity += quantity;
      } else {
        console.log("New variant. Adding using cartLinesAdd...");

        newItem.variantQuantity = quantity;
        const attributes = `
        attributes: [
          { key: "Note", value: """${note}""" },
          { key: "BeadSequence", value: """${beadSequence}""" }
        ],
      `;

        const addLineQuery = `
          mutation {
            cartLinesAdd(cartId: "${checkoutId}", lines: [
              {
                merchandiseId: "${newItem.id}",
                quantity: ${quantity},
                ${attributes}
              }
            ]) {
              cart {
                id
                checkoutUrl
                lines(first: 25) {
                  edges {
                    node {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        console.log("Sending cartLinesAdd mutation:", addLineQuery);

        const addResponse = await ShopifyData(addLineQuery);
        console.log("Response from cartLinesAdd:", addResponse);

        const updatedCart = addResponse.data?.cartLinesAdd?.cart;

        const newLine = updatedCart?.lines?.edges.find(
          (line: any) => line.node.merchandise.id === newItem.id
        );

        if (newLine) {
          newItem.cartLineId = newLine.node.id;
          newCart.push(newItem);
          setCart(newCart);
          setCheckoutUrl(updatedCart.checkoutUrl);

          localStorage.setItem(
            "checkout_id",
            JSON.stringify([newCart, updatedCart])
          );
          console.log(
            "✅ New variant added with cartLineId:",
            newItem.cartLineId
          );
          return;
        } else {
          console.warn("⚠️ New line not found after adding!");
        }
      }

      // Existing variant or fallback
      console.log("Calling updateCheckout with newCart:", newCart);

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);

      setCheckoutUrl(newCheckout.checkoutUrl);

      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
      console.log("✅ Cart updated successfully");
    }
  }

  async function incrementCartItem(
    itemtoIncrementQuantity: any,
    itemtoIncrementId: any
  ) {
    let newCart = [...cart];

    cart.map((item: any) => {
      if (item.id === itemtoIncrementId) {
        item.variantQuantity = itemtoIncrementQuantity + 1;
      }
    });
    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);

    localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]));
  }
  // async function removeCartItem(itemToRemove: any) {
  //   console.log("item to remove", itemToRemove);

  //   const updatedCart = cart.filter((item: any) => item.id !== itemToRemove);
  //   setCart(updatedCart);

  //   const newCheckout = await updateCheckout(checkoutId, updatedCart);

  //   localStorage.setItem(
  //     "checkout_id",
  //     JSON.stringify([updatedCart, newCheckout])
  //   );

  //   if (cart.length === 1) {
  //     setCartOpen(false);
  //   }
  // }

  async function removeCartItem(itemToRemoveId: string) {
    console.log("🗑️ Removing item:", itemToRemoveId);

    const item = cart.find((i: any) => i.id === itemToRemoveId);
    if (!item) {
      console.warn("Item not found in cart");
      return;
    }

    // Send cartLinesRemove mutation to Shopify
    const removeLineMutation = `
      mutation  {
    cartLinesRemove(cartId: "${checkoutId}", lineIds: ["${item.cartLineId}"]) {
          cart {
            id
            checkoutUrl
            lines(first: 25) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    console.log(removeLineMutation, "remove query");

    const removeResponse = await ShopifyData(removeLineMutation);

    console.log("🧾 Shopify cartLinesRemove response:", removeResponse);

    const updatedCartData = removeResponse?.data?.cartLinesRemove?.cart;

    // Filter out item from local cart
    const updatedCart = cart.filter((i: any) => i.id !== itemToRemoveId);
    setCart(updatedCart);

    // Update checkout URL in case it changes
    setCheckoutUrl(updatedCartData?.checkoutUrl || checkoutUrl);

    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, updatedCartData])
    );

    if (updatedCart.length === 0) {
      setCartOpen(false);
    }
  }

  async function decrementCartItem(
    itemtoDecrementQuantity: any,
    itemtoDecrementId: any
  ) {
    let newCart = [...cart];

    cart.map((item: any) => {
      if (item.id === itemtoDecrementId) {
        item.variantQuantity = itemtoDecrementQuantity - 1;

        if (item.variantQuantity < 1) {
          removeCartItem(item.id);
        }
      }
    });
    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);
    localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
        removeCartItem,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
