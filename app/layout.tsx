import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yallafundraising.com"),
  title: {
    default: "Yalla Fundraising — Jewish Nonprofit Fundraising Counsel",
    template: "%s · Yalla Fundraising",
  },
  description:
    "Sharon Weiss-Greenberg helps Jewish & Israel-connected nonprofits raise more, build stronger boards, and run campaigns that last.",
  openGraph: {
    title: "Yalla Fundraising",
    description:
      "Fundraising counsel for Jewish & Israel-connected nonprofits — raise more, build stronger boards, run campaigns that last.",
    url: "https://yallafundraising.com",
    siteName: "Yalla Fundraising",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yalla Fundraising",
    description:
      "Fundraising counsel for Jewish & Israel-connected nonprofits — raise more, build stronger boards, run campaigns that last.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
