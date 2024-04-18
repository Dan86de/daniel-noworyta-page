import { Button } from "@/components/Button.tsx";
import { Container } from "@/components/Container.tsx";

export default function NewsletterThanks() {
  return (
    <>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex flex-col">
          <h2 className="pb-4 text-2xl md:text-4xl">
            Potwierdziłeś/aś swój zapis na newsletter{" "}
            <span className="font-bold">Programistafrontend</span>
          </h2>
          <p className="pt-4">Witaj na pokładzie i do przeczytania wkrótce!</p>
          <p className="pt-4">
            <strong>P.S </strong>Pamiętaj,aby koniedznie dodać adres{" "}
            <strong className={"font-semibold text-brand"}>
              newsletter@programistafrontend.pl
            </strong>{" "}
            do swoich kontaktów. Dzięki temu moje treści na pewno do Ciebie
            dotrą.
          </p>
          {/*<div className={"ml-auto lg:w-1/2"}>*/}
          {/*  <Image*/}
          {/*    src={signature}*/}
          {/*    alt="podpis"*/}
          {/*    width={200}*/}
          {/*    height={100}*/}
          {/*    className="mr-4 aspect-video dark:hidden"*/}
          {/*  />*/}
          {/*  <Image*/}
          {/*    src={signatureDark}*/}
          {/*    alt="podpis"*/}
          {/*    width={200}*/}
          {/*    height={100}*/}
          {/*    className="mr-4 hidden aspect-video dark:block"*/}
          {/*  />*/}
          {/*</div>*/}
          <Button
            href="/"
            variant="secondary"
            className="mt-8 md:w-80 md:mx-auto"
          >
            Wróć na stronę główną
          </Button>
        </div>
      </Container>
    </>
  );
}
