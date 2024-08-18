import { cn } from "@/lib/cn.ts";

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul role="list" className={cn(className, "flex flex-wrap gap-2")}>
      {children}
    </ul>
  );
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "inline-flex items-center px-4 py-1.5 text-xs rounded-full  text-orange-600 ring-1 ring-inset ring-orange-600",
        className,
      )}
    >
      {children}
    </li>
  );
}
