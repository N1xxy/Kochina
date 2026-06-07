import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Кочина",
  description:
    "Сравнение на политически обещания, действия и източници в България.",
  icons: {
    icon: "/kochina-raccoon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
