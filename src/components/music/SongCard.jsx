import { motion } from 'framer-motion'
import { FaPlay, FaYoutube, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'

const SongCard = ({ song, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleClick = () => {
    if (song.isInstagram && song.instagramUrl) {
      window.open(song.instagramUrl, '_blank')
    } else {
      onClick()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="glass-pink rounded-2xl overflow-hidden shadow-glass hover:shadow-glow-pink transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={song.thumbnail}
            alt={song.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'blur-0' : 'blur-md'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl ${
              song.isInstagram ? 'group-hover:bg-pink-500' : 'group-hover:bg-pink-500'
            } transition-colors duration-300`}
          >
            <FaPlay className={`${song.isInstagram ? 'text-pink-600' : 'text-pink-600'} group-hover:text-white text-2xl ml-1`} />
          </motion.div>

          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 glass-strong rounded-full flex items-center gap-2">
              {song.isInstagram ? (
                <>
                  <FaInstagram className="text-pink-500" />
                  <span className="text-white text-xs font-semibold">Instagram</span>
                </>
              ) : (
                <>
                  <FaYoutube className="text-red-500" />
                  <span className="text-white text-xs font-semibold">YouTube</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors">
            {song.title}
          </h3>
          
          {song.movie && (
            <p className="text-sm text-gray-600 mb-2">
              From: <span className="font-semibold text-pink-500">{song.movie}</span>
            </p>
          )}

          {song.label && (
            <p className="text-sm text-gray-600 mb-2">
              Label: <span className="font-semibold text-pink-500">{song.label}</span>
            </p>
          )}
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>
            <span>{song.type}</span>
            {song.coSinger && (
              <>
                <span>•</span>
                <span>with {song.coSinger}</span>
              </>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{song.artist}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold rounded-full hover:shadow-glow-pink transition-all duration-300"
            >
              {song.isInstagram ? 'View on Instagram' : 'Watch Now'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SongCard