import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import LatestWork from './components/music/LatestWork'
import ShowreelSection from './components/showreel/ShowreelSection'
import Discography from './components/music/Discography'
import AwardsSection from './components/awards/AwardsSection'
import RealityShowsSection from './components/reality-shows/RealityShowsSection'
import GallerySection from './components/gallery/GallerySection'
import TestimonialsSection from './components/testimonials/TestimonialsSection'
import ContactSection from './components/contact/ContactSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-cream-50 to-rose-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-pink-200 rounded-full animate-ping"></div>
            <div className="absolute inset-0 border-4 border-t-pink-500 border-r-rose-500 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-display font-bold text-gradient-pink">Loading...</h2>
          <p className="mt-2 text-pink-400 font-script text-lg">Rajeshwari Pawar</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-cream-50 to-rose-50 -z-10"></div>
      
      <div className="fixed inset-0 opacity-30 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-champagne-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
      </div>

      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <LatestWork />
        <ShowreelSection />
        <Discography />
        <AwardsSection />
        <RealityShowsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App