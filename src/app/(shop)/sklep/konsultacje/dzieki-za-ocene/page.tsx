import { Button } from "@/components/Button.tsx";
import { Container } from "@/components/Container.tsx";

export default function ConsultationReviewThanks() {
  return (
    <>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex flex-col w-full mx-auto items-center">
          <h2 className="pb-4 text-2xl md:text-4xl">
            Dziękuję za Twoją opinię!
          </h2>
          <Button href="/" variant="secondary" className="mt-4 md:w-80">
            Wróć na stronę główną
          </Button>
        </div>
      </Container>
    </>
  );
}
