export interface HeroImage {
    src: string
    alt: string
}

export interface BrandLogo {
    src: string
    alt: string
}

export interface HeroPillProps {
    text: string
}

export interface HeroCtaProps {
    label: string
    href: string
}

export interface HeroProps {
    pillText?: string
    title?: string
    subtitle?: string
    ctaLabel?: string
    ctaHref?: string
    images?: HeroImage[]
    brands?: BrandLogo[]
    /** Duration in ms each slide is visible before transitioning */
    slideDuration?: number
}
