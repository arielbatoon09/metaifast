'use client';

// Dependencies
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/lib/validations/authSchema';
import { TriangleAlert } from 'lucide-react';

// Components
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

// Form Actions
import { UserSignup } from './actions';
import NameFields from './fields/NameFields';
import PasswordField from './fields/PasswordField';
import TermsAgreement from './fields/TermsAgreement';
import InputField from './fields/InputField';

export function SignupForm() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Debug Formdata
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    const result = await UserSignup({
      message: ''
    }, formData);
    setMessage(result.message);
  }

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isAgreePolicy: false,
    },
    shouldUnregister: false,
  });

  return (
    <Form {...form}>
      {message && (
        <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3.5 text-base text-red-700">
          <TriangleAlert className="h-4 w-4" />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <NameFields control={form.control} />
        <InputField control={form.control} name="email" label="Email address" type="email" placeholder="johndoe@example.com" />
        <PasswordField control={form.control} name="password" />
        <TermsAgreement control={form.control} name="isAgreePolicy" />
        <Button size="lg" className="w-full" type="submit">
          Create account
        </Button>
      </form>
    </Form>
  );
}