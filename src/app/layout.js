import Navbar from "@/components/layout/Navbar/Navbar";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Pratik Jha | Developer, Designer, Creator",
  description:
    "I'm Pratik Jha — a 16-year-old web developer, game creator, and creative explorer. Check out my portfolio, projects, blog, and more!",
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <body className="">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
