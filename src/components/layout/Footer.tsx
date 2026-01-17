'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const footerLinks = {
    company: [
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
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
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/yogesh-mahor-826507259/',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 18">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/graphicsdesigner98/',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 18">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
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
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData();
            formData.append('access_key', '59ee0ef6-110f-4439-92c8-936ce8636abf');
            formData.append('email', email);
            formData.append('subject', 'New Newsletter Subscription');
            formData.append('message', `New subscriber: ${email}`);
            formData.append('from_name', 'Yogesh Designer Portfolio');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setEmail('');
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            setStatus('error');
        }
    };

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
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Stay Updated
                                </h3>
                                <p className="text-gray-400">
                                    Get the latest design news and project updates delivered to your inbox.
                                </p>
                            </div>
                            <div className="flex flex-col w-full md:w-auto gap-3">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full md:w-80 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 transition-colors"
                                        disabled={status === 'loading' || status === 'success'}
                                    />
                                    <motion.button
                                        type="submit"
                                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-xl whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={status === 'loading' || status === 'success'}
                                    >
                                        {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                                    </motion.button>
                                </div>
                                {status === 'success' && (
                                    <p className="text-accent-green text-sm ml-1">Thanks for subscribing!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm ml-1">Something went wrong. Please try again.</p>
                                )}
                            </div>
                        </form>
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
                                    target="_blank"
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

                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © 2026 yogeshdesigner.in All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-gray-500 text-sm">
                                Designed with <span className="text-red-500">❤️</span> in India
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
