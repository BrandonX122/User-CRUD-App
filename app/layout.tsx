import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Some User Storing App",
  description: "Store users from forms",
};

export const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_mono.className} antialiased bg-[#ffe97f]`}>
        {children}
      </body>
    </html>
  );
}
