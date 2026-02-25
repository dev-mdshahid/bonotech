export interface FooterProps {
    className?: string
}

export interface FooterLinkGroup {
    title: string
    links: FooterLink[]
}

export interface FooterLink {
    label: string
    href: string
    badge?: string
}
