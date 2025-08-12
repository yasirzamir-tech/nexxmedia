'use server';
/**
 * @fileOverview An email sending AI agent.
 *
 * - sendEmail - A function that handles sending an email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const SendEmailInputSchema = z.object({
  from: z.string().describe('The email address of the sender.'),
  to: z.string().describe('The email address of the recipient.'),
  subject: z.string().describe('The subject of the email.'),
  html: z.string().describe('The HTML content of the email.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<void> {
  await sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not set in the environment variables.');
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: input.to,
        subject: input.subject,
        html: input.html,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email.');
    }
  }
);
