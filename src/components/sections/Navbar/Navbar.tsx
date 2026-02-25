import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import bonotechLogo from '@/assets/bonotech-logo.png'
import type { NavbarProps, NavLink } from './Navbar.types'

const DEFAULT_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQs', href: '#faqs' },
]

export function Navbar({ links = DEFAULT_LINKS }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="w-full bg-surface-white" aria-label="Main navigation">
            <div className="mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) flex items-center justify-between h-[80px]">
                {/* Logo */}
                <a href="/" className="flex-shrink-0" aria-label="Bonotech Home">
                    <img
                        src={bonotechLogo}
                        alt="Bonotech"
                        className="h-[40px] w-auto"
                    />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-[40px]">
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
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'lg:hidden overflow-hidden transition-(--transition-base)',
                    mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="mx-auto w-full max-w-(--width-container) px-(--spacing-container-x) pb-6 flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-body-lg text-content-primary font-medium hover:text-content-tertiary transition-(--transition-base) py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 bg-content-primary text-content-white rounded-full pl-[24px] pr-[6px] py-[6px] text-label-lg hover:opacity-90 transition-(--transition-base) self-start"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact Us
                        <span className="w-[36px] h-[36px] rounded-full bg-surface-white flex items-center justify-center">
                            <ArrowRight className="w-[16px] h-[16px] text-content-primary" />
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
