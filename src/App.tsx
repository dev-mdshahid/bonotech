// import { AnnouncementBar } from '@/components/sections/AnnouncementBar'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-surface-neutral text-content-primary">
      {/* <AnnouncementBar /> */}
      <Navbar />
      <Hero />
    </main>
  )
}
