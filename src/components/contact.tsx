'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, User, Building2, MessageSquare, ArrowRight } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
    });

    const [focused, setFocused] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                business: '',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="relative min-h-screen w-full bg-black py-24 overflow-hidden flex items-center">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-block px-4 py-2 bg-blue-600 rounded-full">
                            <span className="text-white text-sm font-semibold">
                                Stop Losing Customers
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            How much money are you{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                losing
                            </span>
                            {' '}right now?
                        </h2>

                        {/* Subheadline */}
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Every day without a professional website is another day your competitors are stealing your customers. Fill out the form and let's fix this before you lose another deal.
                        </p>

                        {/* Benefits list */}
                        <div className="space-y-4 pt-4">
                            {[
                                'Free consultation - no BS sales pitch',
                                'Get a custom quote in 24 hours',
                                'See exactly how we\'ll dominate your market',
                                'Launch in 7-14 days, not 6 months'
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-3 h-3 text-blue-400" />
                                    </div>
                                    <span className="text-gray-300">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Trust indicator */}
                        <div className="pt-8 border-t border-gray-800">
                            <p className="text-sm text-gray-500">
                                Join 500+ contractors and small business owners who stopped watching their competitors win
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                                        <Send className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white">Get Your Free Quote</h3>
                                        <p className="text-gray-400 text-sm mt-2">Takes 60 seconds. No credit card needed.</p>
                                    </div>

                                    {/* Name field */}
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('name')}
                                                onBlur={() => setFocused(null)}
                                                className={`w-full bg-gray-900/50 border ${
                                                    focused === 'name' ? 'border-blue-500' : 'border-gray-700'
                                                } rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                                                placeholder="John Smith"
                                            />
                                        </div>
                                    </div>

                                    {/* Email field */}
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('email')}
                                                onBlur={() => setFocused(null)}
                                                className={`w-full bg-gray-900/50 border ${
                                                    focused === 'email' ? 'border-blue-500' : 'border-gray-700'
                                                } rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone field */}
                                    <div className="relative">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                                            Phone
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('phone')}
                                                onBlur={() => setFocused(null)}
                                                className={`w-full bg-gray-900/50 border ${
                                                    focused === 'phone' ? 'border-blue-500' : 'border-gray-700'
                                                } rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    {/* Business field */}
                                    <div className="relative">
                                        <label htmlFor="business" className="block text-sm font-medium text-gray-400 mb-2">
                                            Business Name *
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                id="business"
                                                name="business"
                                                required
                                                value={formData.business}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('business')}
                                                onBlur={() => setFocused(null)}
                                                className={`w-full bg-gray-900/50 border ${
                                                    focused === 'business' ? 'border-blue-500' : 'border-gray-700'
                                                } rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                                                placeholder="Smith Plumbing Co."
                                            />
                                        </div>
                                    </div>

                                    {/* Message field */}
                                    <div className="relative">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                            Tell us about your needs
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocused('message')}
                                                onBlur={() => setFocused(null)}
                                                className={`w-full bg-gray-900/50 border ${
                                                    focused === 'message' ? 'border-blue-500' : 'border-gray-700'
                                                } rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                                                placeholder="I need a website that actually converts customers..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                                            isSubmitting
                                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                                : 'bg-white text-black hover:bg-gray-100'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Get My Free Quote Now'
                                        )}
                                    </motion.button>

                                    {/* Privacy note */}
                                    <p className="text-xs text-gray-500 text-center">
                                        We respect your privacy. No spam, ever. Unsubscribe anytime.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;