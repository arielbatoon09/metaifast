import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HomepageBanner() {
  return (
    <section className="bg-gray-50 py-10 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl font-bold">
              Empower Your Business with Effortless Online Store Creation
            </h1>
            <p className="text-base text-gray-700">
              No technical skills required — create your online store with ease and start selling
              today.
            </p>
            <div className="space-x-2">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-gray-200">
            <Image src="/undraw-website-builder.svg" height={800} width={600} alt="Test" />
          </div>
        </div>
      </div>
    </section>
  );
}
