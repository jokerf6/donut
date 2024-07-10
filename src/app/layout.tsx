import type { Metadata } from "next";
import { Inter, Seymour_One } from "next/font/google";
import "./globals.css";

// Import the fonts
const inter = Inter({ subsets: ["latin"] });
const seymourOne = Seymour_One({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Gogosi",
  description: "Gogosi Donuts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Gogosi</title>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={seymourOne.className}>
        {/* Example usage of Seymour_One font */}

        {children}
      </body>
    </html>
  );
}
