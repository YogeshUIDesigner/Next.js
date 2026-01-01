'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface CounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}

export default function Counter({
    end,
    duration = 2,
    prefix = '',
    suffix = '',
    decimals = 0,
    className = '',
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) => {
        return `${prefix}${current.toFixed(decimals)}${suffix}`;
    });

    useEffect(() => {
        if (isInView && !hasAnimated) {
            spring.set(end);
            setHasAnimated(true);
        }
    }, [isInView, end, spring, hasAnimated]);

    return (
        <motion.span
            ref={ref}
            className={`tabular-nums ${className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.span>{display}</motion.span>
        </motion.span>
    );
}
