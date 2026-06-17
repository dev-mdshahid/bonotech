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
                'cursor-pointer select-none transition-all duration-300 ease-in-out p-6 md:py-8 md:px-6 rounded-[24px]',
                'bg-white border border-[#E8E9EB]/60 hover:border-[#E8E9EB]/80'
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
            <div className="flex flex-col">
                {/* Question row */}
                <div className="flex items-center justify-between gap-4">
                    <h3 className={cn(
                        'font-display font-semibold text-[18px] md:text-[20px] text-[#313233] leading-[1.3] min-w-0',
                        isOpen ? 'whitespace-normal' : 'truncate'
                    )}>
                        {item.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div
                        className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#F7F7F7] transition-all duration-300 hover:scale-105"
                    >
                        {isOpen ? (
                            <Minus size={18} className="text-[#313233]" strokeWidth={2.5} />
                        ) : (
                            <Plus size={18} className="text-[#313233]" strokeWidth={2.5} />
                        )}
                    </div>
                </div>

                {/* Answer - full width */}
                <div
                    className="overflow-hidden transition-all duration-300 ease-in-out w-full"
                    style={{
                        maxHeight: isOpen ? '300px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? '16px' : '0px',
                    }}
                >
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#75777A]">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}
