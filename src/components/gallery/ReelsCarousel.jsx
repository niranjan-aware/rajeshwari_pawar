import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaPlay, FaInstagram } from 'react-icons/fa'
import { singerImages } from '../../utils/helpers'

const ReelsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reels = [
    {
      id: 1,
      image: singerImages.microphone,
      title: 'Recording Session',
      views: '24.5K'
    },
    {
      id: 2,
      image: singerImages.concert,
      title: 'Live Concert',
      views: '18.2K'
    },
    {
      id: 3,
      image: singerImages.performance1,
      title: 'Stage Performance',
      views: '31.8K'
    },
    {
      id: 4,
      image: singerImages.performance2,
      title: 'Behind the Scenes',
      views: '22.1K'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length)
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <img 
              src={reels[currentIndex].image}
              alt={reels[currentIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <FaPlay className="text-white text-3xl ml-1" />
            </motion.div>

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="glass-strong rounded-full px-4 py-2 backdrop-blur-xl">
                <span className="text-white text-sm font-semibold">Reels</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-glow-pink">
                <FaInstagram className="text-white text-lg" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-lg mb-2">{reels[currentIndex].title}</h3>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FaPlay className="text-xs" />
                <span>{reels[currentIndex].views} views</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 glass-strong rounded-full flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-xl"
        >
          <FaChevronLeft className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 glass-strong rounded-full flex items-center justify-center hover:scale-110 transition-transform backdrop-blur-xl"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-gradient-to-r from-pink-500 to-rose-500' 
                : 'w-2 bg-pink-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ReelsCarousel