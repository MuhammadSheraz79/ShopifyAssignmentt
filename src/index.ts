import { fetchProducts, fetchLocations } from "./graphql/shopifyGraphQL";

async function main() {
  const products = await fetchProducts();
  console.log("Products:", JSON.stringify(products));

  const locations = await fetchLocations();
  console.log("Locations:", JSON.stringify(locations));
}

main();
