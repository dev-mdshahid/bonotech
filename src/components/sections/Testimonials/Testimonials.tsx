import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TestimonialsProps, TestimonialData } from './Testimonials.types'

const TESTIMONIALS: TestimonialData[] = [
    {
        id: 'testimonial-1',
        quote:
            'Gustav is a user-friendly, visually appealing all-in-one cloud PMS. Intuitive, time-saving, and reliable—with excellent reports and friendly support for effortless hotel management.',
        authorName: 'MD. Shohiduzzaman Shakil',
        authorRole: 'Generalist-Human Resources, Mermaid Beach Resort',
        backgroundColor: '#8269CF',
    },
    {
        id: 'testimonial-2',
        quote:
            'The team delivered an outstanding product that exceeded our expectations. Their attention to detail and commitment to quality made the entire process seamless.',
        authorName: 'Sarah Chen',
        authorRole: 'CEO, Lumina Digital',
        backgroundColor: '#131314',
    },
    {
        id: 'testimonial-3',
        quote:
            'Working with Bonotech was a game-changer for our business. They transformed our vision into a beautiful, functional application that our users love.',
        authorName: 'James Wilson',
        authorRole: 'Founder, BrightPath',
        backgroundColor: '#FFAB51',
    },
]

/** Card dimensions from Figma */
const CARD_WIDTH = 1200
const CARD_HEIGHT = 397
const CARD_PADDING = 64
const CARD_RADIUS = 24
const CARD_GAP = 48

/** Stack visual config — per-layer overrides for a natural deck look */
const STACK_LAYERS = [
    // layer 0 = front card (no transform, handled by AnimatePresence)
    { rotation: 0, scale: 1, yOffset: 0, xOffset: 0 },
    // layer 1 = first card behind (dark card peeking out)
    { rotation: 1, scale: 0.92, yOffset: -60, xOffset: 0 },
    // layer 2 = second card behind (orange card peeking out further)
    { rotation: -1, scale: 0.87, yOffset: -120, xOffset: 20 },
]
const STACK_TOP_OFFSET = 60.31 // px — top offset from Figma

function QuoteIcon() {
    return (
        <svg
            width="56"
            height="42"
            viewBox="0 0 56 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M0 42V25.2C0 20.72 0.77 16.52 2.31 12.6C3.92 8.68 6.58 4.76 10.29 0.84L18.9 5.88C16.38 8.82 14.56 11.62 13.44 14.28C12.39 16.87 11.76 19.6 11.55 22.47H22.68V42H0ZM33.32 42V25.2C33.32 20.72 34.09 16.52 35.63 12.6C37.24 8.68 39.9 4.76 43.61 0.84L52.22 5.88C49.7 8.82 47.88 11.62 46.76 14.28C45.71 16.87 45.08 19.6 44.87 22.47H56V42H33.32Z"
                fill="currentColor"
                fillOpacity="0.3"
            />
        </svg>
    )
}

/**
 * Returns the text color for a given card background.
 * Dark backgrounds → white text, light backgrounds → dark text.
 */
function getTextColor(bg: string): { primary: string; secondary: string } {
    if (bg === '#131314') {
        return { primary: '#FFFFFF', secondary: 'rgba(255,255,255,0.6)' }
    }
    if (bg === '#FFAB51') {
        return { primary: '#131314', secondary: 'rgba(19,19,20,0.6)' }
    }
    // Default purple card
    return { primary: '#FFFFFF', secondary: 'rgba(255,255,255,0.6)' }
}

interface TestimonialCardProps {
    testimonial: TestimonialData
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const colors = getTextColor(testimonial.backgroundColor)

    return (
        <div
            className="w-full flex flex-col justify-between"
            style={{
                maxWidth: `${CARD_WIDTH}px`,
                minHeight: `${CARD_HEIGHT}px`,
                borderRadius: `${CARD_RADIUS}px`,
                padding: `${CARD_PADDING}px`,
                backgroundColor: testimonial.backgroundColor,
                color: colors.primary,
                gap: `${CARD_GAP}px`,
            }}
        >
            {/* Quote icon */}
            <QuoteIcon />

            {/* Quote text */}
            <p
                className="font-body"
                style={{
                    fontWeight: 600,
                    fontSize: '28px',
                    lineHeight: '100%',
                    letterSpacing: '-0.5%',
                }}
            >
                {testimonial.quote}
            </p>

            {/* Author */}
            <div className="flex flex-col" style={{ gap: '4px' }}>
                <span
                    className="font-body"
                    style={{
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '140%',
                        color: colors.primary,
                    }}
                >
                    {testimonial.authorName}
                </span>
                <span
                    className="font-body"
                    style={{
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '140%',
                        color: colors.secondary,
                    }}
                >
                    {testimonial.authorRole}
                </span>
            </div>
        </div>
    )
}

