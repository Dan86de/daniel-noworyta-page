"use client";
import { useState } from "react";

import { StarIcon } from "@/components/Icons.tsx";
import { cn } from "@/lib/cn.ts";

export const StarRanking = ({}) => {
  const [ratingValue, setRatingValue] = useState(5);

  return (
    <>
      <div className="stars-rating:fill-orange-500 current-hover:fill-orange-500 mb-2 mt-2 flex flex-row-reverse items-center justify-center">
        <StarIcon
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
      <div>
        {ratingValue === 5 && (
          <div>
            <p>Co sądzisz o konsultacjach?</p>
            <p className={"text-sm pt-4"}>
              Pytania pomocnicze (nie musisz się nimi kierować):
            </p>
            <ul className={"text-xs list-disc ml-3 mb-2 opacity-75"}>
              <li>Jakie były Twoje wątpliwości przed konsultacją?</li>
              <li>Co się zmieniło po tej konsultacji?</li>
              <li>Który fragment uważasz za najbardziej przydatny?</li>
              <li>
                Czy polecił(a)byś te konsultacje znajomemu? Jeżeli tak,
                dlaczego?
              </li>
            </ul>
          </div>
        )}
        {ratingValue !== 5 && (
          <div>
            <p className={"text-sm"}>
              Czego Ci zabrakło? Co mógłbym poprawić, żeby te konsultacje były
              dla Ciebie bardziej przydatne?
            </p>
            <p className={"pt-4 text-xs opacity-75 mb-2"}>
              Ankieta jest anonimowa, ale jeżeli podasz adres swojej strony,
              skontaktuję się z Tobą i postaram się podpowiedzieć coś
              indywidualnie.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
