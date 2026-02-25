export interface ProjectsProps {
    className?: string
}

export interface ProjectCardData {
    id: string
    category: string
    title: string
    subtitle: string
    backgroundColor: string
    borderColor: string
    buttonColor: string
    mockupSrc: string
    iconSrc: string
    logoSrc: string
    logoAlt: string
    playStoreHref?: string
    appStoreHref?: string
    learnMoreHref?: string
    opacity?: number
}

export interface ProjectCardProps {
    project: ProjectCardData
}
