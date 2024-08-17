import Image from "next/image";
import React from "react";

import { pageData } from "@/app/(shop)/sklep/konsultacje/pageData.tsx";
import { Button } from "@/components/Button.tsx";
import { ContainerInner } from "@/components/Container.tsx";
import { RightArrowShortIcon, RightArrowIcon } from "@/components/Icons.tsx";
import { Prose } from "@/components/Prose.tsx";

export default function ConsultationProductPage() {
  return (
    <>
      <section>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full dark:stroke-orange-950 stroke-orange-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y={-1}
              className="overflow-visible dark:fill-orange-950 fill-orange-100"
            >
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ffc580] to-[#fcd289]
             dark:from-orange-600 dark:to-orange-500 opacity-30 dark:opacity-10"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Brak doświadczenia? To nie problem! Zdobądź pierwszą pracę w
                    IT.
                  </h1>
                  <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                    Dowiedz się, jak dzięki ebookowi ‘Pierwsza praca w IT’
                    pokonać swoje obawy.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Button
                      className={"text-lg md:text-xl px-6"}
                      variant={"orange"}
                      href={"TUTAJ_LINK_DO_KOSZYKA"}
                    >
                      <p className={"md:hidden"}>{"Wrzucam do koszyka"}</p>
                      <p className={"hidden md:inline"}>
                        {"Tego mi trzeba, wrzucam do koszyka"}
                      </p>
                      <RightArrowShortIcon className={"block md:hidden"} />
                      <RightArrowIcon className={"hidden md:block"} />
                    </Button>
                  </div>
                  <span className={"mt-4 inline-block"}>
                    Cena ebooka: <strong>79 zł</strong>
                  </span>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        width={180}
                        height={300}
                        alt=""
                        src={pageData.images.QAImage}
                        className="aspect-[2/3] w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg z-10"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-300/50 dark:ring-orange-900/30" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        width={180}
                        height={300}
                        alt=""
                        src="https://pliki.poprawnykod.pl/user_avatars/wbyRnl06gzsyzcJFA0ISK"
                        className="aspect-[2/3] w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg z-10"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-300/50 dark:ring-orange-900/30" />
                    </div>
                    <div className="relative">
                      <Image
                        alt=""
                        width={180}
                        height={300}
                        src={pageData.images.IDEAImage}
                        className="aspect-[2/3] w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-300/50 dark:ring-orange-900/30" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        width={180}
                        height={300}
                        alt=""
                        src={pageData.images.CALENDARImage}
                        className="aspect-[2/3] w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg z-10"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-300/50 dark:ring-orange-900/30" />
                    </div>
                    <div className="relative">
                      <Image
                        width={180}
                        height={300}
                        alt=""
                        src={pageData.images.PROFILEImage}
                        className="aspect-[2/3] w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-300/50 dark:ring-orange-900/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContainerInner>
        <Prose className={"mx-auto prose-lg md:prose-xl"}>
          <p>
            Wiele osób marzy o zmianie kariery i wejściu do dynamicznego świata
            IT. Świadomość, że praca w tej branży może przynieść stabilność
            finansową, rozwój zawodowy i satysfakcję, sprawia, że coraz więcej
            ludzi chce podjąć ten krok. Ale jak zacząć, gdy nie masz jeszcze
            doświadczenia ani odpowiednich umiejętności?
          </p>
          <p>
            Niestety, droga do pierwszej pracy w IT często wydaje się
            zniechęcająco trudna. Brak wiedzy, niejasność co do tego, które
            technologie są najbardziej pożądane, oraz obawa przed brakiem
            wsparcia mogą sprawić, że poczujesz się zagubiony i zniechęcony. W
            efekcie, wiele osób porzuca swoje marzenia, zanim jeszcze na dobre
            zacznie.
          </p>
          <p>
            Tu z pomocą przychodzi{" "}
            <span className={"font-semibold text-orange-500"}>
              ebook “Głowa Pełna Kodu - Jak zdobyć pierwszą pracę w IT?”
            </span>
            . To praktyczny przewodnik, który krok po kroku przeprowadzi Cię
            przez proces nauki programowania i przygotowania do rynku pracy.
            Dowiesz się, jak zdobyć niezbędne umiejętności, jak stworzyć CV,
            które przyciągnie uwagę rekruterów, oraz jak radzić sobie z
            wyzwaniami, które mogą pojawić się na Twojej drodze. Nie musisz już
            czuć się zagubiony – z tym ebookiem masz wszystko, czego
            potrzebujesz, aby z sukcesem rozpocząć swoją przygodę z
            programowaniem.
          </p>
          <div className="flex items-center justify-center not-prose">
            <Button
              className={"text-lg md:text-xl min-w-80"}
              variant={"orange"}
              href={"LINK_DO_KOSZYKA"}
            >
              <p>{"Kup teraz!"}</p>
              <RightArrowShortIcon className={"block md:hidden"} />
              <RightArrowIcon className={"hidden md:block"} />
            </Button>
          </div>
          <h2>Czy ten ebook jest odpowiedni dla początkujących?</h2>
          <p>
            Tak! “Głowa Pełna Kodu” została stworzona z myślą o osobach, które
            dopiero zaczynają swoją przygodę z programowaniem lub chcą zmienić
            branżę na IT. Nie musisz mieć wcześniejszego doświadczenia – ebook
            przeprowadzi Cię przez każdy krok, od podstaw aż po zdobycie
            pierwszej pracy w IT.
          </p>
          <h2>Martwisz się, że nie znajdziesz czasu na przeczytanie go?</h2>
          <p>
            Rozumiem, jak trudno jest pogodzić naukę z pracą na pełny etat i
            obowiązkami rodzinnymi. Dlatego w ebooku dzielę się sprawdzonymi
            metodami, które sam stosowałem, by znaleźć czas na naukę
            programowania. Pokażę Ci, jak efektywnie zarządzać swoim czasem, aby
            osiągnąć swoje cele, nawet w napiętym grafiku.
          </p>
          <h2>Obawiasz się, że ebook będzie zbyt techniczny?</h2>
          <p>
            Nie musisz się martwić! “Głowa Pełna Kodu” jest napisana przystępnym
            językiem, z myślą o osobach nietechnicznych. Skupiam się na tym, aby
            każdy, kto myśli o rozpoczęciu nauki programowania, mógł zrozumieć
            przekaz i czuć się komfortowo na każdym etapie nauki.
          </p>
          <h2>Co jeśli utkniesz na jakimś etapie?</h2>
          <p>
            Nie zostawiam Cię samego! Kupując ebook, zyskujesz dostęp do
            rocznego wsparcia w dedykowanej grupie czytelników i początkujących
            programistów. To miejsce, gdzie możesz zadawać pytania, dzielić się
            wątpliwościami i czerpać inspirację od innych, którzy są na podobnym
            etapie jak Ty. Razem łatwiej osiągnąć sukces!
          </p>
        </Prose>
      </ContainerInner>
    </>
  );
}
