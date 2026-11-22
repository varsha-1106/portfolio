import type { Metadata, Viewport } from "next";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://varsha-portfolio.vercel.app"),
  title: "Varsha T. | Aspiring AI Engineer & Portfolio",
  description:
    "Portfolio of Varsha T., an Artificial Intelligence and Machine Learning engineering student exploring technology, building projects, and developing intelligent solutions.",
  keywords: [
    "Varsha T",
    "AI Engineer",
    "Machine Learning Student",
    "Computer Vision",
    "Portfolio",
    "Sri Sairam College of Engineering",
    "Hosur",
    "Bangalore"
  ],
  authors: [{ name: "Varsha T." }],
  creator: "Varsha T.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varshat-portfolio.vercel.app",
    title: "Varsha T. | Aspiring AI Engineer & Portfolio",
    description:
      "Turning ideas into intelligent solutions. Personal portfolio of Varsha T., Artificial Intelligence & Machine Learning engineering student.",
    siteName: "Varsha T. Portfolio",
    images: [
      {
        url: "/images/varsha-profile.png",
        width: 1200,
        height: 630,
        alt: "Varsha T. - Future AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varsha T. | Aspiring AI Engineer & Portfolio",
    description: "Turning ideas into intelligent solutions. AI/ML Engineering student.",
    images: ["/images/varsha-profile.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg text-primary antialiased min-h-screen selection:bg-[#4E85BF]/30 selection:text-white">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
