import { type StaticImageData } from "next/image";

import { Card } from "@/components/ProductCard.tsx";
import consultationImage from "@/images/consultation_product_icon.svg";
import ebookImage from "@/images/ebook_product_icon.svg";
import workshopImage from "@/images/workshop_product_icon.svg";

export default function ShopPage() {
  return (
    <div className={"mt-6"}>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 py-8 text-center">
        Sklep
      </h1>
      <div
        className={
          "grid lg:grid-cols-[400px_400px] 2xl:grid-cols-[400px_400px_400px] gap-12 justify-center"
        }
      >
        <Card
          url={"/sklep/konsultacje"}
          title={"Godzina konsultacji"}
          subtitle={"Tematy w których mogę Ci pomóc:"}
          regularPrice={400}
          price={200}
          sellingPoints={[
            "Tworzenie skutecznego CV",
            "Budowa mocnego portfolio",
            "Rozwijanie umiejętności miękkich",
            "Budowa silnego wizerunku online",
            "Rozwijanie umiejętności technicznych",
          ]}
          withSale={true}
          srcImage={consultationImage as StaticImageData}
          altImage={"Ikona konsultacji"}
          cartUrl={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
        />
        <Card
          url={"/sklep/ebook/pierwsza-praca-w-it"}
          title={"Ebook Pierwsza praca w IT"}
          subtitle={"Dowiesz się z niego:"}
          regularPrice={99}
          price={79}
          sellingPoints={[
            "Jak skutecznie uczyć programowania?",
            "Jak zdobyć doświadczenie, nie mając pracy?",
            "Jak zbudować mocne portfolio?",
            "Jak zdobyć pracę w IT bez doświadczenia?",
            "Jak dobrze wypaść podczas rekrutacji?",
          ]}
          withSale={true}
          srcImage={ebookImage as StaticImageData}
          altImage={"Ikona ebooka Pierwsza praca w IT"}
          cartUrl={"SOME_CART_URL"}
        />
        <Card
          url={"/sklep/warsztaty/skuteczne-cv"}
          title={"Warsztat Skuteczne CV"}
          subtitle={"Dowiesz się z niego:"}
          regularPrice={379}
          price={299}
          sellingPoints={[
            "Jak wyróżnić się w oczach rekrutera?",
            "Jakie błędy popełniasz w swoim CV?",
            "Jakie informacje powinno zawierać CV?",
            "Jakie projekty warto umieścić w CV?",
            "Czego unikać w CV?",
          ]}
          withSale={true}
          srcImage={workshopImage as StaticImageData}
          altImage={"Ikona warsztatu Skuteczne CV"}
          cartUrl={"SOME_CART_URL"}
        />
      </div>
    </div>
  );
}
