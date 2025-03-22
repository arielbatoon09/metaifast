import Link from 'next/link';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type AuthMode = 'login' | 'signup';

export function Authentication({ auth }: { auth: AuthMode }) {
  return (
    <section className="flex min-h-screen">
      {/* Authentication Form */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2">
        <div className="flex w-full max-w-lg flex-col">
          {/* Dynamic Auth Page Header */}
          <AuthHeader page={auth} />

          {/* Render Form */}
          {auth === 'login' ? <LoginForm /> : <SignupForm />}

          {/* Alternative Indicator */}
          <div className="relative my-6 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
            <div className="relative bg-white px-2 text-sm whitespace-nowrap text-gray-500">
              {auth === 'login' ? "Don't have an account?" : 'Already have an account?'}
            </div>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          {/* Alternative Button */}
          <Link href={auth === 'login' ? '/signup' : '/login'}>
            <Button className="w-full" size="lg" variant="outline">
              <span>{auth === 'login' ? 'Create an account' : 'Sign in instead'}</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* Auth Banner */}
      <div className="relative hidden w-1/2 items-center justify-center bg-gray-50 p-12 lg:flex">
        <div className="grid-background absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

        <div className="relative max-w-md">
          <span>Welcome to Our Platform</span>
        </div>
      </div>
    </section>
  );
}

// Dynamic Page Auth Header
const AuthHeader = ({ page }: { page: AuthMode }) => {
  const text = {
    login: {
      title: 'Welcome back',
      subtitle: 'Create your account',
    },
    signup: {
      title: 'Get Started For Free',
      subtitle: 'No credit card required',
    },
  };
  const { title, subtitle } = text[page];

  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{subtitle}</p>
    </div>
  );
};
