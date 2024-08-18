import { type StaticImageData } from "next/image";

import { type Feature } from "@/components/FeaturesSectionLandingPage.tsx";
import { type Review } from "@/components/ReviewsSectionLandingPage.tsx";
import ticketImage from "@/images/ticket.svg";

interface PageData {
  productImage: StaticImageData;
  reviews: Review[];
  features: Feature[];
}

export const pageData: PageData = {
  productImage: ticketImage as StaticImageData,
  reviews: [
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
        "Daniel, dziękuję Ci za Twoje wsparcie i inspirację. Jesteś prawdziwym mentorem i przyjacielem dla wszystkich, którzy zaczynają swoją przygodę z programowaniem. Twoje wysiłki mają ogromny wpływ na rozwój nowych talentów w branży.",
      author: {
        name: "Michał Szczepansky",
        image:
          "https://pliki.poprawnykod.pl/consultation_review_images/Michal-Szczepansky-1716899345636",
      },
      rating: 5,
      id: "3",
    },
  ],
  features: [
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
  ],
};
