import Image from 'next/image';
import { Check } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="bg-white py-10 lg:py-24" id="how-cotove-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full bg-gray-100 px-6 py-1 font-medium">How Cotove Works</span>
          <h2 className="text-4xl font-bold">Build your store in a few clicks</h2>
        </div>

        <div className="mt-20 grid grid-cols-1 grid-cols-2 items-center gap-20">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="inline-block rounded-full bg-green-100 px-4 py-1 text-green-700">
                1 - Create
              </p>
              <h3 className="text-2xl font-bold">
                Generate your site with AI or start with a template
              </h3>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check />
                <p>Generate sitemap & wireframes with AI</p>
              </li>
              <li className="flex items-center gap-2">
                <Check />
                <p>Generate sitemap & wireframes with AI</p>
              </li>
              <li className="flex items-center gap-2">
                <Check />
                <p>Generate sitemap & wireframes with AI</p>
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="/placeholder.png"
              alt="placeholder"
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 grid-cols-2 items-center gap-20">
          <div>
            <Image
              src="/placeholder.png"
              alt="placeholder"
              layout="responsive"
              width={400}
              height={400}
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="inline-block rounded-full bg-green-100 px-4 py-1 text-green-700">
                2 - Create
              </p>
              <h3 className="text-2xl font-bold">
                Generate your site with AI or start with a template
              </h3>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check />
                <p>Generate sitemap & wireframes with AI</p>
              </li>
              <li className="flex items-center gap-2">
                <Check />
                <p>Generate sitemap & wireframes with AI</p>
              </li>
              <li className="flex items-center gap-2">
                <Check />
                <p>Generate sitemap & wireframes with AI</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
