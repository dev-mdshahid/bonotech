import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import bonotechLogo from '@/assets/bonotech-logo.png'
import menuIcon from '@/assets/icons/menu-line-horizontal.svg'
import type { NavbarProps, NavLink } from './Navbar.types'

const DEFAULT_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQs', href: '#faqs' },
]

export function Navbar({ links = DEFAULT_LINKS }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const closeMenu = () => setMobileMenuOpen(false)

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-surface-white" aria-label="Main navigation">
                <div className="mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex items-center justify-between h-[80px]">
                    {/* Logo */}
                    <a href="/" className="shrink-0" aria-label="Bonotech Home">
                        <img
                            src={bonotechLogo}
                            alt="Bonotech"
                            className="h-10 w-auto"
                        />
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-body-lg text-content-primary font-medium hover:text-content-tertiary transition-(--transition-base)"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <a
                        href="#contact"
                        className="hidden lg:inline-flex items-center gap-3 bg-content-primary text-content-white rounded-full pl-[24px] pr-[6px] py-[6px] text-label-lg hover:opacity-90 transition-(--transition-base)"
                    >
                        Contact Us
                        <span className="w-[36px] h-[36px] rounded-full bg-surface-white flex items-center justify-center">
                            <ArrowRight className="w-[16px] h-[16px] text-content-primary" />
                        </span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-content-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <img src={menuIcon} alt="" aria-hidden="true" className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay — drops below the bar, never shifts page content */}
                <div
                    className={cn(
                        'lg:hidden absolute inset-x-0 top-full bg-surface-white border-t border-border-primary shadow-xl',
                        'transition-all duration-300 ease-in-out',
                        mobileMenuOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                    aria-hidden={!mobileMenuOpen}
                >
                    <div className="mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) py-6 flex flex-col gap-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-body-lg text-content-primary font-medium hover:text-content-tertiary transition-(--transition-base) py-3 border-b border-border-primary last:border-0"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-4 inline-flex items-center gap-3 bg-content-primary text-content-white rounded-full pl-[24px] pr-[6px] py-[6px] text-label-lg hover:opacity-90 transition-(--transition-base) self-start"
                            onClick={closeMenu}
                        >
                            Contact Us
                            <span className="w-[36px] h-[36px] rounded-full bg-surface-white flex items-center justify-center">
                                <ArrowRight className="w-[16px] h-[16px] text-content-primary" />
                            </span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Backdrop — dismisses menu on outside click */}
            <div
                className={cn(
                    'fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity duration-300',
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
                onClick={closeMenu}
                aria-hidden="true"
            />
        </>
    )
}
