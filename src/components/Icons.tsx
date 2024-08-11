import { type ComponentPropsWithoutRef } from "react";

export function MailIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export function StarIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

export function RightArrowIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="41"
      height="15"
      viewBox="0 0 41 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.7071 8.20711C41.0976 7.81658 41.0976 7.18342 40.7071 6.79289L34.3431 0.428932C33.9526 0.0384079 33.3195 0.0384079 32.9289 0.428932C32.5384 0.819456 32.5384 1.45262 32.9289 1.84315L38.5858 7.5L32.9289 13.1569C32.5384 13.5474 32.5384 14.1805 32.9289 14.5711C33.3195 14.9616 33.9526 14.9616 34.3431 14.5711L40.7071 8.20711ZM0 8.5H40V6.5H0V8.5Z"
        fill="#FAFAFA"
      />
    </svg>
  );
}
export function RightArrowShortIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.7071 8.7071C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928931C17.9526 0.538406 17.3195 0.538406 16.9289 0.928931C16.5384 1.31946 16.5384 1.95262 16.9289 2.34314L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.7071ZM8.74228e-08 9L24 9L24 7L-8.74228e-08 7L8.74228e-08 9Z"
        fill="#FAFAFA"
      />
    </svg>
  );
}
