import { ContactPage } from "@/theme";
import { Metadata } from "next";

const title = "تواصل | إسلام";

export const metadata: Metadata = {
  title: title,
  description:
    "لنتواصل سوياً ولتخبرني عن مشروعك الشيق. اكتب لي بريداً واحكي لي عن ما تود بناءه",
};

export default function Contact() {
  return <ContactPage />;
}
