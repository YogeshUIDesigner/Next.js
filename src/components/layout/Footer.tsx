'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

const footerLinks = {
    company: [
        { href: '/about', label: 'About Us' },
        { href: '/how-it-works', label: 'How It Works' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact Us' },
    ],
    support: [
        { href: '#', label: 'Help Center' },
        { href: '/contact', label: 'Contact' },
        { href: '#', label: 'FAQ' },
    ],
};

const socialLinks = [
    {
        name: 'Twitter',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        name: 'Discord',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        name: 'Telegram',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                {/* Newsletter Section */}
                <ScrollReveal>
                    <div className="glass-card rounded-2xl p-8 md:p-12 mb-16">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Stay Updated
                                </h3>
                                <p className="text-gray-400">
                                    Get the latest news and trading insights delivered to your inbox.
                                </p>
                            </div>
                            <div className="flex w-full md:w-auto gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 md:w-80 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 transition-colors"
                                />
                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-xl whitespace-nowrap"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <ScrollReveal className="col-span-2 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">Y</span>
                                </div>
                                <span className="text-xl font-bold text-white">
                                    Yogesh<span className="text-accent-cyan">Designer</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Empowering brands with high-end UI/UX, 3D animations, and creative visual solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Company Links */}
                    <ScrollReveal delay={0.1}>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    {/* Support Links */}
                    <ScrollReveal delay={0.2}>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-cyan transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>

                {/* Bottom Bar */}
                <ScrollReveal>
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-gray-500 text-sm text-center md:text-left">
                                © 2026 yogeshdesigner.in All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <span className="text-gray-500 text-sm">
                                    Great design sets the foundation—results grow with strategy and execution.
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}
