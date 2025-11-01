'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';

const TopCTA = () => {
    return (
        <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden border-b border-gray-800">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full">
                            <Zap className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-semibold">
                                Limited Spots Available
                            </span>
                        </div>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
                    >
                        Your Competitors Are Already Winning.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            How Long Will You Wait?
                        </span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Every day without a professional website is money left on the table. Stop watching customers choose your competition.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 pt-4"
                    >
                        {[
                            { icon: Clock, stat: '7-14 Days', label: 'To Launch' },
                            { icon: TrendingUp, stat: '3x ROI', label: 'Average Return' },
                            { icon: Zap, stat: '500+', label: 'Sites Built' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-2xl font-bold text-white">{item.stat}</div>
                                    <div className="text-sm text-gray-500">{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="group w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            Stop Losing Money Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
                        >
                            See Our Work
                        </motion.button>
                    </motion.div>

                    {/* Urgency text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-sm text-gray-500 pt-4"
                    >
                        ⚡ Only taking 5 new clients this month • No BS, no long contracts
                    </motion.p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </section>
    );
};

export default TopCTA;