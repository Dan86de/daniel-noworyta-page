import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32 mx-auto">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Strony nie odnaleziono.
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Przepraszam, ale coś poszło nie tak i nie mogę odnaleźć tej strony.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Wróć na stronę główną
        </Button>
      </div>
    </Container>
  );
}
