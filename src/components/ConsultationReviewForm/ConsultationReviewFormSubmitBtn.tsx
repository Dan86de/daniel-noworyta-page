"use client";

import React from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/Button.tsx";
import { cn } from "@/lib/cn.ts";

export function ConsultationReviewFormSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={"primary"}
      type="submit"
      className={cn(
        "bg-orange-600 dark:bg-orange-600",
        pending && "bg-zinc-700 dark:bg-zinc-600 pointer-events-none",
      )}
      disabled={pending}
    >
      {pending ? "Wysyłam opinię..." : "Dodaj opinię"}
    </Button>
  );
}
