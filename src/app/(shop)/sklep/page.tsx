import { type StaticImageData } from "next/image";

import { Card } from "@/components/ProductCard.tsx";
import consultationImage from "@/images/consultation_product_icon.svg";

export default function ShopPage() {
  return (
    <div className={"mt-6"}>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 py-8 text-center">
        Sklep
      </h1>
      <div className={"grid lg:grid-cols-[400px_400px] 2xl:grid-cols-[400px_400px_400px] gap-12 justify-center"}>
        <Card
          url={"/sklep/konsultacje"}
          title={"Godzina konsultacji"}
          subtitle={"Tematy w których mogę Ci pomóc:"}
          price={250}
          sellingPoints={[
            "Tworzenie skutecznego CV",
            "Budowa mocnego portfolio",
            "Rozwijanie umiejętności miękkich",
            "Budowa silnego wizerunku online",
            "Rozwijanie umiejętności technicznych",
          ]}
          srcImage={consultationImage as StaticImageData}
          altImage={"Ikona konsultacji"}
          cartUrl={"https://sklep.danielnoworyta.pl/cart/add_product/11829"}
        />
      </div>
    </div>
  );
}
