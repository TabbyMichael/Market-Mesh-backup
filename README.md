# MarketMesh — Multi-seller Marketplace

A modern, mobile-first multi-seller e-commerce marketplace built with Next.js (web), Expo + React Native (mobile), and an Apollo GraphQL backend.

## Tech Stack

- **Frontend:** Next.js, TypeScript, TailwindCSS, shadcn/ui, Apollo Client
- **Mobile:** Expo + React Native (TypeScript)
- **Backend:** Node.js, Apollo Server (GraphQL), TypeScript, Prisma, PostgreSQL, Redis
- **Payments:** Stripe + Stripe Connect
- **Storage:** AWS S3 (or compatible)
- **Dev Tooling:** ESLint, Prettier, Husky, lint-staged, Jest, Playwright

## Architecture

We use a service-based architecture with a GraphQL Federation gateway.

*Architecture diagram to be added in `docs/`.*

## Quickstart

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd marketmesh
    ```

2.  **Install dependencies:**
    Each app and service has its own `package.json`. You will need to install dependencies for each one you are working on. For example, for the web app:
    ```bash
    cd apps/web
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of each app/service that requires one. See the `Environment Variables` section below.

4.  **Run the development servers:**
    Start each service and app in a separate terminal window.
    ```bash
    # Example for a backend service
    cd services/products
    npm run dev

    # Example for the web app
    cd apps/web
    npm run dev
    ```

## Environment Variables

You will need to create `.env` files for various parts of the application. Here is a template of variables you might need:

**`apps/web/.env.local`**
```
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**`services/payments/.env`**
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
DATABASE_URL="postgresql://..."
```

## GraphQL Playground

Once the gateway service is running, you can access the GraphQL Playground at:
[http://localhost:4000/graphql](http://localhost:4000/graphql)

### Sample Queries

**Get all products:**
```graphql
query GetProducts {
  products(page: 1) {
    items {
      id
      title
      priceCents
    }
  }
}
```

## Testing

- **Unit Tests:** Run with `npm test` in the respective service/package directory.
- **E2E Tests:** Run with `npm run test:e2e` in the `apps/web` directory.

## Code Quality

- **Lint:** `npm run lint`
- **Format:** `npm run format`

Pre-commit hooks are set up with Husky and lint-staged to automatically lint and format your code.

## Deployment

- **Web:** Deployed to Vercel via Git push on the `main` branch.
- **Services:** Deployed as Docker containers (e.g., to Railway, Render, or AWS).
- **Mobile:** Built and submitted using Expo Application Services (EAS).

## Contribution Guide

Please follow standard Git workflow:
1. Create a feature branch.
2. Make your changes.
3. Submit a pull request with a clear description of the changes.
# Market-Mesh
# Market-Mesh-backup
