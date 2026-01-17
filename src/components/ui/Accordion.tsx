'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionItem {
    id: string;
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    className?: string;
}

export default function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            );
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-card rounded-xl overflow-hidden"
                >
                    <motion.button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                    >
                        <h3 className="text-lg font-medium text-white group-hover:text-accent-blue transition-colors">
                            {item.question}
                        </h3>
                        <motion.span
                            animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="flex-shrink-0 ml-4"
                        >
                            <ChevronDownIcon className="w-5 h-5 text-accent-blue" />
                        </motion.span>
                    </motion.button>

                    <AnimatePresence initial={false}>
                        {openItems.includes(item.id) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <motion.div
                                    initial={{ y: -10 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-5"
                                >
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                                    <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
