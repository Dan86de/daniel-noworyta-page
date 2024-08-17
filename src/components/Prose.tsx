// eslint-disable-next-line import/no-named-as-default
import clsx from "clsx";
import React from "react";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-zinc dark:prose-invert dark:prose-zinc prose-a:text-orange-500",
      )}
      {...props}
    />
  );
}
