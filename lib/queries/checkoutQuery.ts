import { ShopifyData } from "../shopify";

export async function createCheckout(id: any, quantity: any) {
  const query = `
        mutation {
          cartCreate(input: {
            lines: [
              {
                merchandiseId: "${id}"
                quantity: ${quantity}
              }
            ]
          }) {
            cart {
              id
              checkoutUrl
              lines(first:5){
                edges{node{id}}
              }
            }
            userErrors {
              field
              message
            }
          }
        }
    `;

  const response = await ShopifyData(query);

  const checkout = response.data.cartCreate.cart
    ? response.data.cartCreate.cart
    : [];

  return checkout;
}

export async function updateCheckout(cartId: string, lineItems: any[]) {
  console.log("Updating checkout...");
  console.log("Cart ID:", cartId);
  console.log("Line items received:", lineItems);

  const linesWithCartId = lineItems.filter((item: any) => item.cartLineId);

  const lineItemsObject = linesWithCartId.map((item: any) => {
    return `{
      id: "${item.cartLineId}",
      quantity: ${item.variantQuantity}
    }`;
  });

  console.log("Mapped lineItemsObject for mutation:", lineItemsObject);

  const query = `
    mutation {
      cartLinesUpdate(cartId: "${cartId}", lines: [${lineItemsObject}]) {
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

  console.log("Sending updateCheckout mutation:", query);

  const response = await ShopifyData(query);

  console.log("Response from Shopify updateCheckout:", response);

  return response.data?.cartLinesUpdate?.cart || [];
}

export async function recursiveCatalog(cursor = "", initialRequest = true) {
  let data: any;

  if (cursor !== "") {
    const query = `{
        products(after: "${cursor}", first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log("Cursor: ", cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
        products(first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
      `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}
