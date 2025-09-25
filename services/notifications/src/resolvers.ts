import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const resolvers = {
  Query: {
    notifications: async (_: any, { userId, unreadOnly = false }: any) => {
      // TODO: Implement notifications lookup
      return [
        {
          id: '1',
          userId,
          type: 'ORDER_CONFIRMATION',
          title: 'Order Confirmed',
          message: 'Your order has been confirmed',
          read: false,
          createdAt: new Date().toISOString(),
        },
      ];
    },
    notification: async (_: any, { id }: { id: string }) => {
      // TODO: Implement notification lookup
      return {
        id,
        userId: '1',
        type: 'ORDER_CONFIRMATION',
        title: 'Order Confirmed',
        message: 'Your order has been confirmed',
        read: false,
        createdAt: new Date().toISOString(),
      };
    },
  },
  Mutation: {
    markAsRead: async (_: any, { id }: { id: string }) => {
      // TODO: Implement mark as read
      return {
        id,
        userId: '1',
        type: 'ORDER_CONFIRMATION',
        title: 'Order Confirmed',
        message: 'Your order has been confirmed',
        read: true,
        createdAt: new Date().toISOString(),
      };
    },
    markAllAsRead: async (_: any, { userId }: { userId: string }) => {
      // TODO: Implement mark all as read
      return [];
    },
    sendNotification: async (_: any, { input }: any) => {
      // TODO: Implement notification sending
      const notification = {
        id: '1',
        userId: input.userId,
        type: input.type,
        title: input.title,
        message: input.message,
        read: false,
        createdAt: new Date().toISOString(),
      };

      // Send email notification
      try {
        await transporter.sendMail({
          from: process.env.FROM_EMAIL,
          to: 'user@example.com', // TODO: Get user's email
          subject: input.title,
          text: input.message,
        });
      } catch (error) {
        console.error('Failed to send email:', error);
      }

      return notification;
    },
  },
};
