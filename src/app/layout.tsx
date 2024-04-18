import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "@/styles/tailwind.css";

import { Providers } from "@/app/providers.tsx";
import { Layout } from "@/components/Layout.tsx";

export const metadata: Metadata = {
  title: {
    template: "%s - Daniel Noworyta",
    default:
      "Daniel Noworyta - Fullstack Developer, Specjalista ds. Przekwalifikowania",
  },
  description:
    "Daniel Noworyta, programista i specjalista ds. przekwalifikowania. Jestem załozycielem kanału Programistafrontend na YouTube, gdzie dzielę się swoją wiedzą i doświadczeniem związanym z programowaniem.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
