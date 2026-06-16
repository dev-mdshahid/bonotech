import type { ReactNode } from 'react'

export interface TimelineCard {
    icon: ReactNode
    title: string
    subtitle: string
}

export interface TimelineProps {
    className?: string
}
