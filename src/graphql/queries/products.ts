export const PRODUCTS_QUERY = `
query GetProductsAndInventory($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        vendor
        description
        createdAt
        updatedAt
        status
        productType
        tags
        variants(first: 10) {
          edges {
            node {
              id
              title
              sku
              price
              inventoryQuantity
              weight
              weightUnit
              inventoryItem {
                id
                sku
                tracked
                countryCodeOfOrigin
                provinceCodeOfOrigin
                harmonizedSystemCode
              }
            }
          }
        }
      }
    }
  }
}
`;
