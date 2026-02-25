import { Mail } from 'lucide-react'
import bonotechLogo from '@/assets/bonotech-logo.png'

export function FooterBrand() {
    return (
        <div className="flex flex-col" style={{ gap: '24px' }}>
            {/* Logo — white monochrome on dark footer */}
            <img
                src={bonotechLogo}
                alt="Bonotech"
                className="select-none"
                style={{
                    height: '30px',
                    width: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'left',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.9,
                }}
            />

            {/* Description */}
            <p
                className="font-body text-white"
                style={{
                    fontSize: '14px',
                    lineHeight: '1.75',
                    fontWeight: 400,
                    opacity: 0.5,
                    maxWidth: '300px',
                }}
            >
                Building innovative digital products that help
                businesses transition into the age of AI.
            </p>

            {/* Email */}
            <a
                href="mailto:hello@bonotech.io"
                className="group font-body text-white inline-flex items-center transition-(--transition-base) hover:opacity-100"
                style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    fontWeight: 500,
                    opacity: 0.7,
                    gap: '8px',
                    textDecoration: 'none',
                }}
            >
                <Mail
                    size={15}
                    className="opacity-60 group-hover:opacity-100 transition-(--transition-base)"
                />
                hello@bonotech.io
            </a>
        </div>
    )
}
