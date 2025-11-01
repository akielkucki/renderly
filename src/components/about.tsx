'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Clock, TrendingUp, Target, Zap, Shield, AtomIcon} from 'lucide-react';
import CountUp from "react-countup";
import Image from 'next/image';

const AboutSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressPercentages, setProgressPercentages] = useState<number[]>([0, 0, 0, 0, 0]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const sections = [
        {
            icon: Clock,
            title: "Launch in Days",
            subtitle: "Speed & Efficiency",
            description: "Traditional agencies take 3-6 months. We get you live in 7-14 days with streamlined processes and modern workflows.",
            stats: [
                { label: "Average Launch Time", value: "10 days" },
                { label: "Time Saved", value: "80%" },
                { label: "Projects Completed", value: "500+" }
            ],
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-80 h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl font-bold text-white mb-2">7-14</div>
                            <div className="text-xl text-gray-400">Days to Launch</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: TrendingUp,
            title: "Built to Rank",
            subtitle: "SEO Optimized",
            description: "Every site follows proven SEO best practices with optimized code, perfect Core Web Vitals, and strategic content structure.",
            stats: [
                { label: "Avg. Page Speed", value: "95+" },
                { label: "SEO Score", value: "98/100" },
                { label: "Rankings Improved", value: "300%" }
            ],
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-96 h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm p-8">
                        <div className="space-y-4">
                            {[
                                {
                                    metric: 'Performance',
                                    value: 110
                                },
                                {
                                    metric: 'SEO',
                                    value: 100
                                },
                                {
                                    metric: 'Accessibility',
                                    value: 100,
                                },
                                {
                                    metric: 'Best Practices',
                                    value: 100,
                                },
                                {
                                    metric: 'Humbleness',
                                    value: 100
                                }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between w-full gap-4">
                                    <span className="text-gray-400">{stat.metric}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${stat.value}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                            />
                                        </div>
                                        <span className="text-white font-semibold w-8"><CountUp end={stat.value}/>%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: Target,
            title: "Conversion Focused",
            subtitle: "Strategic Design",
            description: "Strategic layouts and clear CTAs designed to turn visitors into customers with data-driven design principles.",
            stats: [
                { label: "Avg. Conversion Rate", value: "4.2%" },
                { label: "CTA Click Rate", value: "12%" },
                { label: "Bounce Rate", value: "-45%" }
            ],
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-80 h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm p-8">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {[
                                { label: 'LTV', value: 4320, prefix: '$', suffix: '' },
                                { label: 'ATC', value: 1240, prefix: '', suffix: '' },
                                { label: 'ROAS', value: 6.4, prefix: '', suffix: 'x' },
                                { label: 'CAC', value: 22, prefix: '$', suffix: '' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-900/50 rounded-2xl border border-gray-700/30 p-4 flex flex-col items-center justify-center">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.prefix}<CountUp end={stat.value} decimals={(!Number.isInteger(stat.value) ? 1 : 0)}/>{stat.suffix}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: AtomIcon,
            title: "Lightning Fast",
            subtitle: "Performance",
            description: "Built with modern tech for blazing speed. <1s load times that Google and users love. Everything built by hand so you don't have to touch a website builder again.",
            stats: [
                { label: "Load Time", value: "<1s" },
                { label: "First Paint", value: "0.3s" },
                { label: "Time to Interactive", value: "1.2s" }
            ],
            visual: (
                <div className="relative w-full h-full flex items-baseline md:items-center justify-center">
                    <div className="relative w-80 h-80 rounded-3xl border border-gray-700/50 backdrop-blur-sm grid grid-cols-3 gap-4 p-8">

                        {['next','react','typescript','java','go','firebase','csharp','googleanalytics','postgresql'].map((s, i) => {
                            return <motion.span
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: i*0.1}}
                                className={"z-20"}><Image key={i} alt={s+' Logo'} src={`/${s+'logo'}.svg`} width={80} height={80} className={`z-20 ${s.includes('next') && ' bg-white rounded-full inset-0 antialiased'}`} /></motion.span>
                        })}

                    </div>
                </div>
            )
        },
        {
            icon: Shield,
            title: "Worry-Free",
            subtitle: "Full Support",
            description: "We handle updates, security, backups, and support so you can focus on growing your business without technical headaches.",
            stats: [
                { label: "Uptime", value: "99.9%" },
                { label: "Response Time", value: "<2hrs" },
                { label: "Client Satisfaction", value: "98%" }
            ],
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-80 h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center">
                        <Shield className="w-32 h-32 text-green-500" />
                        <motion.div
                            className="absolute inset-0 border-4 border-green-500/30 rounded-3xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            )
        }
    ];

    // Calculate progress percentage for each section
    const calculateProgressPercentages = (scrollProgress: number) => {
        const sectionProgress = scrollProgress * sections.length;

        return sections.map((_, index) => {
            if (index < sectionProgress - 1) {
                // Section is fully passed
                return 100;
            } else if (index > sectionProgress) {
                // Section hasn't been reached yet
                return 0;
            } else {
                // Current section - show partial progress
                const withinSectionProgress = (sectionProgress - index) * 100;
                return Math.min(Math.max(withinSectionProgress, 0), 100);
            }
        });
    };

    // Update active index and progress percentages on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const newIndex = Math.min(
                Math.floor(latest * sections.length),
                sections.length - 1
            );

            setActiveIndex(newIndex);
            setProgressPercentages(calculateProgressPercentages(latest));
        });

        return () => unsubscribe();
    }, [scrollYProgress, sections.length]);

    return (
        <div
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${sections.length * 100}vh` }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
                </div>

                {/* Content container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-12 shadow-2xl">
                        {/* Badge */}
                        <div className="text-center mb-8">
                            <div className="inline-block px-4 py-2 bg-blue-600 rounded-full">
                                <span className="text-white text-sm font-semibold">
                                    {sections[activeIndex].subtitle}
                                </span>
                            </div>
                        </div>

                        {/* Main content area */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left side - Text content */}
                            <div className="space-y-6">
                                {/* Progress indicators with detailed percentage */}
                                <div className="flex gap-2 mb-8">
                                    {sections.map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden"
                                        >
                                            <motion.div
                                                className="h-full bg-blue-500"
                                                style={{
                                                    width: `${progressPercentages[index]}%`
                                                }}
                                                transition={{ duration: 0.1, ease: "linear" }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Title */}
                                <motion.h2
                                    key={`title-${activeIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl md:text-5xl font-bold text-white"
                                >
                                    {sections[activeIndex].title}
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    key={`desc-${activeIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-lg text-gray-400 leading-relaxed"
                                >
                                    {sections[activeIndex].description}
                                </motion.p>

                                {/* Stats */}
                                <motion.div
                                    key={`stats-${activeIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="grid grid-cols-3 gap-4 pt-4"
                                >
                                    {sections[activeIndex].stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTA */}
                                <motion.button
                                    key={`cta-${activeIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    Learn more
                                </motion.button>
                            </div>

                            {/* Right side - Visual content */}
                            <motion.div
                                key={`visual-${activeIndex}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="md:h-[500px]"
                            >
                                {sections[activeIndex].visual}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;