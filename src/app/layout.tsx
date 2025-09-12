import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// load font from Google
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], 
});

export const metadata: Metadata = {
  title: "Lashes & Brows by Leslie",
  description: "Premium lash extensions and microblading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* apply font to whole site */}
      <body className={outfit.className}>{children}</body>
    </html>
  );
}


