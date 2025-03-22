import * as z from 'zod';

const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters.')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
  .regex(/[0-9]/, 'Password must contain at least one number.')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character.');

export const signupSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name.'),
  lastName: z.string().min(1, 'Please enter your last name.'),
  email: z.string().email('Please provide a valid email address.'),
  password: passwordSchema,
  isAgreePolicy: z.boolean().refine((value) => value === true, {
    message: 'You need to agree to the terms and conditions to proceed.',
  }),
});

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});
