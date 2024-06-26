import Link from "next/link";
import React from "react";

export function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-orange-600 dark:fill-zinc-400 dark:group-hover:fill-orange-300" />
    </Link>
  );
}
