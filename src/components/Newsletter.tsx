"use client";
import { useRouter } from "next/navigation";

import { addSubscriberToForm } from "@/api/convertkit.ts";
import { Button } from "@/components/Button.tsx";
import { MailIcon } from "@/components/Icons.tsx";

export function Newsletter() {
  const router = useRouter();

  const processForm = async (data: FormData) => {
    await addSubscriberToForm(data);
    router.push("/newsletter/dzieki");
    return;
  };

  return (
    <form
      action={processForm}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">
          Newsletter <em>Programistafrontend</em>
        </span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Twoje imię"
          aria-label="Twoje imię"
          name="name"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
        />
        <input
          type="email"
          placeholder="Adres email"
          aria-label="Adres email"
          name="email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
        />
        <Button type="submit">{"Dołącz >>"}</Button>
      </div>
      <p className="pt-4 text-xxs">
        „Zapisując się do newslettera, wyrażasz zgodę na otrzymywanie informacji
        o nowościach, promocjach, produktach i usługach programistafrontend.pl.
        Administratorem Twoich danych osobowych będzie{" "}
        <strong className={"font-semibold"}>
          Daniel Noworyta z siedzibą w Bytom 41907, Polska
        </strong>
        . Twoje dane będą przetwarzane do celów związanych z wysyłką
        newslettera”
      </p>
    </form>
  );
}
