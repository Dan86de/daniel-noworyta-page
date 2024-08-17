import React from "react";

import { pageData } from "@/app/(shop)/sklep/ebook/pierwsza-praca-w-it/pageData.tsx";
import { Button } from "@/components/Button.tsx";
import { ContainerInner } from "@/components/Container.tsx";
import { RightArrowShortIcon, RightArrowIcon } from "@/components/Icons.tsx";
import { Hero } from "@/components/ProductLanding/Hero.tsx";
import { Prose } from "@/components/Prose.tsx";

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
