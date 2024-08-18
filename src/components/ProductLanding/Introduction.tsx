import { type ReactNode } from "react";

import { Container } from "@/components/Container.tsx";
import { Prose } from "@/components/Prose.tsx";

interface IntroductionProps {
  content: ReactNode;
  title?: string;
}

export const Introduction = ({ title, content }: IntroductionProps) => {
  return (
    <section
      id="introduction"
      aria-label="Wstęp"
      className="pb-8 pt-16 sm:pb-12 md:pt-36 lg:py-24"
    >
      <Container className="text-lg tracking-tight">
        <Prose className="mx-auto lg:prose-xl">
          {title && (
            <h2 className="font-display text-4xl font-bold tracking-tight">
              {title}
            </h2>
          )}
          {content && content}
        </Prose>
      </Container>
    </section>
  );
};
