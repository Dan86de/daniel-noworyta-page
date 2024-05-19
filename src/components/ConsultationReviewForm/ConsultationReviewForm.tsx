"use client";

import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

import { AcceptIsPublicReview } from "@/components/AcceptIsPublicReview.tsx";
import { Button } from "@/components/Button.tsx";
import {
  addReview,
  type ConsultationAddReviewFormState,
} from "@/components/ConsultationReviewForm/actions.ts";
import { CustomUserImageInputField } from "@/components/UploadImageInputField.tsx";

const initialState: ConsultationAddReviewFormState = {
  message: "",
  errors: {
    name: [],
    surname: [],
    url: [],
    review: [],
    image: [],
  },
};

export function ConsultationReviewPageForm() {
  const [state, formAction] = useFormState(addReview, initialState);
  const searchParams = useSearchParams();
  console.log({ searchParams });
  // const router = useRouter();

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
        Formularz do przesłania opinii
      </h2>
      <div className="mt-4 flex flex-col space-y-4 ">
        <div className="flex flex-col space-y-2">
          <input
            autoComplete={"name"}
            type="text"
            placeholder="Imię"
            aria-label="Twoje imię"
            name="name"
            required
            defaultValue={searchParams.get("name") ?? ""}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
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
            placeholder="Nazwisko"
            aria-label="Twoje nazwisko"
            name="surname"
            defaultValue={searchParams.get("surname") ?? ""}
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
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
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
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
          <textarea
            rows={5}
            name="review"
            id="review"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 resize-none"
            placeholder="Treść opinii"
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
        <Button type="submit">{"Dodaj opinie"}</Button>
      </div>
    </form>
  );
}
