import Link from "next/link";
import React from "react";

import { Container } from "@/components/Container.tsx";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons.tsx";

function SocialLink({
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

export default function Home() {
  return (
    <Container className="mt-9">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Fullstack Developer, Specjalista ds. Przekwalifikowania.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Daniel Noworyta, programista i specjalista ds. przekwalifikowania.
        Jestem załozycielem kanału Programistafrontend na YouTube, gdzie dzielę
        się swoją wiedzą i doświadczeniem związanym ze zmianą branzy i nauką
        programowania.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://twitter.com/danielnoworyta"
          aria-label="Śledź mnie na platformie X"
          icon={XIcon}
        />
        <SocialLink
          href="https://www.instagram.com/programistafrontend/"
          aria-label="Śledź mnie na Instagramie"
          icon={InstagramIcon}
        />
        <SocialLink
          href="https://github.com/Dan86de"
          aria-label="Śledź mnie na GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/danielnoworyta/"
          aria-label="Śledź mnie na platformie LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </Container>
  );
}
