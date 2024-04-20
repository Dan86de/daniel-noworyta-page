"use client";

import React from "react";

import { InfiniteMovingCards } from "@/components/InfiniteMovingCards.tsx";

export function YouTubeComments() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export type YouTubeTestimonial = {
  quote: string;
  name: string;
  title: string;
  href: string;
};

const testimonials: YouTubeTestimonial[] = [
  {
    quote: "Kupa konkretnej wiedzy, dzięki ogromne! 😉",
    name: "@jakobo5521",
    title: "Od zera do front-end developera",
    href: "https://www.youtube.com/watch?v=Wl1Rng0GIRU&t=11s",
  },
  {
    quote:
      "Świetnie tłumaczysz! Od razu można załapać i fajne przykłady. 😀 dzięki 😉 ",
    name: "@EwelinaKopacz",
    title: "Zrozumieć React Context API",
    href: "https://www.youtube.com/watch?v=LnaRInixDtI&t=410s",
  },
  {
    quote:
      "Dzięki Daniel za materiał. Czasem właśnie przychodzą chwile zwątpienia, czy aby nie jest już za późno i inne pierdoły, ale trzeba iść do przodu po swoje i tyle! Takie, krótkie materiały fajnie motywują. Dzięki! Pozdr",
    name: "@NatanielPelc",
    title: "Programistą być po 30-tce",
    href: "https://www.youtube.com/watch?v=TTijkp3pS5A&t=336s",
  },
  {
    quote: "Super materiał. Wielkie dzięki! Mój ulubiony branżowy kanał :D",
    name: "@asztonselecta965",
    title: "Pierwsze miesiące w branży IT",
    href: "https://www.youtube.com/watch?v=BYsEt2Wcw4Q",
  },
  {
    quote:
      "Bardzo dziękuję za ten film! Właśnie tych informacji potrzebowałam na początek mojej drogi z JS ❤️",
    name: "@kasiawu",
    title: "Jak nauczyć się JavaScriptu?",
    href: "https://www.youtube.com/watch?v=uS9-LJlaD9s",
  },
];
