import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clepsy — Take Back Your Time",
  description:
    "What if every hour on TikTok became an hour of Duolingo? Clepsy trades your scroll time for time that builds something real. Coming soon to iOS.",
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
      "Trade your scroll time for time that builds something real. 52 books. A new language. You already have the hours.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clepsy — Take Back Your Time",
    description:
      "Trade your scroll time for time that builds something real. 52 books. A new language. You already have the hours.",
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
