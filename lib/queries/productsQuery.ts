import { ShopifyData } from "../shopify";

export async function getProductsInHomePage() {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        totalInventory
        id
        title
        tags
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        metafields(
          identifiers: [{namespace: "custom", key: "primary_intentions"}, {namespace: "custom", key: "secondary_intentions"}, {namespace: "custom", key: "crystals_included"}]
        ) {
          id
          key
          namespace
          value
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
  
  
  `;

  const response = await ShopifyData(query);

  // const allProducts = response.data.products.edges
  //   ? response.data.products.edges
  //   : [];

  const allProducts = response.data.products.edges
    ? response.data.products.edges.filter(
        (product: any) => product.node.handle !== "custom"
      )
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `
    
      {
      products(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle: string) {
  const query = `
   {
  productByHandle(handle: "${handle}") {
    description
    handle
    id
    title
     images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      metafields(
          identifiers: [{namespace: "custom", key: "primary_intentions"}, {namespace: "custom", key: "secondary_intentions"}, {namespace: "custom", key: "crystals_included"}]
        ) {
          id
          key
          namespace
          value
        }
      priceRange {
                minVariantPrice {
                  amount
                }
              }
    options {
          name
          values
          id
        }
    variants(first: 10) {
      edges {
        node {
        selectedOptions {
                name
                value
              }
          id
          price {
           amount
          }
          image {
            altText
            src
          }
          
          title
           
        }
      }
    }
  }
}
  
  `;

  const response = await ShopifyData(query);

  const product = response.data?.productByHandle
    ? response.data?.productByHandle
    : [];

  return product;
}

// export async function getRecommendedProducts(productId: string) {
//   const query = `
//     {
//       productRecommendations(productId: "${productId}") {
//         id
//         title
//         handle
//         description
//           metafields(
//           identifiers: [{namespace: "custom", key: "primary_intentions"}]
//         ) {
//           id
//           key
//           namespace
//           value
//         }
//         featuredImage {
//           url
//           altText
//         }
//         priceRange {
//           minVariantPrice {
//             amount
//             currencyCode
//           }
//         }
//       }
//     }
//   `;

//   const response = await ShopifyData(query);

//   const recommended = response.data?.productRecommendations
//     ? response.data?.productRecommendations
//     : [];

//   return recommended;
// }

export async function getCustomProduct() {
  const query = `
   {
  productByHandle(handle: "custom") {
    description
    handle
    id
    title
     images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      metafields(
          identifiers: [{namespace: "custom", key: "primary_intentions"}, {namespace: "custom", key: "secondary_intentions"}, {namespace: "custom", key: "crystals_included"}]
        ) {
          id
          key
          namespace
          value
        }
      priceRange {
                minVariantPrice {
                  amount
                }
              }
    options {
          name
          values
          id
        }
    variants(first: 10) {
      edges {
        node {
        selectedOptions {
                name
                value
              }
          id
          price {
           amount
          }
          image {
            altText
            src
          }
          
          title
           
        }
      }
    }
  }
}
  
  `;

  const response = await ShopifyData(query);

  const product = response.data?.productByHandle
    ? response.data?.productByHandle
    : [];

  return product;
}
