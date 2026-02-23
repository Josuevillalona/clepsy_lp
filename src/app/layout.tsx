import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clepsy — Take Back Your Time",
  description:
    "Clepsy blocks social media until you earn screen time through productive apps. No more doomscrolling on autopilot. Coming soon to iOS.",
  keywords: [
    "screen time",
    "doomscrolling",
    "productivity",
    "social media blocker",
    "iOS app",
    "digital wellbeing",
  ],
  openGraph: {
    title: "Clepsy — Take Back Your Time",
    description:
      "Block social media. Earn screen time through productive apps. No more doomscrolling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clepsy — Take Back Your Time",
    description:
      "Block social media. Earn screen time through productive apps. No more doomscrolling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
