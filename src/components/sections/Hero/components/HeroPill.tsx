import type { HeroPillProps } from '../Hero.types'

export function HeroPill({ text }: HeroPillProps) {
    return (
        <div
            className="inline-flex items-center gap-[8px] rounded-full px-[16px] py-[8px] self-start"
            style={{
                backgroundColor: '#F8F5FA',
                border: '0.5px solid #DCDDE0',
            }}
        >
            {/* Decorative dot */}
            <span
                className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                style={{ backgroundColor: '#8269CF' }}
                aria-hidden="true"
            />
            <span
                className="font-body font-medium"
                style={{
                    fontSize: '14px',
                    lineHeight: '1.4',
                    color: 'var(--content-tertiary)',
                }}
            >
                {text}
            </span>
        </div>
    )
}
