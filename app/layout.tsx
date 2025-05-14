import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-BOX | Online events marketplace",
  description: "Explore and attend online events tailored to your interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"w-full relative font-sans"}>{children}</body>
    </html>
  );
}
