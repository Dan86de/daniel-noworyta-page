import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

import { Container } from "@/components/Container";
import {
  Expandable,
  ExpandableItems,
  ExpandableButton,
} from "@/components/ProductLanding/UI/Expandable.tsx";
import { SectionHeading } from "@/components/ProductLanding/UI/SectionHeading.tsx";

type TestimonialAuthor = {
  name: string;
  url: string;
  image: ImageProps["src"];
};

function Testimonial({
  author,
  children,
}: {
  author: TestimonialAuthor;
  children: ReactNode;
}) {
  return (
    <figure className="p-8 shadow-md ring-1 ring-zinc-900/5 dark:ring-zinc-700 rounded-4xl">
      <blockquote>
        <p className="text-lg tracking-tight before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-zinc-50">
          {author.image && (
            <Image
              className="h-12 w-12 object-cover"
              src={author.image}
              alt=""
              width={48}
              height={48}
            />
          )}
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight">
            {author.name}
          </div>
          <Link
            href={author.url}
            target={"_blank"}
            className="mt-1 text-sm opacity-50"
          >
            {author.url}
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

interface TestimonialsProps {
  testimonials: {
    content: ReactNode;
    author: TestimonialAuthor;
  }[][];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      className="scroll-mt-20 pt-20 md:pt-36 py-8 sm:py-10 lg:py-16"
      id="testimonials"
      aria-label="testimonials-title"
    >
      <Container>
        {/*  TO SIĘ POWTARZA MOZNA KOMPONENT ZROBIC*/}
        <SectionHeading number="2" id="testimonials-title">
          Opinie
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight">
          Opinie osób, którym miałem okazję pomóc...
        </p>
        <p className="mt-4 text-lg tracking-tight opacity-75">
          Do tej pory z moich konsultacji skorzystało kilka osób. Posłuchaj, co
          mieli do powiedzenia na temat współpracy ze mną i rad jakie im
          przekazałem.
        </p>
        {/*    KONIEC KOMPONENTU*/}
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && "hidden lg:list-item",
                        testimonialIndex === 1 && "lg:mt-8",
                        testimonialIndex > 1 && "mt-8",
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Wczytaj więcej opinii</ExpandableButton>
      </Expandable>
    </section>
  );
}
