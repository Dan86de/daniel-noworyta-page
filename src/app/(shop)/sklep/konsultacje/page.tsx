import Image from "next/image";
import React from "react";

import { Button } from "@/components/Button.tsx";
import { ContainerInner } from "@/components/Container.tsx";
import { FeaturesSectionLandingPage } from "@/components/FeaturesSectionLandingPage.tsx";
import { RightArrowIcon, RightArrowShortIcon } from "@/components/Icons.tsx";
import { Prose } from "@/components/Prose.tsx";
import { ReviewsSectionLandingPage } from "@/components/ReviewsSectionLandingPage.tsx";
import signature from "@/images/signature.webp";
import signatureDark from "@/images/signature_dark_white.webp";

import CALENDARImage from "../../../../images/CALENDAR_ICON_CONSULTATION_PAGE.webp";
import IDEAImage from "../../../../images/IDEA_ICON_CONSULTATION.webp";
import PROFILEImage from "../../../../images/PROFILE_ICON_CONSULTATION.webp";
import QAImage from "../../../../images/QA_ICON_CONSULTATION.webp";

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
                    Pierwsza praca w IT? To nie musi być trudne!
                  </h1>
                  <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                    Z moją osobistą pomocą przełamiesz bariery i zdobędziesz
                    wymarzoną pracę. Oferuję indywidualne konsultacje 1na1,
                    które pomogą Ci zdobyć pierwszą pracę w branży IT jako
                    programista frontend.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Button
                      className={"text-lg md:text-xl"}
                      variant={"orange"}
                      href={
                        "https://sklep.danielnoworyta.pl/cart/add_product/11829"
                      }
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
                    Cena konsultacji: <strong>200 zł za godzinę</strong>
                  </span>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        width={180}
                        height={300}
                        alt=""
                        src={QAImage}
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
                        src={IDEAImage}
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
                        src={CALENDARImage}
                        className="aspect-[2/3] w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg z-10"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-orange-300/50 dark:ring-orange-900/30" />
                    </div>
                    <div className="relative">
                      <Image
                        width={180}
                        height={300}
                        alt=""
                        src={PROFILEImage}
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
        <Prose>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Znajdź ludzi, którzy mierzą się z podobnym wyzwaniem jak ty i
            spędzaj z nimi czas.
          </h1>
          <p className="mt-6 text-xl leading-8">
            Myślisz o zmianie kariery i wejściu do dynamicznego świata IT? Masz
            dosyć pracy, która nie przynosi satysfakcji i chcesz zbudować
            przyszłość w branży, która oferuje nieograniczone możliwości
            rozwoju? Wielu z nas marzy o tym, by stać się częścią
            technologicznej rewolucji, ale nie wie, od czego zacząć.
          </p>

          <div className="mt-16 text-lg">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ">
              Wszystko czego potrzebujesz, żeby ruszyć z miejsca
            </h2>
            <p className="mt-6 text-zinc-800 dark:text-zinc-300">
              Niestety, proces zdobywania pierwszej pracy w IT może być
              zniechęcający. Brak doświadczenia, niepewność co do wymaganych
              umiejętności i ciągłe zmiany technologiczne mogą sprawić, że
              poczujesz się przytłoczony. W dodatku, wiele dostępnych zasobów
              jest rozproszonych i nie dostosowanych do indywidualnych potrzeb
              początkujących programistów.
            </p>
            <p className="mt-8 text-zinc-800 dark:text-zinc-300">
              Dlatego oferuję konsultacje 1na1, które pomogą Ci zdobyć pierwszą
              pracę jako junior front end developer. Dzięki mojemu doświadczeniu
              w branży IT i osobistej historii zmiany kariery, mogę dostarczyć
              Ci spersonalizowane wskazówki, które przyspieszą Twoją drogę do
              sukcesu. Podczas naszych spotkań, omówimy Twoje cele,
              zidentyfikujemy kluczowe umiejętności do opanowania i stworzymy
              plan działania, który pomoże Ci osiągnąć wymarzoną pracę w IT.
              Dołącz do mnie i zacznij swoją podróż do satysfakcjonującej
              kariery już dziś!
            </p>
          </div>
        </Prose>
        <div className="flex items-center justify-center gap-x-6 mt-12">
          <Button
            className={"text-lg md:text-xl"}
            variant={"orange"}
            href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
          >
            <p className={"md:hidden"}>{"Wrzucam do koszyka"}</p>
            <p className={"hidden md:inline"}>{"Wchodzę w to!"}</p>
            <RightArrowShortIcon className={"block md:hidden"} />
            <RightArrowIcon className={"hidden md:block"} />
          </Button>
        </div>

        <FeaturesSectionLandingPage
          features={[
            {
              name: "Tworzenie skutecznego CV",
              description:
                "Pomogę Ci stworzyć CV, które przyciągnie uwagę rekrutera i pozwoli Ci wyróżnić się na tle innych kandydatów.",
            },
            {
              name: "Budowa mocnego portfolio",
              description:
                "Pomogę Ci stworzyć portfolio, które pokazuje Twoje umiejętności i doświadczenie w najlepszym świetle.",
            },
            {
              name: "Rozwój umiejętności miękkich",
              description:
                "Pomogę Ci w rozwijaniu umiejętności miękkich, które są kluczowe w pracy jako programista frontend.",
            },
            {
              name: "Budowa silnego wizerunku online",
              description:
                "Pomogę Ci w budowaniu silnego wizerunku online, który pozwoli Ci wyróżnić się na tle innych kandydatów.",
            },
            {
              name: "Rozwój umiejętności technicznych",
              description:
                "Pomogę Ci w rozwijaniu umiejętności technicznych, które są kluczowe w pracy jako programista frontend.",
            },
          ]}
          title={"O czym możemy porozmawiać?"}
          description={
            <p>
              Niestety, zdobycie pierwszej pracy w IT nie jest łatwe. Brak
              doświadczenia, nieznajomość rynku pracy, a także obawy związane z
              nauką nowych technologii mogą skutecznie zniechęcić do zmiany
              kariery.{" "}
              <strong className={"text-orange-600"}>
                Wiele osób czuje się przytłoczonych ilością informacji
                dostępnych online i nie wie, od czego zacząć.
              </strong>{" "}
              Właśnie dlatego oferuję indywidualne konsultacje 1na1, które
              pomogą Ci zdobyć pierwszą pracę w branży IT jako programista
              frontend. Tematy jakie możemy poruszyć:
            </p>
          }
        />
        <div className="flex items-center justify-center gap-x-6 mb-24">
          <Button
            className={"text-lg md:text-xl"}
            variant={"orange"}
            href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
          >
            <p className={"md:hidden"}>{"Wrzucam do koszyka"}</p>
            <p className={"hidden md:inline"}>
              {"Tak, chcę zdobyć wymarzoną pracę w IT!"}
            </p>
            <RightArrowShortIcon className={"block md:hidden"} />
            <RightArrowIcon className={"hidden md:block"} />
          </Button>
        </div>
        <ReviewsSectionLandingPage
          reviews={[
            {
              content:
                "Miałem przyjemność porozmawiać z Danielem na temat mojego rozwoju zawodowego w kierunku junior frontend developera.  Dzięki tej rozmowie wiele się zmieniło i zyskałem jasny plan działania. Daniel wskazał kilka kluczowych obszarów, na które powinienem się skupić. Dzięki tym wskazówkom czuję, że mam klarowny plan działania, który pomoże mi osiągnąć moje zawodowe cele. Serdecznie polecam Daniela jako mentora i doradcę zawodowego. Dziękuję za cenną rozmowę i wsparcie!",
              author: {
                name: "Daniel Sółkowski",
                image:
                  "https://pliki.poprawnykod.pl/consultation_review_images/Daniel-Su%C5%82kowski-1716497602523",
              },
              rating: 5,
              id: "1",
            },

            {
              content:
                "W trakcie konsultacji omówiliśmy moją obecną sytuację. Daniel wskazał mi kierunek, który może mnie przybliżyć do znalezienia pierwszej pracy. Po rozmowie doszedłem do różnych wniosków min. , że kilka rzeczy mógłbym poprawić kilka rzeczy w CV oraz zrozumiałem jak dużą wagę pracodawcy przywiązują do portfolio - nad którym będę teraz pracować.",
              author: {
                name: "Bartosz Stpiczynski",
                image:
                  "https://pliki.poprawnykod.pl/consultation_review_images/Bartosz-Stpiczynski-1717011891946",
              },
              rating: 5,
              id: "2",
            },
            {
              content:
                "Chciałbym serdecznie podziękować Danielowi Noworycie za jego niesamowite wsparcie i inspirację dla młodych programistów. Jako doświadczony FrontEnd developer, Daniel nie tylko doskonale zna branżę IT, ale także z pasją pomaga początkującym znaleźć swoją pierwszą pracę.\n" +
                "Daniel, dziękuję Ci za Twoje wsparcie i inspirację. Jesteś prawdziwym mentorem i przyjacielem dla wszystkich, którzy zaczynają swoją przygodę z programowaniem. Twoje wysiłki mają ogromny wpływ na rozwój nowych talentów w branży. Właśnie dlatego oferuję indywidualne konsultacje 1na1, które pomogą Ci zdobyć pierwszą pracę w branży IT jako programista frontend.",
              author: {
                name: "Michał Szczepansky",
                image:
                  "https://pliki.poprawnykod.pl/consultation_review_images/Michal-Szczepansky-1716899345636",
              },
              rating: 5,
              id: "3",
            },
          ]}
        />
        <section className={"text-lg pt-16 sm:pt-24"}>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Ja też myślałem, że zdobycie pierwszej pracy w IT jest niemożliwe
          </h1>
          <div className={"grid md:grid-cols-2 gap-12"}>
            <div>
              <Image
                width={500}
                height={500}
                alt=""
                src="https://pliki.poprawnykod.pl/user_avatars/wbyRnl06gzsyzcJFA0ISK"
                className="aspect-sqare w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg z-10 mt-12 md:mt-8"
              />
            </div>
            <Prose>
              <p>Cześć, tu Daniel Noworyta z kanału Programistafrontend</p>
              <p>
                W 2018 roku pracowałem na etacie i czułem, że coś jest nie tak.
                Nie byłem zadowolony ze swojej pracy i wiedziałem, że muszę coś
                zmienić. Zacząłem szukać informacji o branży IT. Znalazłem
                mnóstwo materiałów, ale nie wiedziałem, od czego zacząć.
                Wiedziałem jednak jedno – chciałem zostać front-end developerem.
              </p>
              <p>
                Każdego dnia uczyłem się programowania i dokumentowałem swój
                proces na moim kanale YouTube, Programistafrontend. Po ponad
                dwóch latach i sześciu miesiącach ciężkiej pracy, udało mi się
                zdobyć swoją pierwszą pracę jako front-end developer. Dziś
                jestem szczęśliwy, że mogę robić to, co kocham.
              </p>
              <p>
                Jednak to nie wszystko. Uwielbiam patrzeć, jak ludzie wokół mnie
                rozwijają swoje umiejętności i osiągają swoje cele. Chcę pomóc
                innym, którzy są na początku swojej drogi w IT tak jak ja
                kiedyś.
              </p>
              <p>
                Rynek dla juniorów nie jest łaskawy i ciężko się wyróżnić. Sam
                aplikowałem do pierwszej pracy, mając ponad 30 lat na karku i
                rodzinę na utrzymaniu. Wiem, co dało mi zatrudnienie i teraz
                chcę pomóc Ci wyróżnić się na tle innych kandydatów i zdobyć
                swoją pierwszą pracę w IT.
              </p>
              <p>
                Razem możemy przejść przez tę trudną, ale satysfakcjonującą
                drogę do kariery w IT.
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
          </div>
        </section>
      </ContainerInner>
    </>
  );
}
