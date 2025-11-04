import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import SongCard from './SongCard'
import VideoModal from './VideoModal'
import ScrollReveal from '../common/ScrollReveal'
import { FaMusic, FaFilm, FaTv, FaGlobeAsia, FaCompactDisc } from 'react-icons/fa'
import { discographyData, categories, collaborations } from '../../data/songs'

const Discography = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filteredSongs = activeCategory === 'all' 
    ? discographyData 
    : discographyData.filter(song => song.category === activeCategory)

  const categoryIcons = {
    all: FaMusic,
    marathi: FaFilm,
    hindi: FaFilm,
    albums: FaCompactDisc,
    international: FaGlobeAsia,
    tv: FaTv
  }

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />

      <SectionHeading 
        title="Discography"
        subtitle="Explore my complete music portfolio"
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="flex flex-wrap justify-center gap-4 mt-16 mb-12">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id]
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-glow-pink'
                    : 'glass-pink text-pink-600 hover:shadow-glass-pink'
                }`}
              >
                <Icon className="text-lg" />
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white/20' 
                    : 'bg-pink-200'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            )
          })}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SongCard 
                song={song}
                onClick={() => setSelectedVideo(song)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredSongs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
            <FaMusic className="text-4xl text-pink-400" />
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-600 mb-2">
            Coming Soon
          </h3>
          <p className="text-gray-500">
            More songs in this category will be added soon
          </p>
        </motion.div>
      )}

      <ScrollReveal direction="up" delay={0.4}>
        <div className="mt-20">
          <h3 className="text-3xl font-display font-bold text-gradient-pink text-center mb-12">
            Collaborated With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {collaborations.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-pink rounded-2xl p-4 text-center hover:shadow-glow-pink transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white text-2xl font-bold shadow-glow-pink">
                  {artist.name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="text-sm font-semibold text-gray-700">{artist.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.6}>
        <div className="mt-16 glass-strong rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
            Available on All Platforms
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Listen to my songs on your favorite music streaming platforms including Spotify, YouTube Music, Apple Music, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://open.spotify.com/artist/4qqzMJcgDpO3CTWeolpESJ"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg"
            >
              Listen on Spotify
            </motion.a>
            <motion.a
              href="https://youtube.com/@rajeshwaripawar15"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg"
            >
              Watch on YouTube
            </motion.a>
          </div>
        </div>
      </ScrollReveal>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.youtubeId}
        title={selectedVideo?.title}
      />
    </section>
  )
}

export default Discography