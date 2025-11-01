'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import {brand} from "@/lib/brand";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'FAQ', href: '#faq' }
        ],
        company: [
            { name: 'About', href: '#about' },
            { name: 'Blog', href: '#blog' },
            { name: 'Careers', href: '#careers' },
            { name: 'Contact', href: '#contact' }
        ],
        resources: [
            { name: 'Documentation', href: '#docs' },
            { name: 'Case Studies', href: '#cases' },
            { name: 'Support', href: '#support' },
            { name: 'Status', href: '#status' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
            { name: 'Refund Policy', href: '#refunds' }
        ]
    };

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Github, href: '#', label: 'Github' }
    ];

    const contactInfo = [
        { icon: Mail, text: 'hello@yourbrand.com', href: 'mailto:hello@yourbrand.com' },
        { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: MapPin, text: 'San Francisco, CA', href: '#' }
    ];

    return (
        <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Main footer content */}
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">R</span>
                                </div>
                                <span className="text-white font-bold text-xl">{brand}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Stop losing customers to competitors. Get a professional website that ranks on Google and converts visitors into paying customers.
                            </p>

                            {/* Contact info */}
                            <div className="space-y-3">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <item.icon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
                                        <span className="text-sm">{item.text}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links sections */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-white font-semibold mb-4 capitalize">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-sm transition-colors inline-block hover:translate-x-1 duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="py-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-white font-semibold mb-2">Stay in the loop</h3>
                            <p className="text-gray-400 text-sm">Get tips on building websites that actually make money.</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-500 text-sm"
                        >
                            © {currentYear} YourBrand. All rights reserved.
                        </motion.p>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4"
                        >
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 rounded-lg bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;