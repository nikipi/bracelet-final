import { ShoppingBag } from "lucide-react";

import { useUI } from "../../context/ui.context";
import { useContext } from "react";
import { CartContext } from "../../context/shopContext";

import MiniCart from "./minicart";
const CartButton = () => {
  const { cart }: any = useContext(CartContext);
  const { cartOpen }: any = useContext(CartContext);
  const { setCartOpen }: any = useContext(CartContext);
  

  let cartQuantity = 0;
  cart?.map((item: any) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <button
        className="relative p-2"
        onClick={() => setCartOpen(!cartOpen)}
        aria-label="cart-button"
      >
        <MiniCart cart={cart} />
        <ShoppingBag className="h-5 w-5 text-[#2c2c2c]" />

        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-[#c9a87c] text-white text-xs flex items-center justify-center">
          {cartQuantity}
        </span>
      </button>
    </>
  );
};

export default CartButton;
