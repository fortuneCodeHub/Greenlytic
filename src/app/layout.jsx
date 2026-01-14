import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import ReduxLandingProvider from "@/components/hooks/ReduxLandingProvider";
import Script from "next/script";
import AnalyticsTracker from "@/components/ui/AnalyticsTracker";
// import { GoogleAnalytics } from '@next/third-parties/google';
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
  metadataBase: new URL("https://www.tradingfarms.online/"),

  title: {
    default: "TradingFarms — Sustainability, Green Finance & Eco Innovation",
    template: "%s — TradingFarms"
  },

  description:
    "TradingFarms is a data-driven sustainability journal covering green finance, ESG metrics, climate risk, energy technology, eco-conscious living, and DIY home improvement. We explore how finance, policy, technology, and practical home solutions are shaping a resilient, low-carbon future.",

  keywords: [
    "TradingFarms",
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
    "environmental data analytics",
    // DIY Home Improvement Keywords
    "DIY home projects",
    "home improvement ideas",
    "eco friendly home upgrades",
    "sustainable DIY projects",
    "green home renovation",
    "energy efficient home",
    "home gardening tips",
    "upcycling furniture",
    "recycling at home",
    "eco friendly interior design",
    "DIY sustainable lifestyle",
    "green home solutions",
    "smart home energy savings",
    "low carbon home improvements",
    "environmentally conscious DIY"
  ],

  openGraph: {
    title: "TradingFarms — Sustainability, Climate Tech & DIY Home Innovation",
    description:
      "TradingFarms explores sustainability through finance, ESG metrics, climate technology, and practical DIY home improvements. We decode how innovation, data, and eco-conscious choices create a resilient future.",
    url: "https://www.tradingfarms.online/",
    siteName: "TradingFarms",
    images: [
      {
        // url: "/assets/TradingFarms-og.png",
        width: 1200,
        height: 630,
        alt: "TradingFarms — Sustainability, ESG, Climate Tech & DIY Home Journal"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "TradingFarms — Sustainability, Climate Tech & DIY Home Innovation",
    description:
      "A data-driven sustainability publication covering green finance, ESG, climate risk, energy technology, eco-conscious living, and DIY home improvement.",
    // images: ["/assets/TradingFarms-og.png"],
    creator: "@TradingFarms"
  },

  alternates: {
    canonical: "https://www.tradingfarms.online/"
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="TradingFarms RSS Feed"
          href="/rss.xml"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-51ERW1TF74`}
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
            gtag('config', 'G-51ERW1TF74');
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
        {/* <GoogleAnalytics gaId="G-51ERW1TF74" /> */}

        <CookieBanner />
      </body>
    </html>
  );
}
