import { ArrowRight } from 'lucide-react'
import type { ProjectCardProps } from '../Projects.types'

import playStoreImg from '@/assets/playstore.png'
import appStoreImg from '@/assets/apple-store.png'

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className="relative w-full overflow-hidden flex items-center"
            style={{
                maxWidth: '1312px',
                minHeight: '586px',
                paddingTop: '88px',
                paddingRight: '32px',
                paddingBottom: '88px',
                paddingLeft: '32px',
                gap: '48px',
                borderRadius: '32px',
                border: `1px solid ${project.borderColor}`,
                backgroundColor: project.backgroundColor,
            }}
        >
            {/* Background Icon — centered, fills full height */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
            >
                <img
                    src={project.iconSrc}
                    alt=""
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: '90%', opacity: project.opacity ? project.opacity / 100 : 1 }}
                />
            </div>

            {/* Left Content */}
            <div
                className="relative z-10 flex flex-col items-end justify-end shrink-0"
                style={{ flex: '1 1 0', gap: '24px', alignSelf: 'stretch' }}
            >
                {/* Category Pill */}
                <span
                    className="inline-flex items-center justify-end font-body"
                    style={{
                        padding: '12px 16px',
                        borderRadius: '100px',
                        border: `1px solid ${project.borderColor}`,
                        backgroundColor: project.buttonColor,
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '140%',
                        letterSpacing: '0.01em',
                        color: 'white',

                    }}
                >
                    {project.category}
                </span>

                {/* Title */}
                <h3
                    className="font-body"
                    style={{
                        fontWeight: 600,
                        fontSize: '28px',
                        lineHeight: '120%',
                        letterSpacing: '-0.5%',
                        textAlign: 'right',
                        color: 'var(--content-accent, #131314)',
                    }}
                >
                    {project.title}
                </h3>

                {/* Subtitle */}
                <p
                    className="font-body"
                    style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '150%',
                        letterSpacing: '-0.25px',
                        textAlign: 'right',
                        color: 'var(--content-accent-dark, #3B3C3D)',
                        maxWidth: '400px',
                    }}
                >
                    {project.subtitle}
                </p>
            </div>

            {/* Center Mockup */}
            <div
                className="relative z-10 flex items-center justify-center shrink-0"
            >
                <img
                    src={project.mockupSrc}
                    alt={`${project.title} mockup`}
                    style={{
                        width: '310px',
                        height: 'auto',
                        filter: 'drop-shadow(0px 0px 120px rgba(0, 0, 0, 0.3))',
                    }}
                />
            </div>

            {/* Right Content */}
            <div
                className="relative z-10 flex flex-col items-start justify-end shrink-0 gap-8"
                style={{ flex: '1 1 0', alignSelf: 'stretch' }}
            >
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={project.logoSrc}
                        alt={project.logoAlt}
                        style={{ height: '48px', width: 'auto' }}
                    />
                </div>

                {/* Store Badges + Learn More */}
                <div className="flex items-center" style={{ gap: '12px' }}>
                    {project.playStoreHref && (
                        <a
                            href={project.playStoreHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Get it on Google Play"
                        >
                            <img
                                src={playStoreImg}
                                alt="Google Play"
                                style={{ height: '40px', width: 'auto' }}
                            />
                        </a>
                    )}
                    {project.appStoreHref && (
                        <a
                            href={project.appStoreHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download on the App Store"
                        >
                            <img
                                src={appStoreImg}
                                alt="App Store"
                                style={{ height: '40px', width: 'auto' }}
                            />
                        </a>
                    )}
                    {project.learnMoreHref && (
                        <a
                            href={project.learnMoreHref}
                            className="inline-flex items-center font-body"
                            style={{
                                gap: '6px',
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '140%',
                                color: 'var(--content-accent, #131314)',
                            }}
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
