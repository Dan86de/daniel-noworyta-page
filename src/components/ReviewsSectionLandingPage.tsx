import Image from "next/image";

import { StarIcon } from "@/components/Icons.tsx";
import { Prose } from "@/components/Prose.tsx";
import { cn } from "@/lib/cn.ts";

interface ReviewsSectionLandingPageProps {
  reviews: Review[];
}

export type Review = {
  id: string;
  // title: string;
  content: string;
  rating: number;
  author: { name: string; image: string };
};

export const ReviewsSectionLandingPage = ({
  reviews,
}: ReviewsSectionLandingPageProps) => {
  return (
    <section className={""}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl mb-12">
        Co mówią osoby, które skorzystały z konsultacji?
      </h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col sm:flex-row">
            <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
              {/*<h3 className="text-sm font-medium text-zinc-900">*/}
              {/*  {review.title}*/}
              {/*</h3>*/}
              <p className="sr-only">{review.rating} out of 5 stars</p>

              <Prose className={"max-w-none"}>
                <p>{review.content}</p>
              </Prose>
            </div>
            <div className="order-1 flex items-center sm:flex-col sm:items-start w-[124px]">
              <Image
                width={100}
                height={100}
                alt={`${review.author.name}.`}
                src={review.author.image}
                className="h-12 w-12 rounded-full aspect-square object-cover"
              />

              <div className="ml-4 sm:ml-0 sm:mt-4">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {review.author.name}
                </p>
                <div className="mt-2 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={cn(
                        review.rating > rating
                          ? "text-zinc-900 dark:text-zinc-100 fill-orange-500"
                          : "text-zinc-900 dark:text-zinc-100",
                        "h-5 w-5 flex-shrink-0 ",
                        "stroke-orange-500 p-1 fill-orange-500",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
