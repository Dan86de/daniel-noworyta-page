import { Button } from "@/components/Button.tsx";
import { Container } from "@/components/Container.tsx";

export default function NewsletterThanks() {
  return (
    <>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex flex-col max-w-2xl">
          <h2 className="pb-4 text-2xl md:text-4xl">
            Zapisałeś się na newsletter{" "}
            <span className="font-bold">Programistafrontend</span>
          </h2>
          <p className="pb-4">
            Na twoją skrzynkę dotarła wiadomość, gdzie musisz{" "}
            <strong>potwierdzić swoją rejestrację</strong>.
          </p>
          <ul className="list-disc pl-4">
            <li>
              Adres z którego wysyłam newsletter:{" "}
              <strong>newsletter@programistafrontend.pl</strong>
            </li>
            <li>
              Jeżeli nie potwierdzisz chęci otrzymywania wiadomości, nie będę
              mógł dostarczać Ci newslettera.
            </li>
            <li>
              Jeżeli mój email trafił do Twojej skrzynki <strong>SPAM</strong>{" "}
              lub <strong>OFERTY</strong>. Przenieś go proszę do{" "}
              <strong>INBOX</strong>
            </li>
          </ul>
          <p className="pt-4">Witaj na pokładzie i do przeczytania wkrótce!</p>
          <Button
            href="/"
            variant="secondary"
            className="mt-4 md:w-80 md:mx-auto"
          >
            Wróć na stronę główną
          </Button>
        </div>
      </Container>
    </>
  );
}
