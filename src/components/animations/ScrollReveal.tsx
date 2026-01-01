'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}: ScrollRevealProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: 60 };
            case 'down':
                return { y: -60 };
            case 'left':
                return { x: 60 };
            case 'right':
                return { x: -60 };
            case 'none':
                return {};
            default:
                return { y: 60 };
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-80px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