export function Testimonials({ className }: TestimonialsProps) {
    // The order of cards in the stack (index 0 = front / top)
    const [cardOrder, setCardOrder] = useState<number[]>(
        TESTIMONIALS.map((_, i) => i)
    )
    const [exitDirection, setExitDirection] = useState<'left' | 'right'>('left')
    const [isAnimating, setIsAnimating] = useState(false)

    const handleNext = useCallback(() => {
        if (isAnimating) return
        setExitDirection('left')
        setIsAnimating(true)
    }, [isAnimating])

    const handlePrev = useCallback(() => {
        if (isAnimating) return
        setExitDirection('right')
        setIsAnimating(true)
    }, [isAnimating])

    const handleExitComplete = useCallback(() => {
        setCardOrder((prev) => {
            if (exitDirection === 'left') {
                // Move front card to back
                const [front, ...rest] = prev
                return [...rest, front]
            } else {
                // Move back card to front
                const last = prev[prev.length - 1]
                return [last, ...prev.slice(0, prev.length - 1)]
            }
        })
        setIsAnimating(false)
    }, [exitDirection])

    // Build the visible stack (reversed so the first in array renders last = on top)
    const stackCards = [...cardOrder].reverse()

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className={cn('relative w-full bg-surface-neutral', className)}
        >
            <div
                className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex flex-col items-center"
                style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
                {/* Section Title — "Testimonial" with gradient matching Projects */}
                <div className="relative flex flex-col items-center select-none mb-10">
                    <h2
                        id="testimonials-heading"
                        className="font-body font-normal text-center"
                        style={{
                            fontSize: 'clamp(80px, 14vw, 181.9px)',
                            lineHeight: '80%',
                            letterSpacing: '0%',
                            background:
                                'linear-gradient(180deg, #8269cf81 0%, transparent 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Testimonial
                    </h2>
                </div>

                {/* ─── Stacked Cards ─── */}
                <div
                    className="relative w-full flex justify-center"
                    style={{
                        marginTop: `${STACK_TOP_OFFSET}px`,
                        height: `${CARD_HEIGHT + 40}px`, // extra room for the rotated back cards peeking out
                    }}
                >
                    {/* Background / stacked cards (static, always visible) */}
                    {stackCards.map((cardIndex, stackPosition) => {
                        const totalVisible = stackCards.length
                        const zIndex = stackPosition + 1
                        const distanceFromFront =
                            totalVisible - 1 - stackPosition

                        // Skip the front card — it's handled by AnimatePresence below
                        if (distanceFromFront === 0) return null

                        // Use per-layer config (clamp to last layer if more cards than layers)
                        const layerIndex = Math.min(
                            distanceFromFront,
                            STACK_LAYERS.length - 1
                        )
                        const layer = STACK_LAYERS[layerIndex]

                        return (
                            <div
                                key={`bg-${TESTIMONIALS[cardIndex].id}`}
                                className="absolute flex justify-center"
                                style={{
                                    width: '100%',
                                    maxWidth: `${CARD_WIDTH}px`,
                                    zIndex,
                                    transform: `rotate(${layer.rotation}deg) scale(${layer.scale}) translateY(${layer.yOffset}px) translateX(${layer.xOffset}px)`,
                                    transformOrigin: 'bottom center',
                                }}
                            >
                                <TestimonialCard
                                    testimonial={TESTIMONIALS[cardIndex]}
                                />
                            </div>
                        )
                    })}

                    {/* Front card (animated) */}
                    <AnimatePresence
                        mode="popLayout"
                        onExitComplete={handleExitComplete}
                    >
                        <motion.div
                            key={TESTIMONIALS[cardOrder[0]].id}
                            className="absolute flex justify-center"
                            style={{
                                width: '100%',
                                maxWidth: `${CARD_WIDTH}px`,
                                zIndex: stackCards.length + 1,
                            }}
                            initial={{
                                x: exitDirection === 'left' ? 800 : -800,
                                rotate: exitDirection === 'left' ? 15 : -15,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                rotate: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                },
                            }}
                            exit={{
                                x: exitDirection === 'left' ? -1200 : 1200,
                                rotate: exitDirection === 'left' ? -20 : 20,
                                opacity: 0,
                                transition: {
                                    duration: 0.45,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                            }}
                        >
                            <TestimonialCard
                                testimonial={TESTIMONIALS[cardOrder[0]]}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ─── Navigation Arrows ─── */}
                <div
                    className="flex items-center justify-center"
                    style={{ gap: '12px', marginTop: '32px' }}
                >
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={isAnimating}
                        aria-label="Previous testimonial"
                        className="flex items-center justify-center rounded-full border border-border-primary bg-surface-neutral hover:bg-surface-primary transition-(--transition-base) disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        style={{
                            width: '48px',
                            height: '48px',
                        }}
                    >
                        <ChevronLeft size={20} strokeWidth={2} />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={isAnimating}
                        aria-label="Next testimonial"
                        className="flex items-center justify-center rounded-full border border-border-primary bg-surface-neutral hover:bg-surface-primary transition-(--transition-base) disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        style={{
                            width: '48px',
                            height: '48px',
                        }}
                    >
                        <ChevronRight size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </section>
    )
}
