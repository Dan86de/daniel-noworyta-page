import React from "react";

import { pageData } from "@/app/(shop)/sklep/konsultacje/pageData.tsx";
import { Hero } from "@/components/ProductLanding/Hero.tsx";

export default function ConsultationProductPage() {
  return (
    <>
      <Hero
        productImage={pageData.productImage}
        altForProductImage={"Ikona produktu konsultacje"}
        productHeader={"Pierwsza praca w IT? To nie musi być trudne!"}
        productSubHeader={
          "Z moją osobistą pomocą przełamiesz bariery i zdobędziesz wymarzoną pracę. Oferuję indywidualne konsultacje 1na1, które pomogą Ci zdobyć pierwszą pracę w branży IT jako programista frontend."
        }
        testimonial={{
          content:
            "Daniel udzielił mi kilka cennych rad odnośnie poszukiwań pracy oraz zmotywował do tego. Jestem mu mega wdzięczny za poświęcenie mi swojego czasu, zdecydowanie potrzebowałem takiej rozmowy.",
          author: "Jakub Pacewicz",
          authorPosition: ", Aspirujący Front-end Developer",
        }}
      />
      {/*<ContainerInner>*/}
      {/*  <Prose className={"prose-xl mx-auto"}>*/}
      {/*    <p>*/}
      {/*      Myślisz o zmianie kariery i wejściu do dynamicznego świata IT? Masz*/}
      {/*      dosyć pracy, która nie przynosi satysfakcji i chcesz zbudować*/}
      {/*      przyszłość w branży, która oferuje nieograniczone możliwości*/}
      {/*      rozwoju? Wielu z nas marzy o tym, by stać się częścią*/}
      {/*      technologicznej rewolucji, ale nie wie, od czego zacząć.*/}
      {/*    </p>*/}

      {/*    <p>*/}
      {/*      Niestety, proces zdobywania pierwszej pracy w IT może być*/}
      {/*      zniechęcający. Brak doświadczenia, niepewność co do wymaganych*/}
      {/*      umiejętności i ciągłe zmiany technologiczne mogą sprawić, że*/}
      {/*      poczujesz się przytłoczony. W dodatku, wiele dostępnych zasobów jest*/}
      {/*      rozproszonych i nie dostosowanych do indywidualnych potrzeb*/}
      {/*      początkujących programistów.*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      Dlatego oferuję konsultacje 1na1, które pomogą Ci zdobyć pierwszą*/}
      {/*      pracę jako junior front end developer. Dzięki mojemu doświadczeniu w*/}
      {/*      branży IT i osobistej historii zmiany kariery, mogę dostarczyć Ci*/}
      {/*      spersonalizowane wskazówki, które przyspieszą Twoją drogę do*/}
      {/*      sukcesu. Podczas naszych spotkań, omówimy Twoje cele,*/}
      {/*      zidentyfikujemy kluczowe umiejętności do opanowania i stworzymy plan*/}
      {/*      działania, który pomoże Ci osiągnąć wymarzoną pracę w IT. Dołącz do*/}
      {/*      mnie i zacznij swoją podróż do satysfakcjonującej kariery już dziś!*/}
      {/*    </p>*/}
      {/*  </Prose>*/}
      {/*  <div className="flex items-center justify-center gap-x-6 my-12 sm:my-24">*/}
      {/*    <Button*/}
      {/*      className={"text-lg md:text-xl px-12 min-w-80"}*/}
      {/*      variant={"orange"}*/}
      {/*      href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}*/}
      {/*    >*/}
      {/*      <p>{"Wchodzę w to!"}</p>*/}
      {/*      <RightArrowShortIcon className={"block md:hidden"} />*/}
      {/*      <RightArrowIcon className={"hidden md:block"} />*/}
      {/*    </Button>*/}
      {/*  </div>*/}

      {/*  <FeaturesSectionLandingPage*/}
      {/*    features={pageData.features}*/}
      {/*    title={"O czym możemy porozmawiać?"}*/}
      {/*    description={null}*/}
      {/*  />*/}

      {/*  <ReviewsSectionLandingPage reviews={pageData.reviews} />*/}
      {/*  <div className="flex items-center justify-center gap-x-6 my-12 sm:my-24">*/}
      {/*    <Button*/}
      {/*      className={"text-lg md:text-xl md:px-12"}*/}
      {/*      variant={"orange"}*/}
      {/*      href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}*/}
      {/*    >*/}
      {/*      <p>{"Chcę zdobyć pracę w IT!"}</p>*/}
      {/*      <RightArrowShortIcon className={"block md:hidden"} />*/}
      {/*      <RightArrowIcon className={"hidden md:block"} />*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*  <section>*/}
      {/*    <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">*/}
      {/*      Ja też myślałem, że zdobycie pierwszej pracy w IT jest niemożliwe*/}
      {/*    </h1>*/}
      {/*    <div*/}
      {/*      className={*/}
      {/*        "grid lg:grid-cols-[minmax(300px,_500px)_1fr] grid-cols-1 gap-12 mt-12"*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        width={500}*/}
      {/*        height={500}*/}
      {/*        alt=""*/}
      {/*        src="https://pliki.poprawnykod.pl/user_avatars/wbyRnl06gzsyzcJFA0ISK"*/}
      {/*        className="aspect-sqare w-full rounded-xl bg-zinc-50 dark:bg-zinc-800 object-cover shadow-lg z-10"*/}
      {/*      />*/}
      {/*      <Prose className={"prose-lg"}>*/}
      {/*        <p>Cześć, tu Daniel Noworyta z kanału Programistafrontend</p>*/}
      {/*        <p>*/}
      {/*          W 2018 roku pracowałem na etacie i czułem, że coś jest nie tak.*/}
      {/*          Nie byłem zadowolony ze swojej pracy i wiedziałem, że muszę coś*/}
      {/*          zmienić. Zacząłem szukać informacji o branży IT. Znalazłem*/}
      {/*          mnóstwo materiałów, ale nie wiedziałem, od czego zacząć.*/}
      {/*          Wiedziałem jednak jedno – chciałem zostać front-end developerem.*/}
      {/*        </p>*/}
      {/*        <p>*/}
      {/*          Każdego dnia uczyłem się programowania i dokumentowałem swój*/}
      {/*          proces na moim kanale YouTube,{" "}*/}
      {/*          <a href={"https://youtube.com/@danielnoworyta"}>*/}
      {/*            Programistafrontend*/}
      {/*          </a>*/}
      {/*          . Po ponad dwóch latach i sześciu miesiącach ciężkiej pracy,*/}
      {/*          udało mi się zdobyć swoją pierwszą pracę jako front-end*/}
      {/*          developer. Dziś jestem szczęśliwy, że mogę robić to, co kocham.*/}
      {/*        </p>*/}
      {/*        <p>*/}
      {/*          Uwielbiam patrzeć, jak ludzie wokół mnie rozwijają swoje*/}
      {/*          umiejętności i osiągają swoje cele. Chcę pomóc innym, którzy są*/}
      {/*          na początku swojej drogi w IT tak jak ja kiedyś.*/}
      {/*        </p>*/}
      {/*        <p>*/}
      {/*          Wiem, co dało mi zatrudnienie i teraz chcę pomóc Ci wyróżnić się*/}
      {/*          na tle innych kandydatów i zdobyć swoją pierwszą pracę w IT.*/}
      {/*        </p>*/}
      {/*        <p>*/}
      {/*          Razem możemy przejść przez tę trudną, ale satysfakcjonującą*/}
      {/*          drogę do kariery w IT.*/}
      {/*        </p>*/}
      {/*        <div className={"w-full flex align-baseline justify-end"}>*/}
      {/*          <Image*/}
      {/*            src={pageData.images.signature}*/}
      {/*            alt="podpis"*/}
      {/*            width={200}*/}
      {/*            height={100}*/}
      {/*            className="aspect-video dark:hidden"*/}
      {/*          />*/}
      {/*          <Image*/}
      {/*            src={pageData.images.signatureDark}*/}
      {/*            alt="podpis"*/}
      {/*            width={200}*/}
      {/*            height={100}*/}
      {/*            className="hidden aspect-video dark:block"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </Prose>*/}
      {/*    </div>*/}
      {/*  </section>*/}
      {/*  <div className="flex items-center justify-center">*/}
      {/*    <Button*/}
      {/*      className={"text-lg md:text-xl min-w-80"}*/}
      {/*      variant={"orange"}*/}
      {/*      href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}*/}
      {/*    >*/}
      {/*      <p>{"Kup teraz!"}</p>*/}
      {/*      <RightArrowShortIcon className={"block md:hidden"} />*/}
      {/*      <RightArrowIcon className={"hidden md:block"} />*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</ContainerInner>*/}
    </>
  );
}
