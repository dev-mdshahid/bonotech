// import { AnnouncementBar } from '@/components/sections/AnnouncementBar/AnnouncementBar'
import { Navbar } from '@/components/sections/Navbar/Navbar'
import { Hero } from '@/components/sections/Hero/Hero'
import { Clients } from '@/components/sections/Clients/Clients'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-surface-neutral text-content-primary">
      {/* <AnnouncementBar /> */}
      <Navbar />
      <Hero />
      <Clients />
    </main>
  )
}
