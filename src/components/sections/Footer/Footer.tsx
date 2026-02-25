import { cn } from '@/lib/utils'
import type { FooterProps, FooterLinkGroup } from './Footer.types'
import footerBg from '@/assets/footer-bg.jpg'
import footerLogo from '@/assets/footer-logo.png'

const LINK_GROUPS: FooterLinkGroup[] = [
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
            { label: 'FAQs', href: '#faqs' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'MVP Development', href: '#' },
            { label: 'Mobile/Web App', href: '#' },
            { label: 'Website Development', href: '#' },
            { label: 'Custom AI Solutions', href: '#', badge: 'NEW' },
            { label: 'UI/UX Design', href: '#' },
        ],
    },
    {
        title: 'Social',
        links: [
            { label: 'Facebook', href: '#' },
            { label: 'LinkedIn', href: '#' },
        ],
    },
]

const BOTTOM_LINKS = [
    { label: '© Bonotech.io', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
]

export function Footer({ className }: FooterProps) {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer
            id="footer"
            aria-label="Site footer"
            className={cn('relative w-full overflow-hidden', className)}
        >
            {/* ─── Background Image ─── */}
            <img
                src={footerBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 0 }}
            />

            {/* ─── Dark overlay ─── */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 1,
                    background:
                        'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.70) 100%)',
                }}
                aria-hidden="true"
            />

            {/* ─── #050113 color overlay ─── */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 1,
                    backgroundColor: 'rgba(5, 1, 19, 0.15)',
                }}
                aria-hidden="true"
            />

            {/* ─── Bottom radial gradient glow ─── */}
            <div
                className="absolute bottom-0 left-0 w-full"
                style={{
                    zIndex: 1,
                    height: '55%',
                    background:
                        'radial-gradient(ellipse 80% 100% at 50% 100%, #566687 0%, #1F2629 60%, transparent 100%)',
                }}
                aria-hidden="true"
            />

            {/* ─── Content ─── */}
            <div
                className="relative mx-auto w-full max-w-(--width-container) px-(--spacing-container-x)"
                style={{ zIndex: 2 }}
            >
                {/* ─── Links Grid ─── */}
                <div
                    className="grid grid-cols-2 gap-y-10 sm:grid-cols-3"
                    style={{
                        paddingTop: '80px',
                        paddingBottom: '64px',
                        maxWidth: '520px',
                    }}
                >
                    {LINK_GROUPS.map((group) => (
                        <div key={group.title} className="flex flex-col" style={{ gap: '20px' }}>
                            {/* Column header */}
                            <span
                                className="font-body text-white"
                                style={{
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                    fontWeight: 400,
                                    fontStyle: 'italic',
                                    opacity: 0.5,
                                }}
                            >
                                {group.title}
                            </span>

                            {/* Links */}
                            <nav
                                aria-label={`${group.title} links`}
                                className="flex flex-col"
                                style={{ gap: '12px' }}
                            >
                                {group.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="font-body text-white inline-flex items-center transition-(--transition-base) hover:opacity-80"
                                        style={{
                                            fontSize: '14px',
                                            lineHeight: '140%',
                                            fontWeight: 400,
                                            opacity: 0.9,
                                            gap: '8px',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {link.label}
                                        {link.badge && (
                                            <span
                                                className="font-body inline-flex items-center justify-center"
                                                style={{
                                                    fontSize: '10px',
                                                    fontWeight: 600,
                                                    lineHeight: 1,
                                                    letterSpacing: '0.04em',
                                                    color: '#FFFFFF',
                                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                                    border: '1px solid rgba(255,255,255,0.25)',
                                                    borderRadius: '100px',
                                                    padding: '4px 8px',
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {link.badge}
                                            </span>
                                        )}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* ─── Divider ─── */}
                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                    }}
                    aria-hidden="true"
                />

                {/* ─── Bottom Bar ─── */}
                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
                    style={{
                        paddingTop: '24px',
                        paddingBottom: '24px',
                    }}
                >
                    {/* Left — Legal links */}
                    <div
                        className="flex flex-wrap items-center"
                        style={{ gap: '24px' }}
                    >
                        {BOTTOM_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-body text-white transition-(--transition-base) hover:opacity-80"
                                style={{
                                    fontSize: '13px',
                                    lineHeight: '140%',
                                    fontWeight: 400,
                                    opacity: 0.6,
                                    textDecoration: 'none',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right — Back to top */}
                    <button
                        type="button"
                        onClick={handleBackToTop}
                        className="font-body text-white cursor-pointer bg-transparent border-none transition-(--transition-base) hover:opacity-80 mt-4 sm:mt-0"
                        style={{
                            fontSize: '13px',
                            lineHeight: '140%',
                            fontWeight: 400,
                            opacity: 0.6,
                        }}
                        aria-label="Scroll back to top"
                    >
                        Back to top
                    </button>
                </div>
            </div>

            {/* ─── Bottom Logo ─── */}
            <div
                className="relative w-full flex items-end justify-center overflow-hidden"
                style={{
                    zIndex: 2,
                    height: 'clamp(100px, 16vw, 220px)',
                    marginTop: '8px',
                }}
            >
                <img
                    src={footerLogo}
                    alt="Bonotech.io"
                    className="relative w-full object-cover object-top select-none pointer-events-none"
                    style={{
                        maxWidth: '1400px',
                    }}
                />
            </div>
        </footer>
    )
}
