import type { HeroProps } from './Hero.types'
import { HeroPill } from './components/HeroPill'
import { HeroButton } from './components/HeroButton'
import { BrandLogoBar } from './components/BrandLogoBar'
import { HeroImageSlider } from './components/HeroImageSlider'
import { HeroGrid } from './components/HeroGrid'

import heroBg1 from '@/assets/hero/hero-bg-1.jpg'
import heroBg2 from '@/assets/hero/hero-bg-2.jpg'
import heroBg3 from '@/assets/hero/hero-bg-3.png'
import heroBg4 from '@/assets/hero/hero-bg-4.png'
import heroBg5 from '@/assets/hero/hero-bg-5.png'
import electraLogo from '@/assets/brands/electra.png'
import dekkoLogo from '@/assets/brands/dekko.png'
import renataLogo from '@/assets/brands/renata.png'

const DEFAULT_IMAGES = [
    { src: heroBg1, alt: 'Project showcase — mobile app design' },
    { src: heroBg2, alt: 'Project showcase — payment solution' },
    { src: heroBg3, alt: 'Project showcase — cybersecurity platform' },
    { src: heroBg4, alt: 'Project showcase — enterprise dashboard' },
    { src: heroBg5, alt: 'Project showcase — analytics platform' },
]

const DEFAULT_BRANDS = [
    { src: electraLogo, alt: 'Electra' },
    { src: dekkoLogo, alt: 'Dekko Isho Group' },
    { src: renataLogo, alt: 'Renata PLC' },
]

export function Hero({
    pillText = 'Transforming industries one idea at a time',
    title = 'Transitioning industries to the age of AI',
    subtitle = 'Rethink your entire business flow with our custom AI solutions',
    ctaLabel = 'Book a free consultation with us today',
    ctaHref = '#contact',
    images = DEFAULT_IMAGES,
    brands = DEFAULT_BRANDS,
    slideDuration = 4000,
}: HeroProps) {
    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className="relative w-full overflow-hidden bg-surface-white"
        >
            {/* Interactive grid background — z-10, captures all hover events */}
            <HeroGrid />

            {/* Top gradient overlay */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            {/* Content — pointer-events-none so grid receives hover, 
                 interactive children opt back in with pointer-events-auto */}
            <div className="relative z-20 pointer-events-none mx-auto w-full max-w-(--width-container) px-(--spacing-container-x)">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-[40px] lg:gap-[64px] py-[48px] lg:py-[80px]">
                    {/* Left column — text content */}
                    <div className="flex flex-col justify-between flex-1 min-w-0 my-10">
                        {/* Top: Pill + Title + Subtitle + CTA */}
                        <div className="flex flex-col">
                            {/* Pill */}
                            <HeroPill text={pillText} />

                            {/* Title — 12px gap from pill */}
                            <h1
                                id="hero-heading"
                                className="font-display font-semibold text-content-primary mt-[12px]"
                                style={{
                                    fontSize: '48px',
                                    lineHeight: '1.1',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {title}
                            </h1>

                            {/* Subtitle — 8px gap from title */}
                            <p
                                className="font-body text-content-tertiary mt-[8px]"
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '1.6',
                                }}
                            >
                                {subtitle}
                            </p>

                            {/* CTA — 32px gap from subtitle */}
                            <div className="mt-[32px] pointer-events-auto self-start">
                                <HeroButton label={ctaLabel} href={ctaHref} />
                            </div>
                        </div>

                        {/* Bottom: Brand logos */}
                        <div className="mt-[48px] lg:mt-0 pointer-events-auto self-start">
                            <BrandLogoBar brands={brands} />
                        </div>
                    </div>

                    {/* Right column — image slider */}
                    <HeroImageSlider
                        images={images}
                        slideDuration={slideDuration}
                    />
                </div>
            </div>
        </section>
    )
}
