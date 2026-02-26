import type { HeroPillProps } from '../Hero.types'

export function HeroPill({ text }: HeroPillProps) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 self-start bg-[#F8F5FA] border border-[#DCDDE0] mx-auto lg:mx-0">
            {/* Decorative dot */}
            <span
                className="w-2 h-2 rounded-full flex-shrink-0 bg-[#8269CF]"
                aria-hidden="true"
            />
            <span className="font-body font-medium text-sm leading-[1.4] text-content-tertiary">
                {text}
            </span>
        </div>
    )
}
