import { cn } from '@/lib/utils'
import { Plus, Minus } from 'lucide-react'
import type { FAQItem } from '../FAQ.types'

interface FAQCardProps {
    item: FAQItem
    isOpen: boolean
    onToggle: () => void
}

export function FAQCard({ item, isOpen, onToggle }: FAQCardProps) {
    return (
        <div
            className={cn(
                'cursor-pointer select-none',
                'transition-all duration-300 ease-in-out'
            )}
            style={{
                paddingTop: '32px',
                paddingRight: '24px',
                paddingBottom: '32px',
                paddingLeft: '24px',
                borderRadius: '24px',
                background: isOpen
                    ? '#374C62'
                    : '#243240',
            }}
            onClick={onToggle}
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onToggle()
                }
            }}
        >
            <div className="flex items-center justify-between" style={{ gap: '48px' }}>
                <div className="flex-1 min-w-0">
                    <h3
                        className={cn(
                            'font-display text-content-white text-2xl'
                        )}
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: isOpen ? 'normal' : 'nowrap',
                        }}
                    >
                        {item.question}
                    </h3>

                    {/* Answer */}
                    <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                            maxHeight: isOpen ? '300px' : '0px',
                            opacity: isOpen ? 1 : 0,
                            marginTop: isOpen ? '12px' : '0px',
                        }}
                    >
                        <p className="font-body leading-[160%] font-normal pt-4" style={{ color: '#E8E9EB' }}>
                            {item.answer}
                        </p>
                    </div>
                </div>

                {/* Toggle Icon */}
                <div
                    className="shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                        width: '36px',
                        height: '36px',
                        border: '1px solid white',
                        background: isOpen ? 'rgba(74, 94, 111, 0.3)' : 'white',
                    }}
                >
                    {isOpen ? (
                        <Minus size={16} color="white" strokeWidth={2} />
                    ) : (
                        <Plus size={16} color="#243240" strokeWidth={2} />
                    )}
                </div>
            </div>
        </div>
    )
}
