"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button.tsx";
import { Card } from "@/components/Card.tsx";

export function cookieConsentGiven() {
  if (!localStorage.getItem("cookie_consent")) {
    return "undecided";
  }
  return localStorage.getItem("cookie_consent");
}

export function Banner() {
  const [consentGiven, setConsentGiven] = useState<string | null>(null);

  useEffect(() => {
    setConsentGiven(cookieConsentGiven());
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "yes");
    setConsentGiven("yes");
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookie_consent", "no");
    setConsentGiven("no");
  };

  return (
    <>
      {consentGiven === "undecided" && (
        <div className="pointer-events-none fixed p-6 inset-x-0 bottom-0 ">
          <Card className="pointer-events-auto max-w-xl border rounded-xl border-zinc-300 p-6 dark:border-zinc-700/70 text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950">
            <div className="flex gap-4 items-center">
              <Card.Title>
                Korzystając z danielnoworyta.pl zgadzasz się z{" "}
                <Link
                  className="text-orange-500 underline"
                  href={"/polityka-prywatnosci"}
                >
                  Polityką Prywatności.
                </Link>
              </Card.Title>
              <Button onClick={handleAcceptCookies}>{"OK"}</Button>
              <Button onClick={handleDeclineCookies}>{"NIE!"}</Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
