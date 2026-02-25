import { cn } from '@/lib/utils'
import { ArrowUp } from 'lucide-react'
import type { FooterProps, FooterLinkGroup } from './Footer.types'
import { FooterBrand } from './components/FooterBrand'
import { FooterLinkColumn } from './components/FooterLinkColumn'
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
                {/* ─── Main grid: Brand + Link columns ─── */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16"
                    style={{ paddingTop: '80px', paddingBottom: '56px' }}
                >
                    {/* Brand area — left */}
                    <div className="lg:col-span-4">
                        <FooterBrand />
                    </div>

                    {/* Link columns — right */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8">
                        {LINK_GROUPS.map((group) => (
                            <FooterLinkColumn key={group.title} group={group} />
                        ))}
                    </div>
                </div>

                {/* ─── Gradient divider ─── */}
                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        background:
                            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)',
                    }}
                    aria-hidden="true"
                />

                {/* ─── Bottom bar ─── */}
                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
                    style={{ paddingTop: '24px', paddingBottom: '24px' }}
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
                                className="font-body text-white transition-(--transition-base) hover:opacity-70"
                                style={{
                                    fontSize: '13px',
                                    lineHeight: '140%',
                                    fontWeight: 400,
                                    opacity: 0.45,
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
                        className="group font-body text-white cursor-pointer bg-transparent border-none transition-(--transition-base) hover:opacity-100 mt-4 sm:mt-0 inline-flex items-center"
                        style={{
                            fontSize: '13px',
                            lineHeight: '140%',
                            fontWeight: 400,
                            opacity: 0.45,
                            gap: '6px',
                        }}
                        aria-label="Scroll back to top"
                    >
                        Back to top
                        <ArrowUp
                            size={14}
                            className="transition-(--transition-fast) group-hover:-translate-y-0.5"
                        />
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
                    style={{ maxWidth: '1400px' }}
                />
            </div>
        </footer>
    )
}
