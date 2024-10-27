import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/theme";
import ar from "@/locales/ar";

export const metadata: Metadata = {
  title: ar.name,
  description: ar.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
