import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { TermsOfService } from '@/pages/TermsOfService'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <main className="min-h-screen w-full bg-surface-neutral text-content-primary">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </main>
        </BrowserRouter>
// import { AnnouncementBar } from '@/components/sections/AnnouncementBar/AnnouncementBar'
import { Navbar } from '@/components/sections/Navbar/Navbar'
import { Hero } from '@/components/sections/Hero/Hero'
import { Clients } from '@/components/sections/Clients/Clients'
import { Introduction } from '@/components/sections/Introduction/Introduction'
import { WhatWeDo } from '@/components/sections/WhatWeDo/WhatWeDo'
import { Comparison } from '@/components/sections/Comparison/Comparison'
import { Timeline } from '@/components/sections/Timeline/Timeline'
import { Speed } from '@/components/sections/Speed/Speed'
import { Projects } from '@/components/sections/Projects/Projects'
import { BonoExperience } from '@/components/sections/BonoExperience/BonoExperience'
import { Testimonials } from '@/components/sections/Testimonials/Testimonials'
import { FAQ } from '@/components/sections/FAQ/FAQ'
import { Contact } from '@/components/sections/Contact/Contact'
import { Footer } from '@/components/sections/Footer/Footer'

export default function App() {
    return (
        <main className="min-h-screen w-full bg-surface-neutral text-content-primary">
            {/* <AnnouncementBar /> */}
            <Navbar />
            <Hero />
            <Clients />
            <Introduction />
            <Comparison />
            <WhatWeDo />
            <Timeline />
            <Speed />
            <Projects />
            <BonoExperience />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    )
}
