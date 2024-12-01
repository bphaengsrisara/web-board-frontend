import type { Metadata } from "next";
import { Castoro, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const castoro = Castoro({
  subsets: ["latin"],
  variable: "--font-castoro",
  weight: "400",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Web Board",
  description: "Web Board with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          castoro.variable,
          inter.variable,
          ibmPlexSans.variable,
          "antialiased",
        )}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
