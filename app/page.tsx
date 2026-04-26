import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NowSection from '@/components/NowSection'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Writing from '@/components/Writing'
import YouTube from '@/components/YouTube'
import OpenTo from '@/components/OpenTo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getAllArticles } from '@/lib/articles'

export default function Home() {
  const articles = getAllArticles().slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <NowSection />
        <Projects />
        <Writing articles={articles} />
        <YouTube />
        <OpenTo />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
