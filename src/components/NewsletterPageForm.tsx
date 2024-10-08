import { addSubscriberToForm } from "@/api/convertkit.ts";
import { Button } from "@/components/Button.tsx";
import { MailIcon } from "@/components/Icons.tsx";

export function NewsletterPageForm() {
  return (
    <form
      action={addSubscriberToForm}
      className="rounded-2xl  border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6" />
        <span className="ml-3 pt-0.5">Newsletter Programistafrontend</span>
      </h2>
      <div className="mt-4 flex flex-col space-y-4 ">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Imię"
            aria-label="Twoje imię"
            name="name"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
          />
          <input
            type="email"
            placeholder="Adres email"
            aria-label="Adres email"
            name="email"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 pt-[calc(theme(spacing.2)-4px)] pb-[calc(theme(spacing.2)-6px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/10"
          />
        </div>
        <Button variant={"orange"}>{"Dołączam >>"}</Button>
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
