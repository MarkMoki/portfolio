import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moki Mark - Full Stack Developer Portfolio",
  description: "Professional portfolio of Moki Mark, a highly skilled Full Stack & Mobile Developer specializing in Next.js, React, Flutter, and scalable backend solutions.",
  keywords: ["Full Stack Developer", "Mobile Developer", "Next.js", "React", "Flutter", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Moki Mark" }],
  creator: "Moki Mark",
  publisher: "Moki Mark",
  openGraph: {
    title: "Moki Mark - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing innovative web and mobile applications built with modern technologies.",
    url: "https://markmoki.vercel.app",
    siteName: "Moki Mark Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moki Mark - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moki Mark - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing innovative web and mobile applications built with modern technologies.",
    images: ["/og-image.png"],
    creator: "@mokidev01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Moki Mark Portfolio",
    "application-name": "Moki Mark Portfolio",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
