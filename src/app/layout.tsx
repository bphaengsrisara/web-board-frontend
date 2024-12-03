import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { castoro, ibmPlexSans, inter } from "@/config/font";

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
