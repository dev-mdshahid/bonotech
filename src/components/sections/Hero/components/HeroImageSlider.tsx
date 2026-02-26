import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { HeroImage } from '../Hero.types'

interface HeroImageSliderProps {
    images: HeroImage[]
    /** Duration in ms each slide is visible */
    slideDuration?: number
}

export function HeroImageSlider({ images, slideDuration = 4000 }: HeroImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward
    const timerRef = useRef<ReturnType<typeof setInterval>>(null)

    const goToNext = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const goToSlide = useCallback((index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }, [currentIndex])

    useEffect(() => {
        if (images.length <= 1) return

        timerRef.current = setInterval(goToNext, slideDuration)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [goToNext, slideDuration, images.length])

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? '100%' : '-100%',
        }),
        center: {
            x: 0,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? '-100%' : '100%',
        }),
    }

    return (
        <div className="relative w-full lg:w-[600px] h-[420px] lg:h-[660px] overflow-hidden flex-shrink-0 pointer-events-auto rounded-[64px]">
            <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="absolute inset-0 w-full h-full object-cover rounded-[64px]"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`transition-(--transition-base) h-2 rounded-full ${
                            index === currentIndex
                                ? 'w-6 bg-white/90'
                                : 'w-2 bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
