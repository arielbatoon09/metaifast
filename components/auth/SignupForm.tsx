'use client';

// Dependencies
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TriangleAlert } from 'lucide-react';
import { toast } from 'sonner';

// Components
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

// Form Actions
import { UserSignup } from './actions/signup';
import NameFields from './fields/NameFields';
import PasswordField from './fields/PasswordField';
import TermsAgreement from './fields/TermsAgreement';
import InputField from './fields/InputField';
import { useAuthStore } from '@/lib/store/authStore';

// Form Types
type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAgreePolicy: boolean;
};

export function SignupForm() {
  const { setVerificationStatus } = useAuthStore();
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isAgreePolicy: false,
    },
    shouldUnregister: false,
  });

  // state hook
  const { handleSubmit, reset, control, formState } = form;
  const { isSubmitting } = formState;

  // form submission
  async function onSubmit(formData: SignupFormData) {
    setMessage('');
    setError(false);

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, String(value));
    });

    // Call Server Action
    const result = await UserSignup({ message: '' }, formDataObj);
    setMessage(result.message);

    if (result.status === 'success') {
      reset();

      toast.success('Success', {
        description: 'Your account has been created successfully.',
        duration: 5000,
      });

      setVerificationStatus(result.data?.email ?? '', true);

      return;
    } else {
      return setError(true);
    }
  }

  return (
    <Form {...form}>
      {error && (
        <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3.5 text-base text-red-700">
          <TriangleAlert className="h-4 w-4" />
          <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <NameFields control={control} />
        <InputField
          control={control}
          name="email"
          label="Email address"
          type="email"
          placeholder="johndoe@example.com"
        />
        <PasswordField control={control} name="password" />
        <TermsAgreement control={control} name="isAgreePolicy" />
        <Button
          size="lg"
          className="flex w-full items-center justify-center gap-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          )}
          Create account
        </Button>
      </form>
    </Form>
  );
}
