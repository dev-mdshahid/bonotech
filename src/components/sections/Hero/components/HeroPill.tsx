import type { HeroPillProps } from '../Hero.types'

export function HeroPill({ text }: HeroPillProps) {
    return (
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/13 px-4 py-[6px] backdrop-blur-sm">
            <span
                className="h-2 w-2 flex-shrink-0 rounded-full bg-[#8269CF]"
                aria-hidden="true"
            />
            <span className="font-body text-[12px] font-medium leading-[1.2] tracking-[0] text-white">
                {text}
            </span>
        </div>
    )
}
