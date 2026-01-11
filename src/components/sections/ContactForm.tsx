'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
    {
        icon: EnvelopeIcon,
        label: 'Email',
        value: 'yogeshoneness730@gmail.com',
        href: 'mailto:yogeshoneness730@gmail.com',
        color: 'text-accent-blue',
    },
    {
        icon: PhoneIcon,
        label: 'Phone',
        value: '+91 98707 65966',
        href: 'tel:+919870765966',
        color: 'text-accent-cyan',
    },
    {
        icon: MapPinIcon,
        label: 'Location',
        value: 'Rajasthan, India',
        href: '#',
        color: 'text-accent-green',
    },
];

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData();
            formData.append('access_key', '59ee0ef6-110f-4439-92c8-936ce8636abf');
            formData.append('name', formState.name);
            formData.append('email', formState.email);
            formData.append('phone', formState.phone);
            formData.append('subject', formState.subject);
            formData.append('message', formState.message);
            formData.append('from_name', 'Yogesh Designer Portfolio');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <ScrollReveal direction="right">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
                                Get in Touch
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Let’s Start a <br />
                                <span className="gradient-text">Project Together</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-md">
                                Have a vision you want to bring to life? Whether it's a new brand, a website,
                                or complex animations, I'm here to help you create something extraordinary.
                            </p>

                            <div className="grid gap-6">
                                {contactInfo.map((item, idx) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-accent-blue/30 transition-colors"
                                        whileHover={{ x: 10 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${item.color} group-hover:bg-white/10 transition-colors`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium mb-0.5">{item.label}</p>
                                            <p className="text-white font-semibold">{item.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal direction="left">
                        <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                            placeholder="john@example.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>

                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="+91 98707 65966"
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="Project Inquiry"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent-blue/50 transition-colors placeholder-gray-600 resize-none"
                                        placeholder="Tell me about your project..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full py-4 group flex items-center justify-center gap-2"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : status === 'success' ? (
                                        'Message Sent!'
                                    ) : status === 'error' ? (
                                        'Error! Try Again'
                                    ) : (
                                        <>
                                            Send Message
                                            <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-accent-green text-center text-sm font-medium mt-4"
                                    >
                                        Thank you! Your message has been sent successfully.
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-center text-sm font-medium mt-4"
                                    >
                                        Something went wrong. Please check your connection or try again.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
