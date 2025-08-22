// app/fonts.ts
import { Poppins, Happy_Monkey, Chewy } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-poppins",
});

export const happyMonkey = Happy_Monkey({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-happy-monkey",
});

export const chewy = Chewy({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-chewy",
});
