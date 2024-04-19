import React from "react";

import { ContainerInner, ContainerOuter } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/SocialIcons.tsx";
import { SocialLink } from "@/components/SocialLink.tsx";

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
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
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Daniel Noworyta. Wszelkie
                prawa zastrzeżone.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
