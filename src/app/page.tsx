import Link from "next/link";
import React from "react";

import { Article } from "@/components/Article.tsx";
import { Container } from "@/components/Container.tsx";
import { Newsletter } from "@/components/Newsletter.tsx";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons.tsx";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles.ts";

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

export default async function Home() {
  const articles: ArticleWithSlug[] = (await getAllArticles()).slice(0, 4);
  return (
    <>
      <Container className="mt-9">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Fullstack Developer, Specjalista ds. Przekwalifikowania na IT.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Daniel Noworyta, programista i specjalista ds. przekwalifikowania.
          Jestem załozycielem kanału Programistafrontend na YouTube, gdzie
          dzielę się swoją wiedzą i doświadczeniem związanym ze zmianą branzy i
          nauką programowania.
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
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            {/*<Resume />*/}
          </div>
        </div>
      </Container>
    </>
  );
}
