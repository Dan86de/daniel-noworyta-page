import { Card } from "@/components/ProductCard.tsx";
import consultationImage from "@/images/consultation_product_icon.svg";
import { type StaticImageData } from "next/image";

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
          regularPrice={492}
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
        {/*<Card*/}
        {/*  url={"/sklep/ebook/pierwsza-praca-w-it"}*/}
        {/*  title={"Pierwsza praca w IT"}*/}
        {/*  subtitle={"Dowiesz się z niego:"}*/}
        {/*  regularPrice={99}*/}
        {/*  price={79}*/}
        {/*  sellingPoints={[*/}
        {/*    "Jak skutecznie uczyć programowania?",*/}
        {/*    "Jak zdobyć potrzebne doświadczenie?",*/}
        {/*    "Jak zbudować mocne portfolio?",*/}
        {/*    "Jak zdobyć pracę w IT bez doświadczenia?",*/}
        {/*    "Jak dobrze wypaść podczas rekrutacji?",*/}
        {/*  ]}*/}
        {/*  withSale={true}*/}
        {/*  srcImage={bookImage as StaticImageData}*/}
        {/*  altImage={"Ikona ebooka Pierwsza praca w IT"}*/}
        {/*  cartUrl={"SOME_CART_URL"}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
