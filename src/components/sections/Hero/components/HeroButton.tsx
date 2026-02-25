import { cn } from '@/lib/utils'

interface HeroButtonProps {
    label: string
    href: string
    className?: string
}

export function HeroButton({ label, href, className }: HeroButtonProps) {
    return (
        <a
            href={href}
            className={cn(
                'inline-flex items-center justify-center rounded-full font-body font-semibold text-content-white transition-(--transition-base) hover:opacity-90',
                className,
            )}
            style={{
                backgroundColor: '#8269CF',
                paddingLeft: '32px',
                paddingRight: '32px',
                paddingTop: '20px',
                paddingBottom: '20px',
                fontSize: '16px',
                lineHeight: '1.4',
            }}
        >
            {label}
        </a>
    )
}
