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
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className={cn(
                'relative w-full overflow-hidden bg-surface-neutral',
                className
            )}
        >
            <div
                className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex flex-col items-center"
                style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
                {/* Section Title — "Projects" with gradient + reflection */}
                <div className="relative flex flex-col items-center select-none">
                    {/* Main title */}
                    <h2
                        id="projects-heading"
                        className="font-body font-normal text-center"
                        style={{
                            fontSize: 'clamp(80px, 14vw, 181.9px)',
                            lineHeight: '80%',
                            letterSpacing: '0%',
                            background: 'linear-gradient(180deg, #8269cf81 0%, transparent 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Projects
                    </h2>

                    {/* Reflection */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none font-body font-normal text-center"
                        style={{
                            fontSize: 'clamp(80px, 14vw, 181.9px)',
                            lineHeight: '80%',
                            letterSpacing: '0%',
                            background: 'linear-gradient(180deg, #8269CF33 0%, transparent 50%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            transform: 'scaleY(-1)',
                            marginTop: '-4px',
                            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 60%)',
                            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 60%)',
                        }}
                    >
                        Projects
                    </div>
                </div>

                {/* Project Cards */}
                <div
                    className="w-full flex flex-col items-center"
                    style={{ gap: '32px', marginTop: '64px' }}
                >
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
