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
                'cursor-pointer select-none transition-all duration-300 ease-in-out py-8 px-6 rounded-3xl',
                isOpen ? 'bg-[#374C62]' : 'bg-[#243240]'
            )}
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
            <div className="flex items-center justify-between gap-12">
                <div className="flex-1 min-w-0">
                    <h3
                        className={cn(
                            'font-display text-content-white text-2xl overflow-hidden text-ellipsis',
                            isOpen ? 'whitespace-normal' : 'whitespace-nowrap'
                        )}
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
                        <p className="font-body leading-[160%] font-normal pt-4 text-[#E8E9EB]">
                            {item.answer}
                        </p>
                    </div>
                </div>

                {/* Toggle Icon */}
                <div
                    className={cn(
                        'shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white transition-all duration-300',
                        isOpen ? 'bg-[rgba(74,94,111,0.3)]' : 'bg-white'
                    )}
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
