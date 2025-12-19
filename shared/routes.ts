import { z } from 'zod';
import { insertInquirySchema } from './schema';

export const api = {
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        200: z.object({ success: z.boolean() }),
      },
    },
  },
};
