import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import type { ContactProps } from './Contact.types'
import contactBg from '@/assets/contact-section-bg.png'

export function Contact({ className }: ContactProps) {
    const [name, setName] = useState('')
    const [emailPhone, setEmailPhone] = useState('')
    const [projectDetails, setProjectDetails] = useState('')

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()
            // TODO: Implement form submission
            console.log({ name, emailPhone, projectDetails })
        },
        [name, emailPhone, projectDetails]
    )

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className={cn('relative w-full bg-surface-neutral', className)}
        >
            <div
                className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex flex-col items-center py-28"
            >
                {/* Section Title — "Let's Connect" with gradient */}
                <div className="relative flex flex-col items-center select-none mb-10">
                    <h2
                        id="contact-heading"
                        className="font-body font-normal text-center text-[clamp(44px,12vw,181.9px)] leading-[0.8] tracking-normal bg-[linear-gradient(180deg,#8269cf81_0%,transparent_100%)] bg-clip-text text-transparent"
                    >
                        Let's Connect
                    </h2>
                </div>

                {/* ─── Contact Card ─── */}
                <div
                    className="relative w-full max-w-300 overflow-hidden flex flex-col lg:flex-row justify-between rounded-4xl p-8 md:p-16 lg:h-179.5"
                >
                    {/* Background image */}
                    <img
                        src={contactBg}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* Dark overlay for readability */}
                    <div
                        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_100%)]"
                        aria-hidden="true"
                    />

                    {/* ─── Left Content ─── */}
                    <div className="relative z-20 flex flex-col justify-center w-full lg:w-1/2">
                        <h3 className="font-body font-medium text-white text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.01em] lg:max-w-1/2">
                            Have an idea in your mind?
                        </h3>
                        <p className="font-body font-medium text-white/80 text-base md:text-lg leading-[1.4] mt-4">
                            Let's make something happen together
                        </p>
                    </div>

                    {/* ─── Right Form ─── */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative z-20 flex flex-col justify-center w-full lg:w-1/2 lg:px-12 gap-8 mt-8 lg:mt-0"
                    >
                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-label="Name"
                                className="font-body bg-transparent text-base leading-[1.4] font-normal text-white placeholder:text-white outline-none w-full pb-3 border-b border-[#E8E9EB]"
                            />
                        </div>

                        {/* Email / Phone */}
                        <div>
                            <input
                                type="text"
                                placeholder="Email/Phone No"
                                value={emailPhone}
                                onChange={(e) => setEmailPhone(e.target.value)}
                                aria-label="Email or Phone Number"
                                className="font-body bg-transparent text-base leading-[1.4] font-normal text-white placeholder:text-white outline-none w-full pb-3 border-b border-[#E8E9EB]"
                            />
                        </div>

                        {/* Project Details */}
                        <div>
                            <input
                                type="text"
                                placeholder="Project Details"
                                value={projectDetails}
                                onChange={(e) =>
                                    setProjectDetails(e.target.value)
                                }
                                aria-label="Project Details"
                                className="font-body bg-transparent text-base leading-[1.4] font-normal text-white placeholder:text-white outline-none w-full pb-3 border-b border-[#E8E9EB]"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="font-body cursor-pointer transition-(--transition-base) hover:opacity-90 w-full h-14 rounded-full bg-white text-[#131314] font-semibold text-base leading-[1.4] mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
