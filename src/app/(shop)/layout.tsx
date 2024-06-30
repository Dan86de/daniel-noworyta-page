import React, { type ReactNode } from "react";

import { Footer } from "@/components/Footer.tsx";
import { Header } from "@/components/Header.tsx";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full flex-col">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer isShop={true} />
    </div>
  );
}
