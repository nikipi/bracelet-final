const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

export async function ShopifyData(query: string) {
  const URL = `https://gw06ue-je.myshopify.com/api/2025-04/graphql.json`;

  const options: any = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": "cfc86bdf3dbaaf678314a95ee0f6cead",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Data not fetched");
  }
}
