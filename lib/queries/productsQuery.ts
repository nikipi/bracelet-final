import { ShopifyData } from "../shopify";

export async function getProductsInHomePage() {
  const query = `
  query  {
  
    
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

  const allProducts = response.data.products.edges
    ? response.data.products.edges
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
  productByHandle(handle: "crystaragem-bracelets") {
    description
    handle
    id
    title
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

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}
