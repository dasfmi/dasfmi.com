import { Metadata } from "next";
import ar from "@/locales/ar";
import { HomePage } from "@/theme";

export const metadata: Metadata = {
  title: ar.name,
  description: ar.description,
};

export default function Home() {
  return <HomePage />
}
