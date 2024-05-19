"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export function ConsultationReviewPageHeader() {
  const searchParams = useSearchParams();
  return (
    <Suspense>
      <h2 className="flex text-md items-center font-semibold text-zinc-900 dark:text-zinc-100 mt-0">
        Hej {searchParams.get("name") ?? ""}! 👋
        <br />
        <br />
        Dzięki za pozytywną energię na naszym spotkaniu.
      </h2>
    </Suspense>
  );
}
