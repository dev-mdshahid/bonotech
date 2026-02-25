import type { FooterLinkGroup } from '../Footer.types'

interface FooterLinkColumnProps {
    group: FooterLinkGroup
}

export function FooterLinkColumn({ group }: FooterLinkColumnProps) {
    return (
        <div className="flex flex-col" style={{ gap: '20px' }}>
            {/* Column header — uppercase, tracked, subtle */}
            <span
                className="font-body text-white"
                style={{
                    fontSize: '11px',
                    lineHeight: '140%',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    opacity: 0.35,
                }}
            >
                {group.title}
            </span>

            {/* Links */}
            <nav
                aria-label={`${group.title} links`}
                className="flex flex-col"
                style={{ gap: '14px' }}
            >
                {group.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="group font-body text-white inline-flex items-center transition-(--transition-base) hover:opacity-100"
                        style={{
                            fontSize: '14px',
                            lineHeight: '1.5',
                            fontWeight: 400,
                            opacity: 0.65,
                            gap: '8px',
                            textDecoration: 'none',
                        }}
                    >
                        {/* Link text with animated underline */}
                        <span className="relative">
                            {link.label}
                            <span
                                className="absolute bottom-0 left-0 h-px bg-white/40 w-0 group-hover:w-full transition-all duration-300 ease-out"
                                aria-hidden="true"
                            />
                        </span>

                        {/* Badge */}
                        {link.badge && (
                            <span
                                className="font-body inline-flex items-center justify-center"
                                style={{
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    letterSpacing: '0.06em',
                                    color: '#FFFFFF',
                                    background:
                                        'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '100px',
                                    padding: '3px 8px',
                                    textTransform: 'uppercase' as const,
                                    backdropFilter: 'blur(4px)',
                                }}
                            >
                                {link.badge}
                            </span>
                        )}
                    </a>
                ))}
            </nav>
        </div>
    )
}
