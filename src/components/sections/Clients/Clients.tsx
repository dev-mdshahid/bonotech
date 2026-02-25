import { cn } from '@/lib/utils'
import type { ClientsProps } from './Clients.types'

import verticalHorizonLogo from '@/assets/brands/vertical-horizon.png'
import siddiquisLogo from '@/assets/brands/siddiquis.png'
import edbridgeLogo from '@/assets/brands/edbridge.png'
import itzLogo from '@/assets/brands/itz.png'
import mermaidLogo from '@/assets/brands/mermaid.png'
import electraLogo from '@/assets/brands/electra.png'

const CLIENT_LOGOS = [
    { src: verticalHorizonLogo, alt: 'Vertical Horizon' },
    { src: siddiquisLogo, alt: "Siddiqui's International School" },
    { src: edbridgeLogo, alt: 'Edbridge' },
    { src: itzLogo, alt: 'ITZ Academic Care' },
    { src: mermaidLogo, alt: 'Mermaid Beach Resort' },
    { src: electraLogo, alt: 'Electra' },
]

// Duplicate logos enough times to ensure it covers large screens seamlessly
const LOGO_SET = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS]

export function Clients({ className }: ClientsProps) {
    return (
        <section
            id="clients"
            aria-labelledby="clients-heading"
            className={cn(
                'relative w-full overflow-hidden bg-surface-white py-[48px]',
                className
            )}
        >
            <h2 id="clients-heading" className="sr-only">
                Our Clients
            </h2>

            {/* 
                Marquee Container 
                - w-max to hold the full width of both duplicated sets
                - hover:[animation-play-state:paused] to stop animation on hover 
            */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {/* Render the set twice. Animate translates to -50% to make it seamless */}
                {[...Array(2)].map((_, setIndex) => (
                    <div
                        key={setIndex}
                        className="flex shrink-0 items-center gap-[40px] md:gap-[64px] lg:gap-[80px] pr-[40px] md:pr-[64px] lg:pr-[80px]"
                    >
                        {LOGO_SET.map((logo, i) => (
                            <div key={`${setIndex}-${i}`} className="flex justify-center shrink-0">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-[24px] md:h-[32px] lg:h-[40px] w-auto object-contain transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
