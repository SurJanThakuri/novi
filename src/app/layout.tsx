import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

export const metadata: Metadata = {
  title: "Novi | Project Management Without the Noise",
  description:
    "Novi brings tasks, docs, and conversations into one calm workspace built for boutique studios, design consultancies, and independent software teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
