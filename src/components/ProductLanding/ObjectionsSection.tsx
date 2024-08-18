import { Container } from "@/components/Container.tsx";
import { SectionHeading } from "@/components/ProductLanding/UI/SectionHeading.tsx";
import { FadeIn } from "@/components/UI/FadeIn.tsx";
import { TagList, TagListItem } from "@/components/UI/TagList.tsx";

export const ObjectionsSection = () => {
  return (
    <section
      id={"productInfo"}
      aria-labelledby="productInfo-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container className={"[counter-reset:section]"}>
        {/*  TO SIĘ POWTARZA MOZNA KOMPONENT ZROBIC*/}
        <SectionHeading number="1" id="productInfo-title">
          Sekcja
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight">
          Jak wygląda proces, który Ci proponuję?
        </p>
        <p className="mt-4 text-lg tracking-tight opacity-75">
          Produkt, którym jesteś zainteresowany/a to jedna godzina konsultacji
          na dowolnie wybrany przez Ciebie temat (poniżej znajdziesz informacje
          w czym konkretnie mogę Ci pomóc). Opisałem cały proces od początku do
          końca. Proszę zapoznaj się z nim, aby wyciągnąć jak najwięcej korzyści
          z konsultacji.
        </p>
        {/*  KONIEC KOMPONENTU*/}
        {/*  PRZYKŁADOWA SEKCJA*/}

        {/*  KONIEC PRZYKŁADOWEJ SEKCJI*/}
        <div className="space-y-6 mt-12 md:mt-20">
          <FadeIn className={"group/section [counter-increment:section]"}>
            <div
              className="font-display text-base font-semibold before:text-orange-600 before:content-['/_']  after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Opłacenie zamówienia
            </h2>
            <div className="mt-6">
              <p>
                Konsultacje są płatne. Po opłaceniu zamówienia otrzymasz ode
                mnie email z linkiem do kalendarza, w którym możesz wybrać
                dogodny dla siebie termin.
              </p>
            </div>
            <h3 className="mt-12 font-display">
              W tej fazie możesz liczyć na:
            </h3>
            <TagList className="mt-4">
              <TagListItem>Dobór dogodnego dla Ciebie terminu</TagListItem>
            </TagList>
          </FadeIn>
          <FadeIn className={"group/section [counter-increment:section]"}>
            <div
              className="font-display text-base font-semibold before:text-orange-600 before:content-['/_']  after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Przygotowanie do konsultacji
            </h2>
            <div className="mt-6">
              <p>
                Konsultacje są płatne. Po opłaceniu zamówienia otrzymasz ode
                mnie email z linkiem do kalendarza, w którym możesz wybrać
                dogodny dla siebie termin.
              </p>
            </div>
            <h3 className="mt-4 font-display">W tej fazie możesz liczyć na:</h3>
            <TagList className="mt-4">
              <TagListItem>Pytania kontrolne</TagListItem>
              <TagListItem>
                Jak najlepsze przygotowanie się z mojej strony
              </TagListItem>
              <TagListItem>Dostosowanie porad do Twojej sytuacji</TagListItem>
            </TagList>
          </FadeIn>
          <FadeIn className={"group/section [counter-increment:section]"}>
            <div
              className="font-display text-base font-semibold before:text-orange-600 before:content-['/_']  after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Zadania do wykonania po konsultacji
            </h2>
            <div className="mt-6">
              <p>
                Jestem przekonany, że po konsultacji będziesz wiedział/a co
                zrobić dalej. Po konsultacji otrzymasz ode mnie email z
                zadaniami, które warto wykonać, aby skutecznie wykorzystać
                wiedzę, którą zdobyłeś/aś.
              </p>
            </div>
            <h3 className="mt-4 font-display">W tej fazie możesz liczyć na:</h3>
            <TagList className="mt-4">
              <TagListItem>Zadania dostosowane do Twoich potrzeb</TagListItem>
              <TagListItem>Możliwość zadawania pytań do zadań</TagListItem>
            </TagList>
          </FadeIn>
          <FadeIn className={"group/section [counter-increment:section]"}>
            <div
              className="font-display text-base font-semibold before:text-orange-600 before:content-['/_']  after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Check-in po 2 tygodniach
            </h2>
            <div className="mt-6">
              <p>
                Po dwóch tygodniach od konsultacji otrzymasz ode mnie email z
                pytaniem, jak radzisz sobie z zadaniami, które otrzymałeś/aś.
                Chętnie pomogę Ci w razie jakichkolwiek pytań.
              </p>
            </div>
            <h3 className="mt-4 font-display">W tej fazie możesz liczyć na:</h3>
            <TagList className="mt-4">
              <TagListItem>Komunikację asynchroniczną</TagListItem>
              <TagListItem>Wsparcie w realizacji zadań</TagListItem>
            </TagList>
          </FadeIn>
        </div>
      </Container>

      {/*<Section*/}
      {/*  title="Przygotowanie do konsultacji"*/}
      {/*  image={{ shape: 1, src: application }}*/}
      {/*>*/}
      {/*  <div className="space-y-6">*/}
      {/*    <p>*/}
      {/*      Po umówieniu spotkania otrzymasz ode mnie email z pytaniami, które*/}
      {/*      pozwolą mi się lepiej przygotować do konsultacji z Tobą. Proszę*/}
      {/*      odpowiedz na nie, abyśmy mogli jak najlepiej wykorzystać czas*/}
      {/*      konsultacji.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</Section>*/}
    </section>
  );
};
