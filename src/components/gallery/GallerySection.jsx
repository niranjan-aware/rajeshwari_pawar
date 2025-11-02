import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import InstagramFeed from './InstagramFeed'
import ReelsCarousel from './ReelsCarousel'
import ScrollReveal from '../common/ScrollReveal'
import Button from '../ui/Button'
import { FaInstagram, FaImages, FaVideo, FaCamera } from 'react-icons/fa'

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('photos')

  const stats = [
    {
      icon: FaImages,
      number: '500+',
      label: 'Photos',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: FaVideo,
      number: '100+',
      label: 'Videos',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: FaCamera,
      number: '50+',
      label: 'Events',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="gallery" className="section-container relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20 -z-10" />

      <SectionHeading 
        title="Gallery"
        subtitle="Moments from performances, events, and behind the scenes"
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-glow-pink`}
              >
                <stat.icon className="text-xl text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gradient-pink mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.3}>
        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            onClick={() => setActiveTab('photos')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'photos'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-glow-pink'
                : 'glass-pink text-pink-600 hover:shadow-glass-pink'
            }`}
          >
            <FaImages className="text-lg" />
            Photos
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('reels')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'reels'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-glow-pink'
                : 'glass-pink text-pink-600 hover:shadow-glass-pink'
            }`}
          >
            <FaVideo className="text-lg" />
            Reels
          </motion.button>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto mb-12">
        {activeTab === 'photos' ? (
          <motion.div
            key="photos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <InstagramFeed />
          </motion.div>
        ) : (
          <motion.div
            key="reels"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ReelsCarousel />
          </motion.div>
        )}
      </div>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-12 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-glow-pink">
              <FaInstagram className="text-4xl text-white" />
            </div>
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
            Follow on Instagram
          </h3>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Stay updated with latest performances, behind-the-scenes moments, and upcoming events. 
            Join thousands of music lovers on Instagram for daily updates and exclusive content.
          </p>

          <Button
            variant="primary"
            size="lg"
            icon={FaInstagram}
            href="https://www.instagram.com/rajeshwari.music"
          >
            Follow @rajeshwari.music
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.6}>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
          >
            <div className="text-4xl mb-3">🎤</div>
            <h4 className="font-display font-semibold text-pink-600 mb-2">Live Performances</h4>
            <p className="text-sm text-gray-600">Concert moments and stage highlights</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
          >
            <div className="text-4xl mb-3">🎬</div>
            <h4 className="font-display font-semibold text-pink-600 mb-2">Behind the Scenes</h4>
            <p className="text-sm text-gray-600">Recording sessions and rehearsals</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
          >
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="font-display font-semibold text-pink-600 mb-2">Award Ceremonies</h4>
            <p className="text-sm text-gray-600">Special moments and achievements</p>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default GallerySection