import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export const resolvers = {
  Query: {
    seller: async (_: any, { id }: { id: string }) => {
      // TODO: Implement seller lookup
      return {
        id,
        user: { id: '1', name: 'Seller', email: 'seller@example.com', role: 'SELLER', createdAt: new Date().toISOString() },
        storeName: 'Sample Store',
        bio: 'A great store',
        payoutAccountId: 'acct_123',
      };
    },
  },
  Mutation: {
    createStripeAccount: async (_: any, { input }: any) => {
      // TODO: Implement Stripe Connect account creation
      return {
        id: '1',
        user: { id: input.userId, name: 'Seller', email: input.email, role: 'SELLER', createdAt: new Date().toISOString() },
        storeName: input.storeName,
        bio: 'A great store',
        payoutAccountId: 'acct_123',
      };
    },
    createPaymentIntent: async (_: any, { input }: any) => {
      // TODO: Implement Stripe PaymentIntent creation
      const paymentIntent = await stripe.paymentIntents.create({
        amount: input.amount,
        currency: input.currency,
      });

      return {
        id: paymentIntent.id,
        clientSecret: paymentIntent.client_secret,
        amount: input.amount,
        currency: input.currency,
      };
    },
    confirmPayment: async (_: any, { input }: any) => {
      // TODO: Implement payment confirmation
      return {
        id: '1',
        amount: 2999,
        currency: 'USD',
        status: 'SUCCEEDED',
        orderId: '1',
      };
    },
  },
};
