import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import type { ProjectsProps, ProjectCardData } from './Projects.types'
import { ProjectCard } from './components/ProjectCard'

// Asset imports
import gustavMockup from '@/assets/projects/gustav-mockup.png'
import gustavIcon from '@/assets/projects/gustav-icon.png'
import gustavLogo from '@/assets/projects/gustav-logo.png'
import olmoMockup from '@/assets/projects/olmo-mockup.png'
import olmoIcon from '@/assets/projects/olmo-icon.png'
import olmoLogo from '@/assets/projects/olmo-logo.svg'

const PROJECTS: ProjectCardData[] = [
    {
        id: 'gustav',
        category: 'Travel & Tourism',
        title: 'Gustav, Hotel Companion Mobile App',
        subtitle:
            'This app is your travel companion, offering everything from booking to check-out. Enjoy room service, concierge help, and local tips for a smooth stay.',
        backgroundColor: '#E9E5E1',
        borderColor: '#D2CBC5',
        buttonColor: '#C0A080',
        mockupSrc: gustavMockup,
        iconSrc: gustavIcon,
        logoSrc: gustavLogo,
        logoAlt: 'Gustav logo',
        playStoreHref: '#',
        appStoreHref: '#',
        learnMoreHref: '#',
        opacity: 90,
    },
    {
        id: 'olmo',
        category: 'Real Estate',
        title: 'Olmo, Property Management Mobile App',
        subtitle:
            'Olmo transforms real estate management by streamlining tenant communication, maintenance, and financial tracking. Making property management easier for all and gives new experience.',
        backgroundColor: '#D2D4D7',
        borderColor: '#A6A9AD',
        buttonColor: '#2D343C',
        mockupSrc: olmoMockup,
        iconSrc: olmoIcon,
        logoSrc: olmoLogo,
        logoAlt: 'Olmo logo',
        playStoreHref: '#',
        appStoreHref: '#',
        learnMoreHref: '#',
        opacity: 20,
    },
]

/** Fixed height of the site navbar (px) */
const NAVBAR_H = 80
/** Degrees to rotate stacked cards (alternates ±) */
const CARD_ROTATION = 2

export function Projects({ className }: ProjectsProps) {
    const runwayRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const firstCardRef = useRef<HTMLDivElement>(null)
    const cardEls = useRef<(HTMLDivElement | null)[]>([])
    const [isDesktop, setIsDesktop] = useState(false)
    const [dims, setDims] = useState({ titleH: 200, cardH: 600 })

    /* ── Measure title + card on mount / resize ── */
    useEffect(() => {
        const measure = () => {
            setIsDesktop(window.innerWidth >= 768)
            setDims({
                titleH: titleRef.current?.offsetHeight || 200,
                cardH: firstCardRef.current?.offsetHeight || 600,
            })
        }
        measure()
        requestAnimationFrame(measure) // re‑measure after first paint
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    const { titleH, cardH } = dims

    /* Visible height of the card-stacking viewport
       (all cards stack in the same position, no vertical offset) */
    const cardAreaH = cardH

    /* Scroll distance allocated for each card to animate in */
    const scrollPerCard = Math.max(cardH * 0.5, 300)

    /* Total scroll needed for cards 2…N to enter */
    const totalCardScroll = scrollPerCard * (PROJECTS.length - 1)

    /* The runway is taller than the sticky wrapper so the wrapper
       stays pinned exactly until the last card finishes animating,
       then everything scrolls away as one block. */
    const stickyContentH = titleH + cardAreaH
    const runwayH = stickyContentH + totalCardScroll

    /* ── Scroll-driven card animation ── */
    useEffect(() => {
        let rafId: number

        const update = () => {
            if (!runwayRef.current) return
            const rect = runwayRef.current.getBoundingClientRect()

            /* progress = 0 → sticky wrapper just pinned
               progress = N → user scrolled N px further */
            const progress = Math.max(0, NAVBAR_H - rect.top)

            cardEls.current.forEach((el, i) => {
                if (!el) return

                /* First card is always visible at the top */
                if (i === 0) {
                    el.style.transform = 'translateY(0px)'
                    return
                }

                /* Subsequent cards slide up from below the clip area */
                const animStart = (i - 1) * scrollPerCard
                const t = Math.min(
                    1,
                    Math.max(0, (progress - animStart) / scrollPerCard)
                )

                const entryY = cardAreaH + 100 // below clip edge
                const y = entryY + (0 - entryY) * t // target Y is 0 (same position)

                /* Alternating rotation: +4°, -4°, +4°, … */
                const sign = i % 2 === 0 ? 1 : -1
                const rotation =
                    isDesktop && t >= 1 ? sign * CARD_ROTATION : 0
                el.style.transform = `translateY(${y}px) rotate(${rotation}deg)`
            })
        }

        const handleScroll = () => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(update)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // set initial positions
        return () => {
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(rafId)
        }
    }, [isDesktop, scrollPerCard, cardAreaH])

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className={cn(
                'relative w-full bg-surface-neutral pt-28 pb-28',
                className
            )}
        >
            {/* Scroll runway — oversized so the single sticky wrapper
                stays pinned for the full card-animation duration */}
            <div
                ref={runwayRef}
                className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x)"
                style={{ height: runwayH }}
            >
                {/* ─── Sticky wrapper ───
                     Pins below the navbar. Title + card viewport move
                     as a single block when the runway scrolls past. */}
                <div className="sticky" style={{ top: NAVBAR_H }}>
                    {/* Section title */}
                    <div
                        ref={titleRef}
                        className="flex flex-col items-center select-none pb-16"
                    >
                        <h2
                            id="projects-heading"
                            className="font-body font-normal text-center text-[clamp(80px,14vw,181.9px)] leading-[0.8] tracking-normal bg-[linear-gradient(180deg,#8269cf81_0%,transparent_100%)] bg-clip-text text-transparent"
                        >
                            Projects
                        </h2>
                    </div>

                    {/* Card viewport — clipPath hides cards entering from below.
                        Bottom inset is -80px so rotation corners aren't clipped,
                        but still hides cards that start 100px below this edge. */}
                    <div
                        className="relative"
                        style={{
                            height: cardAreaH,
                            clipPath: 'inset(-200px -200px -80px -200px)',
                        }}
                    >
                        {PROJECTS.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => {
                                    cardEls.current[index] = el
                                    if (index === 0)
                                        firstCardRef.current = el
                                }}
                                className="absolute inset-x-0 flex justify-center will-change-transform"
                                style={{ zIndex: index + 1 }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
