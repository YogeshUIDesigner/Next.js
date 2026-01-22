'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { XMarkIcon, EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

export default function HireMePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Check if the popup has already been shown in this session
        const hasShown = sessionStorage.getItem('hireMePopupShown');

        if (!hasShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hireMePopupShown', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData();
            formData.append('access_key', '59ee0ef6-110f-4439-92c8-936ce8636abf');
            formData.append('name', formState.name);
            formData.append('email', formState.email);
            formData.append('phone', formState.phone);
            formData.append('subject', 'Hire Me Inquiry (Popup)');
            formData.append('from_name', 'Yogesh Designer Portfolio');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormState({ name: '', email: '', phone: '' });
                setTimeout(() => {
                    handleClose();
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md glass-card p-8 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Hire Me</h3>
                            <p className="text-gray-400">
                                Interested in working together? Let&apos;s discuss your vision.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-12 pr-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                <div className="relative">
                                    <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        required
                                        className="w-full pl-12 pr-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Mobile Number</label>
                                <div className="relative">
                                    <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="tel"
                                        required
                                        className="w-full pl-12 pr-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="+91 98707 65966"
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full py-4 mt-4 group"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </div>
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : status === 'error' ? (
                                    'Error! Try Again'
                                ) : (
                                    'Submit Request'
                                )}
                            </Button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-accent-green text-center text-sm font-medium mt-4"
                                >
                                    Thank you! I&apos;ll get back to you soon.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
