import type { Metadata } from "next";
import {
    Bungee_Shade,
    Geist,
    Geist_Mono,
    Georama, Monoton,
    Orbitron, Rampart_One,
    Rubik_Doodle_Shadow,
    Share_Tech,
    TASA_Orbiter
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Head from "next/head";

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
});
const orbitron = TASA_Orbiter({
    variable: "--font-orbit",
    weight: "400"
})
const logoFont = Rampart_One({
    variable: "--font-logo",
    weight: "400"
})

export const metadata: Metadata = {
    title: "Professional Websites That Rank & Convert | Built in 7-14 Days",
    description: "Stop losing customers to competitors with better websites. Get a professional, SEO-optimized website built in 7-14 days. Trusted by 500+ contractors & small businesses.",
    keywords: [
        "professional website design",
        "small business website",
        "contractor website",
        "SEO website",
        "website that converts",
        "fast website development",
        "Google ranking website",
        "affordable web design",
        "custom website builder",
        "business website services"
    ],
    authors: [{ name: "YourBrand" }],
    creator: "YourBrand",
    publisher: "YourBrand",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://yourbrand.com'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Stop Losing Customers to Competitors | Professional Websites Built Fast",
        description: "You're bleeding money every day your website looks outdated. Get a professional, conversion-focused website in 7-14 days. No long waits, no BS.",
        url: 'https://yourbrand.com',
        siteName: 'YourBrand',
        images: [
            {
                url: '/og-image.jpg', // Add your OG image (1200x630px)
                width: 1200,
                height: 630,
                alt: 'YourBrand - Professional Websites That Convert',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Stop Losing Customers to Competitors | Professional Websites",
        description: "Get a professional, SEO-optimized website built in 7-14 days. Trusted by 500+ contractors & small businesses.",
        images: ['/twitter-image.jpg'], // Add your Twitter card image (1200x600px)
        creator: '@yourbrand', // Replace with your Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Add your Google Search Console verification
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            {/* Additional SEO tags */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta name="theme-color" content="#000000" />

            {/* Preconnect to important domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Structured Data - Organization */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "YourBrand",
                        "url": "https://yourbrand.com",
                        "logo": "https://yourbrand.com/logo.png",
                        "description": "Professional websites that rank on Google and convert visitors into customers. Built in 7-14 days.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "San Francisco",
                            "addressRegion": "CA",
                            "addressCountry": "US"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1-555-123-4567",
                            "contactType": "Customer Service",
                            "email": "hello@yourbrand.com"
                        },
                        "sameAs": [
                            "https://twitter.com/yourbrand",
                            "https://linkedin.com/company/yourbrand",
                            "https://instagram.com/yourbrand"
                        ]
                    })
                }}
            />

            {/* Structured Data - Service */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Professional Website Design & Development",
                        "description": "Custom website design and development services for small businesses and contractors. SEO-optimized, conversion-focused websites built in 7-14 days.",
                        "provider": {
                            "@type": "Organization",
                            "name": "YourBrand"
                        },
                        "serviceType": "Web Design and Development",
                        "areaServed": "US",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Web Design Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom Website Design"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "SEO Optimization"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Conversion Optimization"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </Head>
        <body
            className={`antialiased ${georama.variable} ${orbitron.variable} ${logoFont.variable}`}
        >
        <Navbar/>
        {children}
        </body>
        </html>
    );
}

//
