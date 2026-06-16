import { Lightbulb, Rocket, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { IntroductionProps } from './Introduction.types'

const FEATURE_CARDS = [
    {
        icon: Rocket,
        title: 'Speed',
        text: 'Faster product cycles.',
        variant: 'light',
        iconClassName: 'text-[#168ED8]',
    },
    {
        icon: ShieldCheck,
        title: 'Security',
        text: 'Faster product cycles.',
        variant: 'accent',
        iconClassName: 'text-[#05C982]',
    },
    {
        icon: Lightbulb,
        title: 'Outcome',
        text: 'Business metrics tied to every sprint.',
        variant: 'light',
        iconClassName: 'text-[#FFC94D]',
    },
] as const

export function Introduction({ className }: IntroductionProps) {
    return (
        <section
            id="introduction"
            aria-labelledby="introduction-heading"
            className={cn('w-full bg-surface-white', className)}
        >
            <div className="mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) py-[86px] max-md:py-16">
                <div className="grid grid-cols-[1fr_523px] gap-[42px] max-lg:grid-cols-1 max-lg:gap-8">
                    <div className="flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F0FA] px-4 py-[6px]">
                            <span
                                className="h-2 w-2 shrink-0 rounded-full bg-[#8269CF]"
                                aria-hidden="true"
                            />
                            <span className="font-body text-[12px] font-medium uppercase leading-[1.2] tracking-[0] text-[#8269CF]">
                                Introducing Bonotech
                            </span>
                        </div>

                        <h2
                            id="introduction-heading"
                            className="mt-[17px] max-w-[410px] font-display text-[64px] font-semibold leading-[1.02] tracking-[0] text-[#272829] max-md:text-[48px] max-sm:text-[40px]"
                        >
                            Better Faster Stronger.
                        </h2>
                    </div>

                    <div className="pt-[14px] max-lg:pt-0">
                        <h3 className="font-display text-[32px] font-semibold leading-[1.25] tracking-[0] text-[#272829] max-sm:text-[28px]">
                            Zero to Launch with <span className="text-[#8269CF]">SPEED.</span>
                        </h3>
                        <div className="mt-[10px] space-y-[10px] font-body text-[16px] font-normal leading-[1.5] tracking-[0] text-[#444547]">
                            <p>
                                Turn ideas into custom software and SaaS products in a shorter time frame,
                                with Bonotech# AI-accelerated product engine.
                            </p>
                            <p>
                                Designs intuitive and scalable systems combining AI-native delivery, shorter
                                product cycles, and measurable business KPIs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-[52px] grid grid-cols-3 gap-[14px] max-lg:grid-cols-1">
                    {FEATURE_CARDS.map((card) => {
                        const Icon = card.icon
                        const isAccent = card.variant === 'accent'

                        return (
                            <article
                                key={card.title}
                                className={cn(
                                    'flex min-h-[200px] flex-col justify-between rounded-[16px] p-6',
                                    isAccent
                                        ? 'bg-[#8269CF] text-white'
                                        : 'bg-[#F4F5F6] text-[#272829]'
                                )}
                            >
                                <div
                                    className="flex h-[66px] w-[66px] items-center justify-center rounded-[8px] bg-white p-4"
                                    aria-hidden="true"
                                >
                                    <Icon className={cn('h-10 w-10', card.iconClassName)} strokeWidth={2.2} />
                                </div>

                                <div>
                                    <h4 className="font-display text-[32px] font-semibold leading-[1.25] tracking-[0]">
                                        {card.title}
                                    </h4>
                                    <p
                                        className={cn(
                                            'mt-[9px] font-body text-[16px] font-normal leading-[1.5] tracking-[0]',
                                            isAccent ? 'text-white' : 'text-[#444547]'
                                        )}
                                    >
                                        {card.text}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
