'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MinimalistHero = () => {
    const message = 'Stop losing customers to competitors with better websites'.split(' ');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function onMouseMove(event: MouseEvent) {
            // Calculate position relative to center of screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Normalize to -1 to 1 range
            const x = (event.clientX - centerX) / centerX;
            const y = (event.clientY - centerY) / centerY;

            setMousePos({ x, y });
        }
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    // Highlight logic for key words
    const highlightIndices = message.reduce<number[]>((acc, word, i) => {
        if (['losing', 'better'].includes(word.toLowerCase())) acc.push(i);
        return acc;
    }, []);

    // Calculate rotation based on mouse position
    const rotateY = mousePos.x * 15; // Max 15 degrees rotation
    const rotateX = -mousePos.y * 15; // Negative for intuitive movement

    return (
        <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
            {/* Dramatic blue lighting effect - resembling Hyros' atmospheric glow */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main blue radial gradient from top */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
                    style={{
                        background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 60%)'
                    }}
                />

                {/* Secondary atmospheric blue glow */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]"
                />

                {/* Left side accent */}
                <div
                    className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
                />

                {/* Right side accent */}
                <div
                    className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"
                />
            </div>

            {/* 3D floating element - responsive positioning */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.3 },
                    scale: { duration: 1, delay: 0.3 },
                    y: { duration: 1, delay: 0.3 },
                }}
                style={{
                    rotateX: `${rotateX*2}deg`,
                    rotateY: `${rotateY*2}deg`,
                    transition: 'transform 0.1s ease-out'
                }}
                className="absolute top-[8%] sm:top-[10%] md:top-[12%] lg:top-[10%] left-1/2 -translate-x-1/2 z-0"
            >
                <div
                    className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm rounded-3xl"
                    style={{
                        transform: 'perspective(1000px)',
                        boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)'
                    }}
                >
                    {/* Inner geometric shapes for depth */}
                    <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/20 flex items-center justify-center">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-shadow-lg text-shadow-black font-logo">R</h1>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-500/30 rounded-xl blur-xl" />
                </div>
            </motion.div>

            {/* Hero content - positioned below R on mobile */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-36 sm:pt-40 md:pt-44 lg:pt-0">
                {/* Main headline */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        {message.map((text, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20, filter: 'blur(8px)'}}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.08 + 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className={`inline-block ${
                                    highlightIndices.includes(i)
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 '
                                        : 'text-white'
                                }`}
                            >
                                {text}
                                {i < message.length - 1 && '\u00A0'}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: message.length * 0.08 + 0.7,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4"
                >
                    You're bleeding money every day your website looks like it's from 2010. While you're juggling client work, your competitors are stealing YOUR customers with sites that actually convert.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: message.length * 0.08 + 0.9,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                    >
                        Fix This Now
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                    >
                        See How It Works
                    </motion.button>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: message.length * 0.08 + 1.2,
                        duration: 0.6,
                    }}
                    className="mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm text-gray-500 px-4"
                >
                    Trusted by 500+ contractors & small business owners who were done losing to the competition
                </motion.div>
            </div>

            {/* Subtle light rays effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%-50%)] bg-gradient-to-b from-blue-400 via-transparent to-transparent"
                    style={{ transform: 'translateX(-100px)' }}
                />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%-50%)] bg-gradient-to-b from-blue-400 via-transparent to-transparent"
                    style={{ transform: 'translateX(100px)' }}
                />
            </div>
        </div>
    );
};

export default MinimalistHero;