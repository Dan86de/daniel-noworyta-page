import Link from "next/link";
import React from "react";

import { ContainerInner } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/SocialIcons.tsx";
import { SocialLink } from "@/components/SocialLink.tsx";

export function Footer({ isShop }: { isShop?: boolean }) {
  return (
    <footer className="flex-none">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <ContainerInner>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/*flex flex-wrap justify-center gap-x-6 gap-y-1*/}
            <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-x-2 md:gap-y-2 lg:gap-y-0 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <SocialLink
                href="https://www.youtube.com/c/@danielnoworyta"
                aria-label="Odwiedź mój kanał na YouTube"
                icon={YouTubeIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/danielnoworyta/"
                aria-label="Śledź mnie na platformie LinkedIn"
                icon={LinkedInIcon}
              />
              <SocialLink
                href="https://github.com/Dan86de"
                aria-label="Śledź mnie na GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.instagram.com/programistafrontend/"
                aria-label="Śledź mnie na Instagramie"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://twitter.com/danielnoworyta"
                aria-label="Śledź mnie na platformie X"
                icon={XIcon}
              />
            </div>
            {isShop && (
              <div className="text-sm text-zinc-500 dark:text-zinc-400 flex flex-col">
                <Link href={"/regulamin"}>Regulamin</Link>
                <Link href={"/polityka-prywatnosci"}>Polityka Prywatności</Link>
              </div>
            )}
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Daniel Noworyta. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </ContainerInner>
      </div>
    </footer>
  );
}
