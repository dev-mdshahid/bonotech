import { Fragment, useState, useEffect } from 'react'
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



export function Projects({ className }: ProjectsProps) {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    /** Px from viewport top where the first card sticks */
const STICKY_TOP = isDesktop ? 80 : 10
/** Px vertical offset between each stacked card */
const STACK_OFFSET = 40
/** Degrees to rotate each card after the first */
const CARD_ROTATION = 2

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className={cn(
                'relative w-full bg-surface-neutral',
                className
            )}
        >
            <div className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) pt-28">
                {/* Section Title — "Projects" with gradient */}
                <div className="relative flex flex-col items-center select-none mb-10">
                    <h2
                        id="projects-heading"
                        className="font-body font-normal text-center text-[clamp(80px,14vw,181.9px)] leading-[0.8] tracking-normal bg-[linear-gradient(180deg,#8269cf81_0%,transparent_100%)] bg-clip-text text-transparent"
                    >
                        Projects
                    </h2>
                </div>

                {/* ─── Stacking Cards Container ───
                     IMPORTANT: All sticky cards MUST be direct children of
                     this single container (via Fragment). If they are wrapped
                     in individual parent divs, sticky breaks because each
                     card can only stick within its own parent's bounds. */}
                <div className="mt-16 pb-28">
                    {PROJECTS.map((project, index) => (
                        <Fragment key={project.id}>
                            {/* Sticky project card */}
                            <div
                                className="flex justify-center sticky"
                                style={{
                                    top: `${STICKY_TOP + index * STACK_OFFSET}px`,
                                    zIndex: index + 1,
                                    transform: index > 0 && isDesktop
                                        ? `rotate(${CARD_ROTATION}deg)`
                                        : 'none',
                                }}
                            >
                                <ProjectCard project={project} />
                            </div>

                            {/* Scroll spacer — creates room for the next card
                                to scroll up and stack. Not rendered after the
                                last card. */}
                            {index < PROJECTS.length - 1 && (
                                <div
                                    className="h-[20vh]"
                                    aria-hidden="true"
                                />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}
