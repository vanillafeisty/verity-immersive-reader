import "./globals.css";

export const metadata = {
  title: "Verity | Read the Vibe",
  description: "Immersive reading experience",
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