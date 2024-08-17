import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";

import { StarRating } from "@/components/ProductLanding/StarRating.tsx";
import { Prose } from "@/components/Prose.tsx";
import { GridPattern } from "@/components/UI/GridPattern.tsx";
import { Meteors } from "@/components/UI/Meteors.tsx";

export const Hero = ({
  productImage,
  altForProductImage,
  productHeader,
  productSubHeader,
  testimonial,
}: {
  productImage: StaticImageData;
  altForProductImage: string;
  productHeader: string;
  productSubHeader: ReactNode;
  testimonial: {
    content: string;
    author: string;
    authorPosition: string;
  };
}) => {
  return (
    <header className="overflow-hidden lg:px-5 -mt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32 ">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12  -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-gradient-to-r from-orange-500 to-orange-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <Meteors number={60} />
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-3xl bg-transparent md:w-80 lg:w-auto">
            <Image
              width={500}
              height={800}
              className="w-full"
              src={productImage}
              alt={altForProductImage}
              priority
            />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block" />
          <Testimonial
            author={testimonial.author}
            content={testimonial.content}
            authorPosition={testimonial.authorPosition}
          />
        </div>
        <div className=" pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <Prose>
              <h1 className="font-display text-5xl font-extrabold sm:text-6xl">
                {productHeader}
              </h1>
              <p className="mt-4 text-3xl">{productSubHeader}</p>
            </Prose>

            {/*<div className="mt-8 flex gap-4">*/}
            {/*  <Button href="https://aplikacja.pierwszapraca.it" color="orange">*/}
            {/*    Aplikuj do programu*/}
            {/*  </Button>*/}
            {/*  <Button href="#pricing" variant="outline" color="orange">*/}
            {/*    Zobacz intro*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

function Testimonial({
  content,
  author,
  authorPosition,
}: {
  content: string;
  author: string;
  authorPosition: string;
}) {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-orange-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium ">{content}</p>
      </blockquote>
      <figcaption className="mt-2 text-sm ">
        <strong className="font-semibold text-orange-600 before:content-['—_']">
          {author}
        </strong>
        {authorPosition}
      </figcaption>
    </figure>
  );
}
