import { cn } from '@/lib/utils'
import type { WhatWeDoProps, ServiceCard } from './WhatWeDo.types'
import { ServiceCardItem } from './components/ServiceCardItem'

import appsRemoveIcon from '@/assets/icons/apps-remove.svg'
import layersIcon from '@/assets/icons/layers.svg'
import inputCursorMoveIcon from '@/assets/icons/input-cursor-move.svg'
import compassIcon from '@/assets/icons/compass.svg'
import likeIcon from '@/assets/icons/like.svg'
import callUserIcon from '@/assets/icons/call-user.svg'

const SERVICE_CARDS: ServiceCard[] = [
    {
        icon: appsRemoveIcon,
        title: 'Accelerated MVP\nDevelopment',
        hoverColor: '#1A85AB',
        glowColor: '#7F8FF566',
    },
    {
        icon: layersIcon,
        title: 'Mobile Application\nDevelopment',
        hoverColor: '#DD6CFA',
        glowColor: '#B87FF566',
    },
    {
        icon: inputCursorMoveIcon,
        title: 'Web Application\nDevelopment',
        hoverColor: '#C9447D',
        glowColor: '#F57FCE66',
    },
    {
        icon: compassIcon,
        title: 'Website Design &\nDevelopment',
        hoverColor: '#73FFCC',
        glowColor: '#F57F8166',
    },
    {
        icon: likeIcon,
        title: 'User Experience/\nInterface Design',
        hoverColor: '#F8B851',
        glowColor: '#F5C87F66',
    },
    {
        icon: callUserIcon,
        title: 'Custom AI\nSolutions',
        hoverColor: '#516DF8',
        glowColor: '#F5C87F66',
    },
]

export function WhatWeDo({ className }: WhatWeDoProps) {
    return (
        <section
            id="what-we-do"
            aria-labelledby="what-we-do-heading"
            className={cn(
                'relative w-full overflow-hidden',
                className
            )}
            style={{ background: 'var(--surface-accent)' }}
        >
            {/* Background gradient overlay */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    background: 'linear-gradient(180deg, #6DA9EE 0%, #31C7BF 100%)',
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div
                className="relative z-10 mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex flex-col items-center"
                style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
                {/* Top Pill Badge */}
                <div
                    className="flex items-center gap-[8px] mb-[12px]"
                    style={{
                        paddingTop: '6px',
                        paddingRight: '16px',
                        paddingBottom: '6px',
                        paddingLeft: '16px',
                        borderRadius: '999px',
                        background: '#2A3946',
                        border: '0.5px solid #374B5C',
                    }}
                >
                    {/* Orange dot */}
                    <div
                        className="w-[8px] h-[8px] rounded-full shrink-0"
                        style={{ background: '#FFAB50' }}
                        aria-hidden="true"
                    />
                    <span className="font-display font-medium text-[13px] leading-[140%] text-content-white">
                        What We Do
                    </span>
                </div>

                {/* Heading */}
                <h2
                    id="what-we-do-heading"
                    className="font-display font-semibold text-[32px] leading-[125%] text-center text-content-white mb-10"
                >
                    Blazing Fast Execution
                    <br />
                    <span style={{ color: '#FFAC4D' }}>Unbeatable Prices</span>
                </h2>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-[10px] justify-items-center">
                    {SERVICE_CARDS.map((card) => (
                        <ServiceCardItem key={card.title} card={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}
