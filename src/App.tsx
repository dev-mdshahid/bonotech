// import { AnnouncementBar } from '@/components/sections/AnnouncementBar/AnnouncementBar'
import { Navbar } from '@/components/sections/Navbar/Navbar'
import { Hero } from '@/components/sections/Hero/Hero'
import { Clients } from '@/components/sections/Clients/Clients'
import { WhatWeDo } from '@/components/sections/WhatWeDo/WhatWeDo'
import { Projects } from '@/components/sections/Projects/Projects'
import { Testimonials } from '@/components/sections/Testimonials/Testimonials'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-surface-neutral text-content-primary">
      {/* <AnnouncementBar /> */}
      <Navbar />
      <Hero />
      <Clients />
      <WhatWeDo />
      <Projects />
      <Testimonials />
    </main>
  )
}
