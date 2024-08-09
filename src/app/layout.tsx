import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/tailwind.css";
import { type Metadata } from "next";
import { type ReactNode } from "react";

import { Providers } from "@/app/providers.tsx";
import { Banner } from "@/components/CookieBanner.tsx";
import { Metrics } from "@/metrics";

export const metadata: Metadata = {
  title: {
    template: "%s - Daniel Noworyta",
    default:
      "Daniel Noworyta - Pomagam od zera nauczyć się programowania i zdobyć pracę w IT.",
  },
  description:
    "Daniel Noworyta, programista samouk. Jestem założycielem kanału Programistafrontend na YouTube, gdzie dzielę się swoją wiedzą i doświadczeniem związanym z nauką programowania, zmianą branży i rozwojem swojej kariery w IT.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className="h-full antialiased overflow-y-scroll"
      suppressHydrationWarning
    >
      <GoogleTagManager gtmId="GTM-KT7MFCQQ" />
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">{children}</div>
          <Banner />
        </Providers>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-41WJTNYSX1" />
        <Metrics />
      </body>
    </html>
  );
}
