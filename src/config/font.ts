import { Castoro, IBM_Plex_Sans, Inter } from "next/font/google";

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
