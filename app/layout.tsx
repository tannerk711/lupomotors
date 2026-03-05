import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyFooter from "@/components/layout/MobileStickyFooter";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Sell Your Car Fast | ${siteConfig.name} — ${siteConfig.tagline}`,
  description: `Get a real cash offer on your car in minutes. From daily drivers to exotics, ${siteConfig.priceRange}. Serving Idaho, Oregon, Washington, Utah, Northern California & Montana. Cash in hand within 24-48 hours.`,
  openGraph: {
    title: `Sell Your Car Fast | ${siteConfig.name}`,
    description: `Get a real cash offer on your car in minutes. ${siteConfig.priceRange}. Pacific Northwest's premium car buyer.`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Sell Your Car Fast | ${siteConfig.name}`,
    description: `Get a real cash offer on your car in minutes. ${siteConfig.priceRange}.`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyFooter />

        {/* Facebook Pixel */}
        {fbPixelId && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${fbPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Google Analytics 4 */}
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
