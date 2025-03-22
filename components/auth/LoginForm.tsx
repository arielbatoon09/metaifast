// Dependencies
import { useForm } from 'react-hook-form';

// Components
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

// Form Actions
import InputField from './fields/InputField';
import PasswordField from './fields/PasswordField';

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    shouldUnregister: false,
  });

  // state hook
  const { control } = form;

  return (
    <Form {...form}>
      <form className="space-y-6">
        <InputField
          control={control}
          name="email"
          label="Email address"
          type="email"
          placeholder="johndoe@example.com"
        />

        <PasswordField control={control} name="password" tooltip={false} />

        <Button size="lg" className="flex w-full items-center justify-center gap-2" type="submit">
          Sign in
        </Button>
      </form>
    </Form>
  );
}
