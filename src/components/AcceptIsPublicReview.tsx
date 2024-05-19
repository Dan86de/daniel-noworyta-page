import * as Switch from "@radix-ui/react-switch";

export function AcceptIsPublicReview() {
  return (
    <label className={"flex items-center space-x-2"}>
      <Switch.Root
        name={"isPublic"}
        defaultChecked
        className={
          "p-px w-11 min-w-11 rounded-full bg-zinc-50 border border-spacing-4 border-zinc-900/10 data-[state=checked]:bg-orange-600 duration-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-800 dark:data-[state=checked]:shadow-orange-800 data-[state=checked]:shadow-orange-700 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 dark:bg-zinc-600 dark:focus:border-orange-400 dark:focus:ring-orange-400/10 shadow-inner active:bg-zinc-100 dark:active:bg-zinc-500"
        }
      >
        <Switch.Thumb
          className={
            "h-[22px] w-[22px] bg-zinc-300 block rounded-full data-[state=checked]:bg-zinc-100 data-[state=checked]:translate-x-[18px] transition duration-300 shadow dark:bg-zinc-700 dark:shadow-zinc-800/5"
          }
        />
      </Switch.Root>
      <p className={"pt-1 text-zinc-700 dark:text-zinc-300 text-xs"}>
        Wyrażam zgodę na publikację opinii na stronie
      </p>
    </label>
  );
}
