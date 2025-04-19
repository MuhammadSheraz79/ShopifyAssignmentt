export const LOCATIONS_QUERY = `
  query GetLocations($first: Int!) {
    locations(first: $first) {
      edges {
        node {
          id
          name
          address {
            address1
            address2
            city
            province
            country
            zip
            latitude
            longitude
            phone
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
