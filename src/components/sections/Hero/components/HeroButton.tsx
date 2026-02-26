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
                'inline-flex items-center justify-center rounded-full font-body font-semibold text-content-white transition-(--transition-base) hover:opacity-90 bg-[#8269CF] px-8 py-5 text-base leading-[1.4] w-full lg:w-auto',
                className,
            )}
        >
            {label}
        </a>
    )
}
