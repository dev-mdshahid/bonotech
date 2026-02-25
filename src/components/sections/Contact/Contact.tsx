import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import type { ContactProps } from './Contact.types'
import contactBg from '@/assets/contact-section-bg.png'

/** Figma layout specs */
const CARD_WIDTH = 1200
const CARD_HEIGHT = 718
const CARD_RADIUS = 32
const CARD_PADDING = 64

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
                className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex flex-col items-center"
                style={{ paddingTop: '112px', paddingBottom: '112px' }}
            >
                {/* Section Title — "Let's Connect" with gradient */}
                <div className="relative flex flex-col items-center select-none mb-10">
                    <h2
                        id="contact-heading"
                        className="font-body font-normal text-center"
                        style={{
                            fontSize: 'clamp(80px, 14vw, 181.9px)',
                            lineHeight: '80%',
                            letterSpacing: '0%',
                            background:
                                'linear-gradient(180deg, #8269cf81 0%, transparent 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Let's Connect
                    </h2>
                </div>

                {/* ─── Contact Card ─── */}
                <div
                    className="relative w-full overflow-hidden flex flex-col lg:flex-row justify-between"
                    style={{
                        maxWidth: `${CARD_WIDTH}px`,
                        height: `${CARD_HEIGHT}px`,
                        borderRadius: `${CARD_RADIUS}px`,
                        padding: `${CARD_PADDING}px`,
                    }}
                >
                    {/* Background image */}
                    <img
                        src={contactBg}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ zIndex: 0 }}
                    />

                    {/* Dark overlay for readability */}
                    <div
                        className="absolute inset-0"
                        style={{
                            zIndex: 1,
                            background:
                                'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
                        }}
                        aria-hidden="true"
                    />

                    {/* ─── Left Content ─── */}
                    <div
                        className="relative flex flex-col justify-center w-1/2"
                        style={{ zIndex: 2 }}
                    >
                        <h3
                            className="font-body text-white"
                            style={{
                                fontWeight: 500,
                                fontSize: '40px',
                                lineHeight: '110%',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            Have an idea in <br />your mind ?
                        </h3>
                        <p
                            className="font-body text-white"
                            style={{
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '140%',
                                marginTop: '16px',
                                opacity: 0.8,
                            }}
                        >
                            Let's make something happen together
                        </p>
                    </div>

                    {/* ─── Right Form ─── */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex flex-col justify-center w-1/2 px-12"
                        style={{
                            zIndex: 2,
                            gap: '32px',
                        }}
                    >
                        {/* Name */}
                        <div className="flex flex-col" style={{ gap: '8px' }}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-label="Name"
                                className="font-body bg-transparent text-white placeholder:text-white outline-none w-full"
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '140%',
                                    fontWeight: 400,
                                    paddingBottom: '12px',
                                    borderBottom: '1px solid #E8E9EB',
                                }}
                            />
                        </div>

                        {/* Email / Phone */}
                        <div className="flex flex-col" style={{ gap: '8px' }}>
                            <input
                                type="text"
                                placeholder="Email/Phone No"
                                value={emailPhone}
                                onChange={(e) => setEmailPhone(e.target.value)}
                                aria-label="Email or Phone Number"
                                className="font-body bg-transparent text-white placeholder:text-white outline-none w-full"
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '140%',
                                    fontWeight: 400,
                                    paddingBottom: '12px',
                                    borderBottom: '1px solid #E8E9EB',
                                }}
                            />
                        </div>

                        {/* Project Details */}
                        <div className="flex flex-col" style={{ gap: '8px' }}>
                            <input
                                type="text"
                                placeholder="Project Details"
                                value={projectDetails}
                                onChange={(e) =>
                                    setProjectDetails(e.target.value)
                                }
                                aria-label="Project Details"
                                className="font-body bg-transparent text-white placeholder:text-white outline-none w-full"
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '140%',
                                    fontWeight: 400,
                                    paddingBottom: '12px',
                                    borderBottom: '1px solid #E8E9EB',
                                }}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="font-body cursor-pointer transition-(--transition-base) hover:opacity-90"
                            style={{
                                width: '100%',
                                height: '56px',
                                borderRadius: '100px',
                                backgroundColor: '#FFFFFF',
                                color: '#131314',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '140%',
                                border: 'none',
                                marginTop: '8px',
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
