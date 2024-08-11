import { type StaticImageData } from "next/image";

import { ContainerInner } from "@/components/Container.tsx";
import { Card } from "@/components/ProductCard.tsx";
import consultationImage from "@/images/consultation_product_icon.svg";

export default function ShopPage() {
  return (
    <ContainerInner className={"mt-6"}>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 py-8 text-center">
        Sklep programistyfrontend
      </h1>
      <Card
        url={"/sklep/konsultacje"}
        title={"Godzina konsultacji"}
        subtitle={"Tematy w których mogę Ci pomóc:"}
        price={"200 zł"}
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
      />
    </ContainerInner>
  );
}
