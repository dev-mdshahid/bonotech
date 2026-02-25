export interface NavLink {
    label: string
    href: string
}

export interface NavbarProps {
    /** Optional custom navigation links */
    links?: NavLink[]
}
