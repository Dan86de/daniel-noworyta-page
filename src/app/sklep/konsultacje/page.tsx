import { Button } from "@/components/Button.tsx";
import { Container } from "@/components/Container.tsx";

export default function ConsultationProductPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className={"gap-y-4 flex flex-col max-w-2xl"}>
        {/*<h2 className="pb-4 text-2xl md:text-4xl">*/}
        <h2 className="font-display text-5xl font-extrabold text-zinc-900">
          Twoja pierwsza praca w IT jest w zasięgu ręki!
        </h2>
        <p className="mt-4 text-3xl text-zinc-600">
          Pokonaj swoje wątpliwości i znajdź pierwszą pracę w IT z moją pomocą.
        </p>
        <p>
          Zastanawiasz się, jak zmienić swoją karierę i wejść do świata IT?
          Marzysz o stabilnej pracy, która przynosi satysfakcję i pozwala na
          rozwój? Wiesz, że IT to przyszłość, ale nie masz pewności, jak zacząć?
        </p>
        <p>
          Niestety, wiele osób, które chcą zmienić swoją ścieżkę kariery,
          spotyka się z wieloma przeszkodami. Brak odpowiednich umiejętności
          technicznych, niewystarczająca wiedza o rynku pracy IT oraz brak
          wsparcia i motywacji to tylko niektóre z wyzwań. Często czujemy się
          zagubieni i nie wiemy, jakie kroki podjąć, aby osiągnąć sukces.
        </p>
        <p>
          <span className={"text-orange-600"}>
            Konsultacje “Twoja pierwsza praca w IT jest w zasięgu ręki!”{" "}
          </span>
          to idealne rozwiązanie dla Ciebie!
        </p>
        <p>
          Dzięki mojemu doświadczeniu i wiedzy pomogę Ci zrozumieć, jakie
          umiejętności są najbardziej poszukiwane, jak przygotować się do rozmów
          kwalifikacyjnych i jak stworzyć atrakcyjne CV. Razem przejdziemy przez
          każdy etap, abyś mógł pewnie wkroczyć na rynek pracy IT i zdobyć swoją
          wymarzoną pracę.
        </p>
        <Button href={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}>
          {"Kup teraz -->"}
        </Button>
      </div>
    </Container>
  );
}
