# 🛒 Shopify GraphQL TypeScript App

A simple Node.js + TypeScript application that uses Shopify's Admin GraphQL API to fetch product and location data.

## 🚀 How to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MuhammadSheraz79/ShopifyAssignmentt.git
   cd ShopifyAssignmentt
   ```

2. **Create a `.env` File**

   In the root directory, create a `.env` file and add:

   ```env
   SHOPIFY_ACCESS_TOKEN=<Your Shopify Admin Access Token>
   SHOPIFY_STORE_URL=<Your Shopify Store URL>
   ```

   Example:

   ```env
   SHOPIFY_ACCESS_TOKEN=shpat_abc123xyz456
   SHOPIFY_STORE_URL=my-store.myshopify.com
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Build the Project**

   ```bash
   npm run build
   ```

5. **Start the Project**

   ```bash
   npm start
   ```
## 🔑 Prerequisites

- Node.js v18 or higher
- Shopify development or partner store
- Admin API access token with scopes:
  - `read_products`
  - `read_inventory`
  - `read_locations`
