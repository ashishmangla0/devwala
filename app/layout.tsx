import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Eyebrow } from "@/components/eyebrow/Eyebrow";
import { siteConfig } from "@/config/site";
import "@/styles/global.scss";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Devwala",
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className={inter.className}>
        {siteConfig.eyebrow.enabled && <Eyebrow />}
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
