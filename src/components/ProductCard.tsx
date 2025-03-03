import Link from "next/dist/client/link";
import { type StaticRequire } from "next/dist/shared/lib/get-img-props";
import Image, { type StaticImageData } from "next/image";

import { Button } from "@/components/Button.tsx";

interface CardProps {
  url: string;
  title: string;
  subtitle: string;
  regularPrice?: number;
  price: number;
  sellingPoints: string[];
  withSale?: boolean;
  srcImage: string | StaticRequire | StaticImageData;
  altImage: string;
  cartUrl?: string;
}

export function Card({
  url,
  sellingPoints,
  title,
  subtitle,
  regularPrice,
  price,
  withSale = false,
  srcImage,
  altImage,
  cartUrl,
}: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl p-6 max-w-[400px] text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900">
      {withSale && (
        <div className="absolute top-0 left-0 bg-green-500 text-white p-2 rounded-br-lg">
          Promocja
        </div>
      )}
      {srcImage && (
        <Image
          src={srcImage}
          alt={altImage}
          className={"flex object-center w-40 h-40 mx-auto mt-14 mb-2"}
        />
      )}
      <div className="py-8 px-4 sm:px-6">
        <div className={"flex-col flex gap-1"}>
          <h2 className="flex text-2xl items-center font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {title}
          </h2>
          <p className="flex text-lg items-center font-semibold pb-2 pt-4">{subtitle}</p>
          <ul className={"list-disc ml-3 text-sm mb-6"}>
            {sellingPoints.map((point) => (
              <li key={point} className={""}>
                {point}
              </li>
            ))}
          </ul>
          <p>
            {regularPrice && (
              <span
                className={
                  "text-sm line-through text-red-500 dark:text-red-400"
                }
              >
                {regularPrice}
                {" zł"}
              </span>
            )}
          </p>
          <p className={"text-3xl"}>
            {price}
            {" zł"}
          </p>
          <span className={"text-xxs"}>Cena brutto</span>
          <Link href={url} className={"min-w-24 block"}>
            <Button variant={"secondary"} className={"p-2 text-lg mt-1 w-full"}>
              Szczegóły
            </Button>
          </Link>
          {cartUrl && (
            <Link href={cartUrl} className={"min-w-24 block"}>
              <Button variant={"orange"} className={"p-2 text-lg mt-1 w-full"}>
                Kup teraz
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
