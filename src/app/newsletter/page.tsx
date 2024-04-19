import Image from "next/image";
import React from "react";

import { Container } from "@/components/Container.tsx";
import { NewsletterPageForm } from "@/components/NewsletterPageForm.tsx";
import { Prose } from "@/components/Prose.tsx";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/SocialIcons.tsx";
import { SocialLink } from "@/components/SocialLink.tsx";
import portraitImage from "@/images/avatar.jpg";
import signature from "@/images/signature.webp";
import signatureDark from "@/images/signature_dark_white.webp";

export default function NewsletterPromo() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 ">
        <Prose>
          <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 mt-12">
            Hej!
          </h2>
          <ul>
            <li>Pracujesz na etacie, ale chcesz zmienić branżę?</li>
            <li>Marzysz o zostaniu programistą i pracy w branży IT ?</li>
            <li>Myślisz, że zmiana branży jest nieosiągalnym wyzwaniem?</li>
          </ul>
          <p>
            Wiem co czujesz. <br />
            Też tak miałem.
          </p>
          <p>
            Przez większość mojego życia odsuwałem od siebie marzenie o byciu
            programistą i robieniu tego co kocham. W 2020 roku spełniłem
            marzenie i zostałem programistą. W newsletterze pokazuję, jak to
            zrobiłem pomimo pracy na etacie i obowiązków rodzinnych.
          </p>

          <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 mt-12">
            Dlaczego powinieneś się zapisać?
          </h2>
          <ul>
            <li>pokażę Ci jak uczyłem się programowania na własną rękę</li>
            <li>
              co tydzień dostaniesz mięsisty email o tym, jak zostać programistą
            </li>
            <li>
              pokażę Ci jak zmienić branżę tak, by nie ucierpiały Twoje finanse
              i relacje z bliskimi
            </li>
          </ul>
          <p>
            Wszystko to bez motywacyjnego bełkotu i lania wody. Konkrety, które
            sam chciałem dostać na początku. Konkrety o których nikt inny Ci nie
            powie.
          </p>
          <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 mt-12">
            Dlaczego możesz mi zaufac?
          </h2>
          <p>
            Przez 10 lat byłem inżynierem w branży samochodowej. Za pomocą
            programu ICEMSurf tworzyłem powierzchnie klasy A dla największych
            marek samochodowych. Pracowałem dla takich marek jak Volkswagen,
            Porsche czy Volvo. Jednak coś ciągle mówiło mi, że to nie jest to.
          </p>
          <p>
            Z bagażem życiowych doświadczeń, rodziną i 30 na karku postanowiłem
            coś zmienić.
            <strong>
              {" "}
              Postanowiłem, że zostanę frontend web developerem. Zacząłem
              wstawać codziennie o 5 rano, by uczyć się programowania na własną
              rękę.
            </strong>
          </p>
          <p>
            I tak mijały dni i lata . . . Po prawie 3 latach pełnych silnej woli
            i pragnienia udało się.{" "}
            <strong>
              W dniu 1.12.2020 zacząłem pracę jako programistafrontend w jednej
              z największych Niemieckich firm z branży informatycznej.
            </strong>{" "}
          </p>
          <p>
            Czy było łatwo ? Pewnie, że nie ! Jeżeli ktoś mówi Ci, że jest to
            łatwy proces. Dobrze radzę przestań słuchać.
          </p>
          <strong>
            Chcesz zmienić branżę ?<br />
            Chcesz zostać programistą ?<br /> Założyłem ten newsletter, by Ci
            pomóc.
            <br />
          </strong>
          <p>
            Świetnie ! Muszę jednak coś zaznaczyć. To nie będzie łatwa podróż.
            Koniec, końców wszystko rozbija się o to jak bardzo tego pragniesz.
            No więc, jak będzie ? Pragniesz tego z całego serducha i nie widzisz
            siebie w innym zawodzie ?
          </p>
          <p>
            Zapraszam Cię na pokład. Czeka Cię podróż pełna pasji, poświęceń i
            radości.
          </p>
          <div className={"w-full flex align-baseline justify-end"}>
            <Image
              src={signature}
              alt="podpis"
              width={200}
              height={100}
              className="aspect-video dark:hidden"
            />
            <Image
              src={signatureDark}
              alt="podpis"
              width={200}
              height={100}
              className="hidden aspect-video dark:block"
            />
          </div>
        </Prose>
        <div className="relative">
          <div className="sticky inset-y-16 sm:inset-y-60 space-y-6">
            <div className="lg:px-20">
              <div className="px-2.5 lg:max-w-none">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
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
            <NewsletterPageForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
