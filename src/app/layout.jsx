import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import ReduxLandingProvider from "@/components/hooks/ReduxLandingProvider";
import Script from "next/script";
import AnalyticsTracker from "@/components/ui/AnalyticsTracker";
import CookieBanner from "@/components/ui/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.greenlytic.com/"),

  title: {
    default: "Greenlytic — Sustainability, Green Finance & Climate Intelligence",
    template: "%s — Greenlytic"
  },

  description:
    "Greenlytic is a data-led sustainability journal covering green finance, ESG metrics, climate risk, energy technology, and eco-conscious living. We explore how capital, policy, and innovation are shaping a resilient, low-carbon future.",

  keywords: [
    "Greenlytic",
    "sustainability blog",
    "green finance",
    "ESG investing",
    "environmental social governance",
    "climate risk analysis",
    "climate change insights",
    "renewable energy trends",
    "clean energy transition",
    "climate tech innovation",
    "energy technology",
    "impact investing",
    "sustainable investment strategies",
    "data driven sustainability",
    "AI in sustainability",
    "carbon footprint reduction",
    "net zero strategies",
    "green economy",
    "circular economy",
    "eco friendly lifestyle",
    "sustainable living",
    "long term resilience",
    "climate policy insights",
    "environmental data analytics"
  ],

  openGraph: {
    title: "Greenlytic — Sustainability & Climate Intelligence",
    description:
      "Greenlytic examines sustainability through data, finance, and innovation. From ESG analysis to climate technology and eco-conscious living, we decode the systems shaping a resilient future.",
    url: "https://www.greenlytic.com/",
    siteName: "Greenlytic",
    images: [
      {
        // url: "/assets/greenlytic-og.png",
        width: 1200,
        height: 630,
        alt: "Greenlytic — Sustainability, ESG & Climate Tech Journal"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Greenlytic — Sustainability & Climate Intelligence",
    description:
      "A data-driven sustainability publication covering green finance, ESG, climate risk, energy technology, and eco-conscious living.",
    // images: ["/assets/greenlytic-og.png"],
    creator: "@greenlytic"
  },

  alternates: {
    canonical: "https://www.greenlytic.com/"
  }
};




const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // normal, semi-bold, bold
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-H1QYN3T4M0`}
          strategy="afterInteractive"
        />
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H1QYN3T4M0', {
              page_path: window.location.pathname,
            });
          `}
        </Script> */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H1QYN3T4M0');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${poppins.className} antialiased`}
      >
        <AnalyticsTracker /> {/* 👈 placed here once */}
        <ReduxLandingProvider>
          {children}
        </ReduxLandingProvider>

        <CookieBanner />
      </body>
    </html>
  );
}
