import type { BrandLogo } from '../Hero.types'

interface BrandLogoBarProps {
    brands: BrandLogo[]
}

export function BrandLogoBar({ brands }: BrandLogoBarProps) {
    return (
        <div className="flex flex-col gap-[16px]">
            <p className="text-content-tertiary font-body" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                Trusted by
                <br />
                Global Brands
            </p>
            <div className="flex items-center gap-[8px]">
                {brands.map((brand) => (
                    <div
                        key={brand.alt}
                        className="flex items-center justify-center rounded-full"
                        style={{
                            padding: '16px',
                            border: '1px solid #DCDDE0',
                            minWidth: '140px',
                            height: '56px',
                        }}
                    >
                        <img
                            src={brand.src}
                            alt={brand.alt}
                            className="h-[20px] w-auto object-contain max-w-[120px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
