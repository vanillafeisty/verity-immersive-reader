import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verity | Read the Vibe",
  description: "Read the Vibe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}