import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { ServiceCard } from '../WhatWeDo.types'

interface ServiceCardItemProps {
    card: ServiceCard
}

export function ServiceCardItem({ card }: ServiceCardItemProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative w-[296px] h-[172px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect behind card — absolute so it doesn't affect layout */}
            <div
                className={cn(
                    'absolute -inset-[20px] rounded-[48px] transition-opacity duration-500 pointer-events-none',
                    isHovered ? 'opacity-100' : 'opacity-50'
                )}
                style={{
                    background: card.glowColor,
                    filter: 'blur(70px)',
                }}
                aria-hidden="true"
            />

            {/* Card */}
            <div
                className={cn(
                    'relative w-full h-full rounded-[48px] p-[32px] flex flex-col justify-between overflow-hidden cursor-pointer bg-[#243240] z-100',
                    'transition-all duration-500 ease-out'
                )}
            >
                {/* Hover gradient overlay */}
                <div
                    className="absolute inset-0 rounded-[48px] transition-opacity duration-500 ease-out"
                    style={{
                        background: `radial-gradient(ellipse at center, ${card.hoverColor} 0%, #243240 150%)`,
                        opacity: isHovered ? 1 : 0,
                    }}
                    aria-hidden="true"
                />

                {/* Icon */}
                <div className="relative z-10">
                    <img
                        src={card.icon}
                        alt=""
                        className="w-[32px] h-[32px]"
                        aria-hidden="true"
                    />
                </div>

                {/* Title */}
                <h3
                    className={cn(
                        'relative z-10 font-display font-bold text-[20px] leading-[140%] text-content-white whitespace-pre-line'
                    )}
                >
                    {card.title}
                </h3>
            </div>
        </div>
    )
}
