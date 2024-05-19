// eslint-disable-next-line import/no-named-as-default
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/cn.ts";

const variantStyles = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
  secondary:
    "bg-zinc-100 font-medium text-zinc-900 hover:bg-zinc-200 active:bg-zinc-200 active:text-zinc-900/60 dark:bg-zinc-800/75 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/75 dark:active:text-zinc-50/70",
  accept:
    "bg-green-500 text-white hover:bg-green-600 active:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600 dark:active:bg-green-500",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = cn(
    "inline-flex items-center gap-2 justify-center rounded-md pt-2 pb-1.5 px-3 text-sm outline-offset-2 transition active:transition-none " +
      "appearance-none border border-zinc-900/10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 dark:border-zinc-700  dark:focus:border-orange-400 dark:focus:ring-orange-400/10",
    variantStyles[variant],
    className,
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
