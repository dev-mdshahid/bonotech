import { ArrowRight } from 'lucide-react'
import type { ProjectCardProps } from '../Projects.types'

import playStoreImg from '@/assets/playstore.png'
import appStoreImg from '@/assets/apple-store.png'

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className="relative w-full overflow-hidden flex flex-col md:flex-row items-center max-w-328 min-h-auto md:min-h-146.5 px-6 py-12 md:px-8 md:pt-22 md:pb-22 gap-8 md:gap-12 rounded-4xl border"
            style={{
                borderColor: project.borderColor,
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
                    className="h-full w-auto object-contain max-h-[90%]"
                    style={{ opacity: project.opacity ? project.opacity / 100 : 1 }}
                />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col items-center md:items-end justify-end shrink-0 flex-1 gap-6 self-stretch text-center md:text-right order-2 md:order-1">
                {/* Category Pill */}
                <span
                    className="inline-flex items-center justify-center font-body text-sm font-medium leading-[1.4] tracking-[0.01em] text-white rounded-full px-4 py-3 border"
                    style={{
                        borderColor: project.borderColor,
                        backgroundColor: project.buttonColor,
                    }}
                >
                    {project.category}
                </span>

                {/* Title */}
                <h3 className="font-body font-semibold text-[28px] leading-[1.2] tracking-[-0.005em] text-content-accent">
                    {project.title}
                </h3>

                {/* Subtitle */}
                <p className="font-body font-normal text-base leading-normal tracking-[-0.016em] text-content-accent-dark max-w-100">
                    {project.subtitle}
                </p>
            </div>

            {/* Center Mockup */}
            <div className="relative z-10 flex items-center justify-center shrink-0 order-1 md:order-2">
                <img
                    src={project.mockupSrc}
                    alt={`${project.title} mockup`}
                    className="w-60 md:w-77.5 h-auto drop-shadow-[0px_0px_120px_rgba(0,0,0,0.3)]"
                />
            </div>

            {/* Right Content */}
            <div className="relative z-10 flex flex-col items-center md:items-start justify-end shrink-0 flex-1 gap-8 self-stretch order-3">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={project.logoSrc}
                        alt={project.logoAlt}
                        className="h-12 w-auto"
                    />
                </div>

                {/* Store Badges */}
                <div className="flex items-center gap-3">
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
                                className="h-10 w-auto"
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
                                className="h-10 w-auto"
                            />
                        </a>
                    )}
                </div>

                {/* Learn More - Desktop only */}
                {project.learnMoreHref && (
                    <a
                        href={project.learnMoreHref}
                        className="hidden md:inline-flex items-center gap-1.5 font-body text-sm font-medium leading-[1.4] text-content-accent"
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                    </a>
                )}
            </div>

            {/* Learn More - Mobile only, at bottom */}
            {project.learnMoreHref && (
                <a
                    href={project.learnMoreHref}
                    className="md:hidden w-full flex items-center justify-center font-body text-sm font-medium leading-[1.4] text-content-accent order-4"
                >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
            )}
        </div>
    )
}
