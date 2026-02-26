import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { FAQProps, FAQItem } from './FAQ.types'
import { FAQCard } from './components/FAQCard'

const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'What factors accelerate the development timeline?',
        answer: 'Clear project requirements, timely feedback, well-defined scope, and active collaboration from stakeholders all contribute to accelerating the development timeline. Our agile methodology ensures rapid iteration and delivery.',
    },
    {
        question: 'Can you describe your ideal client?',
        answer: 'We collaborate with visionary founders and companies that possess innovative ideas, practical execution plans, and a strong ambition to dominate their markets. Our ideal client sees us as a long-term strategic ally committed to shared success, rather than just a temporary vendor.',
    },
    {
        question: 'Who fits your ideal client profile?',
        answer: 'Startups and established businesses that value quality engineering, transparent communication, and long-term partnerships. We work best with teams who are passionate about their product and ready to invest in building something exceptional.',
    },
    {
        question: 'Given your high quality, how is your pricing structured?',
        answer: 'Our pricing reflects the premium quality we deliver while remaining competitive. We offer flexible engagement models including fixed-price projects, time-and-materials, and dedicated team arrangements to suit different budgets and project scopes.',
    },
    {
        question: 'How do you structure pricing for your high-quality services?',
        answer: 'We provide transparent pricing based on project complexity, timeline, and resource requirements. Our proposals include detailed breakdowns so you understand exactly what you are investing in. We believe in fair pricing that delivers exceptional ROI.',
    },
]

export function FAQ({ className }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    // Split items into two independent columns
    const leftColumn = FAQ_ITEMS.filter((_, i) => i % 2 === 0)
    const rightColumn = FAQ_ITEMS.filter((_, i) => i % 2 !== 0)

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className={cn(
                'relative w-full overflow-hidden bg-surface-accent',
                className
            )}
        >
            {/* Background gradient overlay — same as WhatWeDo */}
            <div
                className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(180deg,#6DA9EE_0%,#31C7BF_100%)]"
                aria-hidden="true"
            />

            {/* Content */}
            <div
                className="relative z-10 mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex flex-col items-center py-28"
            >
                {/* Top Pill Badge — same as WhatWeDo */}
                <div className="flex items-center gap-2 mb-3 py-1.5 px-4 rounded-full bg-[#2A3946] border-[0.5px] border-[#374B5C]">
                    {/* Orange dot */}
                    <div
                        className="w-2 h-2 rounded-full shrink-0 bg-[#FFAB50]"
                        aria-hidden="true"
                    />
                    <span className="font-display font-medium text-[13px] leading-[140%] text-content-white">
                        FAQ
                    </span>
                </div>

                {/* Heading */}
                <h2
                    id="faq-heading"
                    className="font-display font-semibold text-[32px] leading-[125%] text-center text-content-white mb-10"
                >
                    Your Questions, Answered
                </h2>

                {/* FAQ Cards — Two independent columns */}
                <div className="w-full flex flex-col lg:flex-row lg:items-start gap-3">
                    {/* Left column */}
                    <div className="w-full lg:w-[calc(50%-6px)] flex flex-col gap-3 min-w-0">
                        {leftColumn.map((item) => {
                            const originalIndex = FAQ_ITEMS.indexOf(item)
                            return (
                                <FAQCard
                                    key={item.question}
                                    item={item}
                                    isOpen={openIndex === originalIndex}
                                    onToggle={() => handleToggle(originalIndex)}
                                />
                            )
                        })}
                    </div>

                    {/* Right column */}
                    <div className="w-full lg:w-[calc(50%-6px)] flex flex-col gap-3 min-w-0">
                        {rightColumn.map((item) => {
                            const originalIndex = FAQ_ITEMS.indexOf(item)
                            return (
                                <FAQCard
                                    key={item.question}
                                    item={item}
                                    isOpen={openIndex === originalIndex}
                                    onToggle={() => handleToggle(originalIndex)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
