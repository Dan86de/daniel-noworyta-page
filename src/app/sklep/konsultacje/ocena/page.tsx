import Image from "next/image";
import React, { Suspense } from "react";

import { ConsultationReviewPageForm } from "@/components/ConsultationReviewForm/ConsultationReviewForm.tsx";
import { ConsultationReviewPageHeader } from "@/components/ConsultationReviewPageHeader.tsx";
import { Container } from "@/components/Container.tsx";
import { Prose } from "@/components/Prose.tsx";
import signature from "@/images/signature.webp";
import signatureDark from "@/images/signature_dark_white.webp";

export default function ConsultationReview() {
  return (
    <Suspense>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
          <Prose>
            <ConsultationReviewPageHeader />

            <p>
              Bardzo zależy mi na Twojej szczerej opinii o tym spotkaniu.
              Wypełnij ten prosty formularz. Obiecuję, że{" "}
              <strong>wypełnienie go zajmie Ci mniej niż 1 minutę.</strong>
            </p>
            <p>
              Bardzo mi zależy, żeby każdy, kto korzysta z moich usług, był
              zadowolony. Twoja opinia pozwoli mi:
            </p>
            <ul>
              <li>zwiększyć satysfakcję z korzystania z moich usług</li>
              <li>poprawić jakość produktów i usług jakie oferuję</li>
              <li>lepiej zrozumieć Twoje potrzeby</li>
            </ul>

            {/*<h3 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 mt-12">*/}
            {/*  Pytania pomocnicze, z których możesz (ale nie musisz) skorzystać*/}
            {/*  wypełniając formularz:*/}
            {/*</h3>*/}
            {/*<ol>*/}
            {/*  <li>Jakie były Twoje wątpliwości przed zakupem konsultacji?</li>*/}
            {/*  <li>*/}
            {/*    Co zmieniło się po konsultacjach? Co z tej wiedzy się przyda?*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    Gdyby znajoma osoba zapytała Cię, czy warto skorzystać z*/}
            {/*    konsultacji, co powiesz?*/}
            {/*  </li>*/}
            {/*</ol>*/}
            <p>
              Ze względów formalnych zaznacz też, proszę czy zgadzasz się, żebym
              wykorzystał Twoją opinię w celach promocyjnych. Jeżeli chcesz,
              dodaj link do Twojej strony, to pozwoli Ci dotrzeć do nowych osób.
              A jeżeli dorzucisz do tego swoje zdjęcie, to już w ogóle będę
              zachwycony. 🙂
            </p>

            <p>Dziękuję serdecznie za Twój czas.</p>

            <div className={"w-full flex align-baseline justify-end mt-24"}>
              <div className={"flex-col"}>
                <div className={"-my-8 mx-4 flex-col pb-6"}>
                  <p
                    className={
                      "text-zinc-900 dark:text-zinc-100 m-0 font-medium"
                    }
                  >
                    Daniel Noworyta
                  </p>
                  <p
                    className={
                      "text-sm text-zinc-900 dark:text-zinc-100 m-0 font-normal"
                    }
                  >
                    Programistafrontend
                  </p>
                </div>
                <Image
                  src={signature}
                  alt="podpis"
                  width={200}
                  height={100}
                  className="aspect-video dark:hidden"
                />
                <Image
                  src={signatureDark}
                  alt="podpis"
                  width={200}
                  height={100}
                  className="hidden aspect-video dark:block"
                />
              </div>
            </div>
          </Prose>
          <div className="relative">
            <ConsultationReviewPageForm />
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
