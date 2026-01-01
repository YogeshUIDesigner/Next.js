'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
    once?: boolean;
}

export default function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = '',
    once = true,
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-50px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
