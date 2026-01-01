'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    variant?: 'default' | 'gradient' | 'bordered' | 'glow';
    hoverEffect?: boolean;
    className?: string;
}

export default function GlassCard({
    children,
    variant = 'default',
    hoverEffect = true,
    className = '',
    ...props
}: GlassCardProps) {
    const baseStyles = `
    relative rounded-2xl overflow-hidden
    transition-all duration-500 ease-out
  `;

    const variants = {
        default: `
      bg-gradient-to-br from-white/[0.08] to-white/[0.02]
      backdrop-blur-xl border border-white/[0.08]
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    `,
        gradient: `
      bg-gradient-to-br from-accent-blue/10 via-accent-cyan/5 to-accent-green/10
      backdrop-blur-xl border border-white/[0.1]
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    `,
        bordered: `
      bg-gradient-to-br from-white/[0.05] to-transparent
      backdrop-blur-xl
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    `,
        glow: `
      bg-gradient-to-br from-white/[0.08] to-white/[0.02]
      backdrop-blur-xl border border-accent-blue/20
      shadow-[0_0_30px_rgba(59,130,246,0.15),0_8px_32px_rgba(0,0,0,0.3)]
    `,
    };

    const hoverStyles = hoverEffect
        ? `
        hover:border-white/20
        hover:shadow-[0_0_40px_rgba(59,130,246,0.2),0_20px_60px_rgba(0,0,0,0.4)]
        hover:translate-y-[-4px]
      `
        : '';

    return (
        <motion.div
            className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            {...props}
        >
            {/* Animated border for bordered variant */}
            {variant === 'bordered' && (
                <motion.div
                    className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green animate-gradient bg-[length:200%_200%]" />
                    <div className="absolute inset-[1px] rounded-2xl bg-primary" />
                </motion.div>
            )}

            {/* Glow effect overlay */}
            {variant === 'glow' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Shine effect on hover */}
            {hoverEffect && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                    whileHover={{ translateX: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
            )}
        </motion.div>
    );
}
