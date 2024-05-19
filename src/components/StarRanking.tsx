"use client";
import { useState } from "react";

import { StarIcon } from "@/components/Icons.tsx";
import { cn } from "@/lib/cn.ts";

export const StarRanking = ({}) => {
  const [ratingValue, setRatingValue] = useState(5);

  return (
    <div className="stars-rating:fill-orange-500 current-hover:fill-orange-500 mb-4 mt-2 flex flex-row-reverse items-center justify-center">
      <StarIcon
        name="rating"
        onClick={() => {
          setRatingValue(5);
        }}
        className={cn(
          ratingValue === 5 ? "fill-orange-500" : "",
          "h-8 w-8 cursor-pointer stroke-orange-500 p-1",
        )}
      />

      <StarIcon
        onClick={() => {
          setRatingValue(4);
        }}
        className={cn(
          ratingValue >= 4 ? "fill-orange-500" : "",
          "h-8 w-8 cursor-pointer stroke-orange-500 p-1",
        )}
      />
      <StarIcon
        onClick={() => {
          setRatingValue(3);
        }}
        className={cn(
          ratingValue >= 3 ? "fill-orange-500" : "",
          "h-8 w-8 cursor-pointer stroke-orange-500 p-1",
        )}
      />
      <StarIcon
        onClick={() => {
          setRatingValue(2);
        }}
        className={cn(
          ratingValue >= 2 ? "fill-orange-500" : "",
          "h-8 w-8 cursor-pointer stroke-orange-500 p-1",
        )}
      />
      <StarIcon
        onClick={() => {
          setRatingValue(1);
        }}
        className={cn(
          ratingValue >= 1 ? "fill-orange-500" : "",
          "h-8 w-8 cursor-pointer stroke-orange-500 p-1",
        )}
      />
      <input
        type={"number"}
        hidden
        name={"rating"}
        value={ratingValue}
        readOnly
      />
    </div>
  );
};
