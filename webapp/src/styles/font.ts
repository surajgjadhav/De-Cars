import {
  DM_Serif_Text,
  Gravitas_One,
  Open_Sans,
  Playfair_Display,
} from "next/font/google";

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const serif = DM_Serif_Text({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const gravitasOne = Gravitas_One({
  variable: "--font-gravitas-one",
  subsets: ["latin"],
  weight: "400",
});
