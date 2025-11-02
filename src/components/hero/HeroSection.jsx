import { motion } from 'framer-motion'
import { FaPlay, FaArrowDown, FaSpotify, FaYoutube } from 'react-icons/fa'
import Button from '../ui/Button'
import FloatingNotes from './FloatingNotes'
import SocialLinks from './SocialLinks'
import ParallaxWrapper from '../common/ParallaxWrapper'
import { singerImages } from '../../utils/helpers'
import { scrollToSection } from '../../utils/helpers'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: `url('${singerImages.hero}')`,
          filter: 'blur(2px)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/90 via-cream-50/80 to-rose-50/90" />
      
      <FloatingNotes />
      
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 glass-pink rounded-full text-sm font-semibold text-pink-600 inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                Available for Booking
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6"
            >
              <span className="block text-gray-800">Hello, I'm</span>
              <span className="block text-gradient-pink mt-2">Rajeshwari Pawar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-gray-700 mb-4">
                Playback Singer & Music Artist
              </p>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Voice of <span className="text-pink-600 font-semibold">Sajana</span> | 
                Co-Singer with <span className="text-pink-600 font-semibold">Bappi Lahiri</span> | 
                1000+ Live Shows
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={FaPlay}
                onClick={() => scrollToSection('music')}
              >
                Watch Showreel
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            >
              <span className="text-gray-600 font-medium">Listen on:</span>
              <a 
                href="https://open.spotify.com/artist/4qqzMJcgDpO3CTWeolpESJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-pink rounded-full hover:scale-105 transition-transform"
              >
                <FaSpotify className="text-green-500 text-xl" />
                <span className="text-sm font-semibold text-gray-700">Spotify</span>
              </a>
              <a 
                href="https://youtube.com/@rajeshwaripawar15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-pink rounded-full hover:scale-105 transition-transform"
              >
                <FaYoutube className="text-red-500 text-xl" />
                <span className="text-sm font-semibold text-gray-700">YouTube</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 lg:hidden flex justify-center"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          <ParallaxWrapper speed={0.3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img 
                      src={singerImages.about}
                      alt="Rajeshwari Pawar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 blur-3xl -z-10"
                />

                <motion.div
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 glass-pink rounded-full flex items-center justify-center shadow-glow-pink"
                >
                  <span className="text-3xl">🎤</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    rotate: -360
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 glass-rose rounded-full flex items-center justify-center shadow-glow-pink"
                >
                  <span className="text-2xl">🎵</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 -right-8 w-16 h-16 glass-pink rounded-full flex items-center justify-center shadow-glass"
                >
                  <span className="text-xl">🎶</span>
                </motion.div>
              </div>

              <div className="hidden lg:flex absolute -right-16 top-1/2 transform -translate-y-1/2">
                <SocialLinks vertical />
              </div>
            </motion.div>
          </ParallaxWrapper>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default HeroSection