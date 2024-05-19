"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { AcceptIsPublicReview } from "@/components/AcceptIsPublicReview.tsx";
import { Button } from "@/components/Button.tsx";
import { addReview } from "@/components/ConsultationReviewForm/actions.ts";
import { StarRanking } from "@/components/StarRanking.tsx";
import { CustomUserImageInputField } from "@/components/UploadImageInputField.tsx";

export type ConsultationAddReviewFormState = {
  message: string;
  errors: {
    name: string[];
    surname: string[];
    url: string[];
    review: string[];
    image: string[];
    rating: string[];
  };
};

const initialState: ConsultationAddReviewFormState = {
  message: "",
  errors: {
    name: [],
    surname: [],
    url: [],
    review: [],
    image: [],
    rating: [],
  },
};

export function ConsultationReviewPageForm() {
  const [state, formAction] = useFormState(addReview, initialState);
  const { pending } = useFormStatus();
  const searchParams = useSearchParams();

  return (
    <Suspense>
      <form
        action={formAction}
        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 text-lg justify-center">
          Oceń konsultacje ze mną
        </h2>
        <div className="mt-4 flex flex-col space-y-4 ">
          <div className="flex flex-col">
            <input
              autoComplete={"name"}
              type="text"
              placeholder="Twoje Imię"
              aria-label="Twoje imię"
              name="name"
              required
              defaultValue={searchParams.get("name") ?? ""}
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 mb-2"
            />
            <ul className={"pt-0.5"}>
              {state.errors.name.length > 0 &&
                state.errors.name.map((error) => {
                  return (
                    <li key={error}>
                      <p className={"text-sm text-red-600"}>{error}</p>
                    </li>
                  );
                })}
            </ul>
            <input
              autoComplete={"surname"}
              type="text"
              placeholder="Twoje Nazwisko"
              aria-label="Twoje nazwisko"
              name="surname"
              defaultValue={searchParams.get("surname") ?? ""}
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 mb-2"
            />
            <ul className={"pt-0.5"}>
              {state.errors.surname.length > 0 &&
                state.errors.surname.map((error) => {
                  return (
                    <li key={error}>
                      <p className={"text-sm text-red-600"}>{error}</p>
                    </li>
                  );
                })}
            </ul>
            <input
              type="url"
              placeholder="Link do Twojej strony"
              aria-label="Link do Twojej strony"
              name="url"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 mb-4"
            />
            <ul className={"pt-0.5"}>
              {state.errors.url.length > 0 &&
                state.errors.url.map((error) => {
                  return (
                    <li key={error}>
                      <p className={"text-sm text-red-600"}>{error}</p>
                    </li>
                  );
                })}
            </ul>
            <p className={"font-medium"}>Jak oceniasz konsultacje ze mną?</p>
            <p className={"text-xs opacity-75 mt-0"}>
              Im więcej gwiazdek zaznaczysz, tym wyższa ocena.
            </p>
            <StarRanking />

            <textarea
              rows={5}
              name="review"
              id="review"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 resize-none mb-4"
              placeholder="Treść Twojej opinii"
              required
            />
            <ul className={"pt-0.5"}>
              {state.errors.review.length > 0 &&
                state.errors.review.map((error) => {
                  return (
                    <li key={error}>
                      <p className={"text-sm text-red-600"}>{error}</p>
                    </li>
                  );
                })}
            </ul>
            <AcceptIsPublicReview />
            <CustomUserImageInputField name={"image"} />
            <ul className={"pt-0.5"}>
              {state.errors.image.length > 0 &&
                state.errors.image.map((error) => {
                  return (
                    <li key={error}>
                      <p className={"text-sm text-red-600"}>{error}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <Button
            variant={"primary"}
            type="submit"
            className={"bg-orange-600 dark:bg-orange-600"}
            disabled={pending}
          >
            {pending ? "Wysyłam opinię" : "Dodaj opinię"}
          </Button>
        </div>
      </form>
    </Suspense>
  );
}
