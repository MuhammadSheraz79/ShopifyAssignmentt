import axios from 'axios';
import * as dotenv from 'dotenv';
import { LOCATIONS_QUERY, PRODUCTS_QUERY } from './queries';

dotenv.config();

const SHOPIFY_STORE = process.env.SHOPIFY_STORE_URL!;
const ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN!;
const GRAPHQL_URL = `https://${SHOPIFY_STORE}/admin/api/2024-01/graphql.json`;

const headers = {
  'X-Shopify-Access-Token': ACCESS_TOKEN,
  'Content-Type': 'application/json',
};

async function shopifyQuery(query: string, variables = {}) {
  variables={
    ...variables,
    first: 5
  }
  const response = await axios.post(GRAPHQL_URL, { query, variables }, { headers });
  return response.data.data;
}



export async function fetchProducts() {
  const data = await shopifyQuery(PRODUCTS_QUERY);
  return data.products.edges.map((edge: any) => edge.node);
}

// Fetch Locations
export async function fetchLocations() {
  const data = await shopifyQuery(LOCATIONS_QUERY);
  return data.locations.edges.map((edge: any) => edge.node);
}
