import type { BrandLogo } from '../Hero.types'

interface BrandLogoBarProps {
    brands: BrandLogo[]
}

export function BrandLogoBar({ brands }: BrandLogoBarProps) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <p className="text-sm leading-[1.4] text-content-tertiary font-body font-semibold text-center lg:text-left">
                Trusted by Global Brands
            </p>
            <div className="flex items-center gap-2">
                {brands.map((brand) => (
                    <div
                        key={brand.alt}
                        className="flex flex-1 items-center justify-center rounded-full px-3 py-3 lg:p-4 border border-[#DCDDE0] lg:min-w-[140px] lg:flex-initial min-w-0 h-14"
                    >
                        <img
                            src={brand.src}
                            alt={brand.alt}
                            className="h-6 w-auto object-contain grayscale"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
