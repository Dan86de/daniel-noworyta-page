import { type ReactNode } from "react";

import { Layout } from "@/components/Layout.tsx";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
