'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ValueProp = () => {
    return (
        <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-center leading-tight text-white"
                >
                    The cutting edge of{' '}
                    <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" initial={{color: "#FFF"}} whileInView={{color: "#FFFFFF00"}} viewport={{once: true}} transition={{delay: 1/2}}>
                        web design
                    </motion.span>
                    {' '}built to{' '}
                    <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" initial={{color: "#FFF"}} whileInView={{color: "#FFFFFF00"}} viewport={{once: true}} transition={{delay: 1}}>
                        rank on Google
                    </motion.span>
                    {' '}and <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" initial={{color: "#FFF"}} whileInView={{color: "#FFFFFF00"}} viewport={{once: true}} transition={{delay: 1.5}}>convert visitors</motion.span> into paying customers
                </motion.h2>
            </div>
        </section>
    );
};

export default ValueProp;