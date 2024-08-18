import Image from "next/image";

import { SectionHeading } from "@/components/ProductLanding/UI/SectionHeading.tsx";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";
import { SocialLink } from "@/components/SocialLink";
import { GridPattern } from "@/components/UI/GridPattern.tsx";
import authorImage from "@/images/avatar.jpg";

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 dark:text-zinc-50/10 [mask-image:linear-gradient(transparent,zinc-100)] dark:[mask-image:linear-gradient(transparent,zinc-900/10)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-zinc-100 dark:bg-zinc-800 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="3" id="author-title">
              O mnie
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
              <span className="block text-orange-600">Daniel Noworyta –</span>{" "}
              Cześć,
            </p>
            <p className="mt-4 text-lg tracking-tight opacity-75">
              W 2018 roku pracowałem na etacie i czułem, że coś jest nie tak.
              Nie byłem zadowolony ze swojej pracy i wiedziałem, że muszę coś
              zmienić. Zacząłem szukać informacji o branży IT. Znalazłem mnóstwo
              materiałów, ale nie wiedziałem, od czego zacząć. Wiedziałem jednak
              jedno – chciałem zostać front-end developerem.
            </p>
            <p className="mt-4 text-lg tracking-tight opacity-75">
              Każdego dnia uczyłem się programowania i dokumentowałem swój
              proces na{" "}
              <a
                href={"https://youtube.com/c/danielnoworyta"}
                target={"_blank"}
                className={"text-orange-600 underline"}
              >
                moim kanale YouTube, Programistafrontend.
              </a>{" "}
              Po ponad dwóch latach i sześciu miesiącach ciężkiej pracy, udało
              mi się zdobyć swoją pierwszą pracę jako front-end developer. Dziś
              jestem szczęśliwy, że mogę robić to, co kocham.
            </p>
            <p className="mt-4 text-lg tracking-tight opacity-75">
              Jednak to nie wszystko. Uwielbiam patrzeć, jak ludzie wokół mnie
              rozwijają swoje umiejętności i osiągają swoje cele. Dlatego tworzę
              w internecie. Chcę pomóc innym, którzy są na początku swojej drogi
              do IT tak jak ja kiedyś.
            </p>
            <p className="mt-4 text-lg tracking-tight opacity-75">
              Rynek dla juniorów nie jest łaskawy i ciężko się wyróżnić. Sam
              aplikowałem do pierwszej pracy, mając ponad 30 lat na karku i
              rodzinę na utrzymaniu. Wiem, co dało mi zatrudnienie i teraz chcę
              pomóc Ci wyróżnić się na tle innych kandydatów i zdobyć swoją
              pierwszą pracę w IT.
            </p>
            <p className="mt-4 text-lg tracking-tight opacity-75">
              Każdy uczestnik konsultacji jest dla mnie ważny. Dlatego zależy mi
              na tym, aby każdy, kto przystępuje do pracy ze mną, mógł osiągnąć
              sukces. Razem możemy przejść przez tę trudną, ale
              satysfakcjonującą drogę do kariery w IT.
            </p>

            <div className="mt-6 flex gap-6 justify-center">
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
        </div>
      </div>
    </section>
  );
}
