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
            className="relative w-full md:w-[296px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect behind card — absolute so it doesn't affect layout */}
            <div
                className={cn(
                    'absolute -inset-5 rounded-[48px] transition-opacity duration-500 pointer-events-none blur-[70px]',
                    isHovered ? 'opacity-100' : 'opacity-50'
                )}
                style={{ background: card.glowColor }}
                aria-hidden="true"
            />

            {/* Card */}
            <div
                className="relative w-full min-h-[140px] md:min-h-[172px] rounded-[48px] p-5 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer bg-[#243240] z-100 transition-all duration-500 ease-out"
            >
                {/* Hover gradient overlay */}
                <div
                    className={cn(
                        'absolute inset-0 rounded-[48px] transition-opacity duration-500 ease-out',
                        isHovered ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{
                        background: `radial-gradient(ellipse at center, ${card.hoverColor} 0%, #243240 150%)`,
                    }}
                    aria-hidden="true"
                />

                {/* Icon */}
                <div className="relative z-10">
                    <img
                        src={card.icon}
                        alt=""
                        className="w-8 h-8"
                        aria-hidden="true"
                    />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-display font-bold text-base md:text-xl leading-[140%] text-content-white whitespace-pre-line">
                    {card.title}
                </h3>
            </div>
        </div>
    )
}
