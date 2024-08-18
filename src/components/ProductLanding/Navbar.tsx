"use client";

import { Popover } from "@headlessui/react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import { cn } from "@/lib/cn.ts";

interface NavbarProps {
  sections: {
    id: string;
    title: string;
  }[];
}

function MenuIcon({
  open,
  ...props
}: ComponentPropsWithoutRef<"svg"> & {
  open: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? "M17 7 7 17M7 7l10 10" : "m15 16-3 3-3-3M15 8l-3-3-3 3"}
      />
    </svg>
  );
}

export function NavBar({ sections }: NavbarProps) {
  const navBarRef = useRef<ElementRef<"div">>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mobileActiveIndex = activeIndex === null ? 0 : activeIndex;

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return;
      }

      let newActiveIndex = null;
      const elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      const bodyRect = document.body.getBoundingClientRect();
      const offset = bodyRect.top + navBarRef.current.offsetHeight + 1;

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(sections.length - 1);
        return;
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index;
        } else {
          break;
        }
      }

      setActiveIndex(newActiveIndex);
    }

    updateActiveIndex();

    window.addEventListener("resize", updateActiveIndex);
    window.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener("resize", updateActiveIndex);
      window.removeEventListener("scroll", updateActiveIndex);
    };
  }, [sections]);

  return (
    <div ref={navBarRef} className="sticky top-0 z-50">
      <Popover className="sm:hidden">
        {({ open }) => (
          <>
            <div
              className={cn(
                "relative flex items-center px-4 py-3",
                !open &&
                  "bg-zinc-50/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-zinc-50/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur",
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-orange-600"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="ml-4 text-base font-medium text-zinc-900">
                    {sections[mobileActiveIndex].title}
                  </span>
                </>
              )}
              <Popover.Button
                className={cn(
                  "-mr-1 ml-auto flex h-8 w-8 items-center justify-center",
                  open && "relative z-10",
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-zinc-700" />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 bg-zinc-50/95 dark:bg-zinc-950/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-zinc-50/80 dark:[@supports(backdrop-filter:blur(0))]:bg-zinc-800/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  as="a"
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center px-4 py-1.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-orange-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="ml-4 text-base font-medium">
                    {section.title}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-zinc-50 dark:bg-zinc-950" />
          </>
        )}
      </Popover>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-zinc-200 sm:bg-zinc-50/95 sm:dark:bg-zinc-950/95 sm:[@supports(backdrop-filter:blur(0))]:bg-zinc-50/80 sm:dark:[@supports(backdrop-filter:blur(0))]:bg-zinc-950/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium [counter-reset:section]"
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`#${section.id}`}
                className={cn(
                  "flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]",
                  sectionIndex === activeIndex
                    ? "border-orange-600 bg-orange-50 dark:bg-orange-50/10 text-orange-600 before:text-orange-600"
                    : "border-transparent before:text-zinc-500 hover:bg-orange-50/40 hover:before:text-zinc-900",
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
