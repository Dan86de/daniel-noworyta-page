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
  YouTubeIcon,
} from "@/components/SocialIcons.tsx";
import { SocialLink } from "@/components/SocialLink.tsx";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles.ts";

export default async function Home() {
  const articles: ArticleWithSlug[] = (await getAllArticles()).slice(0, 4);
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Pomagam od zera nauczyć się programowania i zdobyć pracę w IT.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Daniel Noworyta, programista samouk. Jestem założycielem kanału{" "}
            <Link
              className="text-orange-500 underline"
              href={"https://youtube.com/c/@danielnoworyta"}
              target={"_blank"}
            >
              Programistafrontend na YouTube
            </Link>
            , gdzie dzielę się swoją wiedzą i doświadczeniem związanym z nauką
            programowania, zmianą branży i rozwojem swojej kariery w IT.
          </p>
          <div className="mt-6 flex gap-6">
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
        </div>
      </Container>
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16 row-start-2 lg:row-start-1">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}
