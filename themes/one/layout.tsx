import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Noto_Sans_Arabic } from "next/font/google";

const noto = Noto_Sans_Arabic({
  display: "swap",
});

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${noto.className} antialiased`}>
        <Header />
        <main className="pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
