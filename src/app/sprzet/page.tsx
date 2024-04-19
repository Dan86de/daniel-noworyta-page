import getConfig from "next/config";
import React from "react";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";
import { formatDate } from "@/lib/formatDate.ts";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: "Sprzęt",
  description:
    "Sprzęt z którego korzystam codziennie. Znajdziesz tutaj też informacje o oprogramowaniu, gadżetach i innych rzeczach, które używam i szczerze polecam.",
};

export default function Uses() {
  const {
    publicRuntimeConfig,
  }: { publicRuntimeConfig: { modifiedDate: string } } = getConfig();

  const date = new Date(publicRuntimeConfig.modifiedDate);

  const lastUpdateDate = formatDate(
    `${date.getFullYear()}-${date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate()}`,
  );

  const content = `Ostatnia aktualizacja: ${lastUpdateDate}`;

  return (
    <>
      <SimpleLayout
        title="Sprzęt, który używam. Gadżety, które uwielbiam. Wszystko co szczerze polecam."
        intro="Często jestem pytany o rzeczy, których używam programując, tworząc content i utrzymując produktywność. Oto duża lista wszystkich moich ulubionych rzeczy."
      >
        <div className="space-y-20">
          <ToolsSection title="Sprzęt na którym pracuję">
            <Tool title="16” MacBook Pro, M1 Max, 32GB RAM (2022)">
              Wsześniej używałem laptopów na oprogramowaniu Windows, ale od
              przesiadki na MacBooka nie mogę sobie wyobrazić powrotu do systemu
              od Microsoftu. MacbookPro to niesamowicie wydajne urządzenie,
              które nie nagrzewa się nawet podczas bardzo intensywnego
              obciążenia.
            </Tool>
            <Tool title="Apple Studio Display (Standardowe Szkło)">
              Świetny monitor z rozdzielczością 5K, który świetnie sprawdza się
              w pracy z grafiką, filmami i programowaniem. Wszystko wygląda na
              nim niesamowicie. Dodatkowo jest świetnie zintegrowany z
              MacBookiem.
            </Tool>
            <Tool title="Klawatura MX Keys Gen2 od firmy Logitech">
              Klawiatura premium z podświetleniem, precyzyjnie wyprofilowanymi
              klawiszami, długotrwałą baterią. Kompatybilna z wieloma
              urządzeniami, dla optymalnej wydajności.
            </Tool>
            <Tool title="Myszka MX Master od firmy Logitech">
              Myszka o zaawansowanych funkcjach, z precyzyjnym skrolowaniem,
              komfortowym kształtem. Wielo-urządzeniowa, bezprzewodowa, z
              długotrwałą baterią.
            </Tool>
            <Tool title="Aparat Canon 5DMarkIV">
              Canon 5DMarkIV to bardzo zaawansowany aparat, który pozwala mi
              tworzyć profesjonalne zdjęcia i filmy. W sumie żeby nie moja żona,
              która jest fotografem, to pewnie bym go nie kupił. Ale teraz nie
              wyobrażam sobie pracy bez niego.
            </Tool>
            <Tool title="Mikrofon Shure SM7B">
              Shure SM7B to profesjonalny mikrofon, który pozwala mi nagrywać
              podcasty, filmy i inne materiały audio. Jest to bardzo
              zaawansowany mikrofon, który pozwala mi uzyskać bardzo czysty
              dźwięk. Zresztą jest to dosyć popularny mikrofon wśród youtuberów
              i podcasterów na całym świecie.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Narzędzia developerskie">
            <Tool title="IntelliJ IDEA">
              Główny edytor kodu na którym pracuję. Wcześniej byłem fanem
              darmowego Visual Studio Code, ale po przesiadce na IntelliJ IDEA
              nie mogę się od niego oderwać. Wszystkie funkcje, które są mi
              potrzebne, są w jednym miejscu.
            </Tool>
            <Tool title="warp">
              Do lokalnego developmentu używam narzędzia warp. Jest to terminal
              z wbudowanymi funkcjami AI, które są bardzo przydatne podczas
              poszukiwania odpowiedniej komendy np dla systemu Linuxowego.
              Dzięki temu mogę szybko i wygodnie pracować nad swoimi projektami.
            </Tool>
            <Tool title="Sizzy">
              Sizzy to narzędzie do testowania responsywności stron
              internetowych. Dzięki niemu mogę sprawdzić jak moje projekty
              wyglądają na różnych urządzeniach jednocześnie. Jest to bardzo
              przydatne narzędzie, które pozwala mi zaoszczędzić dużo czasu.
            </Tool>
            <Tool title="Insomnia">
              Insomnia to narzędzie do testowania API. Dzięki niemu mogę
              sprawdzić czy moje API działa poprawnie i czy zwraca odpowiednie
              dane. Bardziej znanym odpowiednikiem tego narzedzia jest Postman.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Projektowanie graficzne">
            <Tool title="Figma">
              Figma to narzędzie do projektowania stron internetowych. Dzięki
              niemu mogę tworzyć interaktywne projekty, które wyglądają jak
              prawdziwe strony internetowe.
            </Tool>
            <Tool title="Davinci Resolve">
              Davinci Resolve to narzędzie do edycji filmów. Dzięki niemu mogę
              montować filmy, dodawać efekty specjalne i kolorować obrazy. Jest
              to bardzo zaawansowane narzędzie, które pozwala mi tworzyć
              profesjonalne filmy.
            </Tool>
            <Tool title="Adobe Lightroom">
              Adobe Lightroom to narzędzie do edycji zdjęć. Dzięki niemu mogę
              poprawiać kolory, kontrast i ostrość zdjęć. Jest to bardzo
              zaawansowane narzędzie, które pozwala mi tworzyć profesjonalne
              miniatury do swoich filmów.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Produktywność">
            <Tool title="ToDoist">
              ToDoist to narzędzie do zarządzania zadaniami. Dzięki niemu mogę
              śledzić postępy w moich projektach, zarządzać zadaniami i
              dokumentować swoją pracę.
            </Tool>
            <Tool title="Raycast">
              Raycast to narzędzie do szybkiego wyszukiwania plików, aplikacji i
              innych rzeczy na komputerze. Dzięki niemu mogę szybko i wygodnie
              pracować nad swoimi projektami.
            </Tool>
            <Tool title="Keyboard Maestro">
              Keyboard Maestro to narzędzie do automatyzacji zadań na
              komputerze. Dzięki niemu mogę zaoszczędzić dużo czasu na
              wykonywaniu powtarzalnych czynności.
            </Tool>
            <Tool title="Notion">
              Notion to narzędzie do zarządzania projektami. Dzięki niemu mogę
              śledzić postępy w moich projektach, zarządzać zadaniami i
              dokumentować swoją pracę.
            </Tool>
            <Tool title="Rize">
              Rize to narzędzie do blokowania stron internetowych. Dzięki niemu
              mogę zablokować dostęp do stron, które mnie rozpraszają i skupić
              się na pracy. Dodatkowo dostaję obszerne raporty o tym jak spędzam
              czas na komputerze.
            </Tool>
          </ToolsSection>
        </div>
        <p className="text-right mt-6 text-xs font-sans text-zinc-400 dark:text-zinc-700">
          {content}
        </p>
      </SimpleLayout>
    </>
  );
}
