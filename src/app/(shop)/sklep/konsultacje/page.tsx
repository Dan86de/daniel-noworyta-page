import { type StaticImageData } from "next/image";
import React from "react";

import { Button } from "@/components/Button.tsx";
import { Author } from "@/components/ProductLanding/AboutMe.tsx";
import { Hero } from "@/components/ProductLanding/Hero.tsx";
import { Introduction } from "@/components/ProductLanding/Introduction.tsx";
import { NavBar } from "@/components/ProductLanding/Navbar";
import { ObjectionsSection } from "@/components/ProductLanding/ObjectionsSection.tsx";
import { Testimonials } from "@/components/ProductLanding/TestimonialsSection.tsx";
import ticketImage from "@/images/ticket.svg";

export default function ConsultationProductPage() {
  return (
    <>
      <Hero
        productImage={ticketImage as StaticImageData}
        altForProductImage={"Ikona produktu konsultacje"}
        productHeader={"Pierwsza praca w IT? To nie musi być trudne!"}
        productSubHeader={
          "Z moją osobistą pomocą przełamiesz bariery i zdobędziesz wymarzoną pracę. Oferuję indywidualne konsultacje 1 na 1, które pomogą Ci zdobyć pierwszą pracę w branży IT jako programista frontend."
        }
        testimonial={{
          content:
            "Daniel udzielił mi kilka cennych rad odnośnie poszukiwań pracy oraz zmotywował do tego. Jestem mu mega wdzięczny za poświęcenie mi swojego czasu, zdecydowanie potrzebowałem takiej rozmowy.",
          author: "Jakub Pacewicz",
          authorPosition: ", Aspirujący Front-end Developer",
        }}
        cartUrl={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
        productPriceTag={
          <>
            Cena konsultacji: <strong>200zł / h</strong>
          </>
        }
      />
      <Introduction
        title={
          "Uwielbiam patrzeć, jak ludzie wokół mnie rozwijają swoje umiejętności i osiągają swoje cele."
        }
        content={
          <>
            <p>
              Myślisz o zmianie kariery i wejściu do dynamicznego świata IT?
              Masz dosyć pracy, która nie przynosi satysfakcji i chcesz zbudować
              przyszłość w branży, która oferuje nieograniczone możliwości
              rozwoju? Wielu z nas marzy o tym, by stać się częścią
              technologicznej rewolucji, ale nie wie, od czego zacząć.
            </p>

            <p>
              Niestety, proces zdobywania pierwszej pracy w IT może być
              zniechęcający. Brak doświadczenia, niepewność co do wymaganych
              umiejętności i ciągłe zmiany technologiczne mogą sprawić, że
              poczujesz się przytłoczony. W dodatku, wiele dostępnych zasobów
              jest rozproszonych i nie dostosowanych do indywidualnych potrzeb
              początkujących programistów.
            </p>
            <p>
              Dlatego oferuję konsultacje 1 na 1, które pomogą Ci zdobyć
              pierwszą pracę jako junior front end developer. Dzięki mojemu
              doświadczeniu w branży IT i osobistej historii zmiany kariery,
              mogę dostarczyć Ci spersonalizowane wskazówki, które przyspieszą
              Twoją drogę do sukcesu.
            </p>
            <p>
              Podczas naszych spotkań, omówimy Twoje cele, zidentyfikujemy
              kluczowe umiejętności do opanowania i stworzymy plan działania,
              który pomoże Ci osiągnąć wymarzoną pracę w IT. Dołącz do mnie i
              zacznij swoją podróż do satysfakcjonującej kariery już dziś!
            </p>
          </>
        }
      />

      <div className={"flex justify-center items-center pb-12 sm:pb-16"}>
        <Button
          href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
          variant={"orange"}
          className={"text-lg md:text-xl px-12 min-w-80 mx-auto lg:mx-0"}
        >
          Wchodzę w to!
        </Button>
      </div>

      <NavBar
        sections={[
          { id: "productInfo", title: "Informacje o produkcie" },
          { id: "testimonials", title: "Opinie" },
          { id: "author", title: "O mnie" },
        ]}
      />
      <ObjectionsSection />
      <div className={"flex justify-center items-center pb-12 sm:pb-16"}>
        <Button
          href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
          variant={"orange"}
          className={"text-lg md:text-xl px-12 min-w-80 mx-auto lg:mx-0"}
        >
          Kupuję za 200zł!
        </Button>
      </div>
      <Testimonials
        testimonials={[
          [
            {
              content:
                "Od jakiegoś czasu nie dawałem sobie szans w wejściu do branży IT, jednak na spotkaniu zobaczyłem, że moje umiejętności są dobre i nie ma co się zrażać. Usłyszałem też kilka konkretnych wskazówek, dzięki którym wróciłem do aktywnego poszukiwania pracy w IT.",
              author: {
                name: "Grzegorz Pacewicz",
                url: "https://github.com/GrzegorzPacewicz",
                image: "",
              },
            },
            {
              content:
                "Miałem przyjemność porozmawiać z Danielem na temat mojego rozwoju zawodowego w kierunku junior frontend developera.  Dzięki tej rozmowie wiele się zmieniło i zyskałem jasny plan działania. Daniel wskazał kilka kluczowych obszarów, na które powinienem się skupić. Dzięki tym wskazówkom czuję, że mam klarowny plan działania, który pomoże mi osiągnąć moje zawodowe cele. Serdecznie polecam Daniela jako mentora i doradcę zawodowego. Dziękuję za cenną rozmowę i wsparcie!",
              author: {
                name: "Daniel Sółkowski",
                url: "",
                image:
                  "https://pliki.poprawnykod.pl/consultation_review_images/Daniel-Su%C5%82kowski-1716497602523",
              },
            },
          ],
          [
            {
              content:
                "W trakcie konsultacji omówiliśmy moją obecną sytuację. Daniel wskazał mi kierunek, który może mnie przybliżyć do znalezienia pierwszej pracy. Po rozmowie doszedłem do różnych wniosków min. , że kilka rzeczy mógłbym poprawić kilka rzeczy w CV oraz zrozumiałem jak dużą wagę pracodawcy przywiązują do portfolio - nad którym będę teraz pracować.",
              author: {
                name: "Bartosz Stpiczynski",
                url: "https://bartoszstpiczynski.pl/",
                image:
                  "https://pliki.poprawnykod.pl/consultation_review_images/Bartosz-Stpiczynski-1717011891946",
              },
            },
            {
              content:
                "Przed konsultacją miałem kilka pytań odnośnie tego, czego jeszcze potrzebuję, abym realnie zaistniał w IT, jako Frontend Developer zatrudniony, lub jako freelancer. Daniel rzetelnie przeanalizował moje projekty i wskazał, co należy w nich poprawić lub dodać do nich, aby mogły one przykuć uwagę rekrutera. Otrzymałem również wskazówki co do dalszego sposobu postępowania, dzięki któremu z większym prawdopodobieństwem osiągnę swój cel.",
              author: {
                name: "Wojciech Piróg",
                url: "",
                image: "",
              },
            },
          ],
          [
            {
              content:
                "Chciałbym serdecznie podziękować Danielowi Noworycie za jego niesamowite wsparcie i inspirację dla młodych programistów. Jako doświadczony FrontEnd developer, Daniel nie tylko doskonale zna branżę IT, ale także z pasją pomaga początkującym znaleźć swoją pierwszą pracę.\n" +
                "Daniel, dziękuję Ci za Twoje wsparcie i inspirację. Jesteś prawdziwym mentorem i przyjacielem dla wszystkich, którzy zaczynają swoją przygodę z programowaniem. Twoje wysiłki mają ogromny wpływ na rozwój nowych talentów w branży",
              author: {
                name: "Michał Szczepansky",
                url: "https://github.com/szczepanskimichal",
                image:
                  "https://pliki.poprawnykod.pl/consultation_review_images/Michal-Szczepansky-1716899345636",
              },
            },
            {
              content:
                "Daniel udzielił mi kilka cennych rad odnośnie poszukiwań pracy oraz zmotywował do tego. Jestem mu mega wdzięczny za poświęcenie mi swojego czasu, zdecydowanie potrzebowałem takiej rozmowy. Oczywiście przebiegła ona w miłej i przyjemnej atmosferze i była bardzo dla mnie budująca. Mega Polecam!",
              author: {
                name: "Jakub Pacewicz",
                url: "",
                image: "",
              },
            },
          ],
        ]}
      />
      <div className={"flex justify-center items-center pb-12 sm:pb-16"}>
        <Button
          href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
          variant={"orange"}
          className={"text-lg md:text-xl px-12 min-w-80 mx-auto lg:mx-0"}
        >
          Przekonałeś mnie!
        </Button>
      </div>
      <Author />
      {/*<ContainerInner>*/}

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
