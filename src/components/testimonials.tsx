'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import CountUp from "react-countup";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mike Rodriguez",
            business: "Rodriguez Plumbing",
            role: "Owner",
            rating: 5,
            image: "MR",
            testimonial: "I was losing jobs to competitors who just had better websites. Couldn't afford $10k for an agency and didn't have time to learn WordPress. These guys built me a site in 10 days that actually ranks on Google. Now I'm the one stealing customers.",
            result: "3x more leads in 60 days"
        },
        {
            name: "Sarah Chen",
            business: "Chen & Associates CPA",
            role: "Principal",
            rating: 5,
            image: "SC",
            testimonial: "Every tax season I'd lose potential clients because my website looked like garbage. Paid some 'web designer' $3k who ghosted me after 3 months. This was different - fast, professional, and it actually brings in clients. My phone hasn't stopped ringing.",
            result: "47% increase in consultations"
        },
        {
            name: "James Mitchell",
            business: "Mitchell Law Firm",
            role: "Attorney",
            rating: 5,
            image: "JM",
            testimonial: "I'm a lawyer, not a tech guy. Was paying $200/month for a site that looked terrible and never showed up on Google. Switched to these guys and within a month I was ranking for 'personal injury lawyer' in my city. ROI paid for itself in one case.",
            result: "Now ranking #2 on Google"
        },
        {
            name: "David Park",
            business: "Park Home Services",
            role: "Contractor",
            rating: 5,
            image: "DP",
            testimonial: "Wasted 6 months with an agency that kept asking for more money and more time. Meanwhile I'm watching jobs go to guys with websites that don't look like trash. Got this done in 2 weeks and my close rate went from 30% to 65%. That's real money.",
            result: "65% close rate from website leads"
        },
        {
            name: "Lisa Thompson",
            business: "Elite Fitness Training",
            role: "Personal Trainer",
            rating: 5,
            image: "LT",
            testimonial: "Instagram wasn't cutting it anymore. People would find me, then bounce when they saw my janky website. I thought I needed to spend thousands. Wrong. Got a site that loads instantly, looks professional, and converts. Best $2k I ever spent on my business.",
            result: "2x client bookings"
        },
        {
            name: "Robert Williams",
            business: "Williams HVAC",
            role: "Owner",
            rating: 5,
            image: "RW",
            testimonial: "My old site was so slow, people would give up and call the next guy. I'd see them visit on Google Analytics then leave in 2 seconds. Now it's lightning fast and my calendar is packed. Plus I'm not paying some agency $500/month for 'maintenance' anymore.",
            result: "Cut costs 70%, tripled inquiries"
        },
        {
            name: "Amanda Foster",
            business: "Foster Marketing Co",
            role: "Marketing Consultant",
            rating: 5,
            image: "AF",
            testimonial: "The irony wasn't lost on me - marketing consultant with a website from 2015. Clients would literally comment on it during calls. Embarrassing. Now I have a site I'm proud to show. Modern, fast, and finally represents the quality of work I do. Closed 3 deals in the first month.",
            result: "Closed 3 new clients immediately"
        }
    ];

    return (
        <section className="relative min-h-screen w-full bg-black py-24 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Still not convinced?
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-3xl text-gray-400"
                    >
                        See{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold">
                            <CountUp end={testimonials.length} duration={2} />+
                        </span>
                        {' '}real stories from contractors and small business owners who stopped losing to the competition
                    </motion.h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:to-purple-600/5 transition-all duration-300 rounded-2xl" />

                            <div className="relative z-10">
                                {/* Quote icon */}
                                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    "{testimonial.testimonial}"
                                </p>

                                {/* Result badge */}
                                <div className="inline-block px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                                    <span className="text-blue-400 text-xs font-semibold">
                                        {testimonial.result.split(" ").map((word, i) => {
                                            const hasNumber = /\d/.test(word);
                                            if (hasNumber) {
                                                const numericPart = parseFloat(word.replace(/[^\d.]/g, ""));
                                                if (!isNaN(numericPart)) {
                                                    const suffix = word.replace(/[\d.]/g, "");
                                                    return (
                                                        <span key={i}>
                                                            <CountUp end={numericPart} duration={2}/>{suffix}{" "}
                                                        </span>
                                                    )
                                                }
                                            }
                                            return <span key={i}>{word} </span>;
                                        })}
                                    </span>
                                </div>

                                {/* Author info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            {testimonial.role}, {testimonial.business}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Your competitors are using sites like these.
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl">
                            Every day you wait is another day they're stealing YOUR customers. How much longer can you afford to lose?
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                            Stop Losing - Start Now
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;