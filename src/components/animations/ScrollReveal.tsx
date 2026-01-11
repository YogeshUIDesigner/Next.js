'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getInitialPosition = () => {
        const distance = isMobile ? 30 : 60;
        switch (direction) {
            case 'up':
                return { y: distance };
            case 'down':
                return { y: -distance };
            case 'left':
                return { x: distance };
            case 'right':
                return { x: -distance };
            case 'none':
                return {};
            default:
                return { y: distance };
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
            viewport={{ once, margin: isMobile ? '-40px' : '-80px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
