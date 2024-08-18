import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Container } from "@/components/Container.tsx";
import { StylizedImage } from "@/components/ProductLanding/UI/StylizedImage.tsx";
import { FadeIn } from "@/components/UI/FadeIn.tsx";

export const Section = ({
  title,
  image,
  children,
}: {
  title: string;
  image: ComponentPropsWithoutRef<typeof StylizedImage>;
  children: ReactNode;
}) => {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className={"w-full flex justify-center mt-16"}>
        <div className="lg:flex lg:items-cenqter lg:justify-end lg:gap-x-6 lg:group-even/section:justify-start xl:gap-x-12">
          <div className="flex justify-center">
            <FadeIn className="w-full sm:w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                {...image}
                sizes="(min-width: 1024px) 33.75rem, 35rem"
                className="justify-center lg:justify-end lg:group-even/section:justify-start"
              />
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <FadeIn>
              <div
                className="font-display text-base font-semibold before:text-orange-600 before:content-['/_']  after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              />
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </FadeIn>
          </div>
        </div>
      </div>
    </Container>
  );
};
