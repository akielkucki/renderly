import { MetadataRoute } from 'next'
import {brand} from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${brand} - Professional Websites That Rank & Convert`,
        short_name: `${brand}`,
        description: 'Stop losing customers to competitors. Get a professional, SEO-optimized website built in 7-14 days. Trusted by 500+ contractors & small businesses.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        orientation: 'portrait-primary',
        scope: '/',
        lang: 'en-US',
        dir: 'ltr',
        categories: ['business', 'productivity'],
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icon-192-maskable.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icon-512-maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        screenshots: [
            {
                src: '/screenshot-desktop.png',
                sizes: '1280x720',
                type: 'image/png',
                form_factor: 'wide',
                label: 'Desktop view of YourBrand homepage',
            },
            {
                src: '/screenshot-mobile.png',
                sizes: '750x1334',
                type: 'image/png',
                form_factor: 'narrow',
                label: 'Mobile view of YourBrand homepage',
            },
        ],
        shortcuts: [
            {
                name: 'Get Started',
                short_name: 'Start',
                description: 'Start building your professional website today',
                url: '/#contact',
                icons: [
                    {
                        src: '/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            },
            {
                name: 'View Pricing',
                short_name: 'Pricing',
                description: 'See our transparent pricing plans',
                url: '/#pricing',
                icons: [
                    {
                        src: '/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            },
            {
                name: 'Testimonials',
                short_name: 'Reviews',
                description: 'Read success stories from our clients',
                url: '/#testimonials',
                icons: [
                    {
                        src: '/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            },
        ],
    }
}