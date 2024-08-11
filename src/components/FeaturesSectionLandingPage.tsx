import { type ReactNode } from "react";

interface FeaturesSectionLandingPageProps {
  features: Feature[];
  title: string;
  description: ReactNode;
}

type Feature = {
  name: string;
  description: string;
};

export const FeaturesSectionLandingPage = ({
  features,
  title,
  description,
}: FeaturesSectionLandingPageProps) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {description}
          </div>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                {feature.name}
              </dt>
              <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
