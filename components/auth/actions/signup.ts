'use server';

// Dependencies
import { eq } from 'drizzle-orm';
import { createClient } from '@/lib/supabase/server';
import { db } from '@/lib/db/db';
import { usersTable } from '@/lib/db/schema';
import { signupSchema } from '@/lib/validations/authSchema';
import { createResponse } from '@/lib/utils/response';

export async function UserSignup(currentState: { message: string }, formData: FormData) {
  const rawData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
    isAgreePolicy: formData.get('isAgreePolicy') === 'true',
  };

  const parsedData = signupSchema.safeParse(rawData);
  if (!parsedData.success) {
    return createResponse(400, {
      data: null,
      message: parsedData?.error?.errors?.[0]?.message,
    });
  }

  const { firstName, lastName, email, password } = parsedData.data;
  const supabase = await createClient();

  try {
    // Existing user
    const existingDBUser = await db.select().from(usersTable).where(eq(usersTable.email, email));

    if (existingDBUser.length > 0) {
      return createResponse(409, {
        data: null,
        message: 'An account with this email already exists.',
      });
    }

    // Signup  user in Supabase Auth
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      if (signUpError.message.includes('already registered')) {
        return createResponse(409, {
          data: null,
          message: 'An account with this email already exists.',
        });
      }

      return createResponse(400, {
        data: null,
        message: signUpError.message,
      });
    }

    const user = signUpData?.user;
    if (!user) {
      return createResponse(400, {
        data: null,
        message: 'Failed to create user.',
      });
    }

    // Insert user into the database
    await db.insert(usersTable).values({
      id: user.id,
      fullName: `${firstName} ${lastName}`.trim(),
      email: user.email ?? '',
      plan: 'none',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return createResponse(200, {
      data: user,
      message: 'Created successfully.',
    });
  } catch (error) {
    console.error('Error in signup:', error);
    return createResponse(500, {
      data: null,
      message: `Network Error: ${error}`,
    });
  }
}
