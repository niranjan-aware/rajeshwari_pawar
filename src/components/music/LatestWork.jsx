import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import SongCard from './SongCard'
import VideoModal from './VideoModal'
import ScrollReveal from '../common/ScrollReveal'
import { FaFilm, FaStar, FaMusic } from 'react-icons/fa'
import { latestMovieSongs } from '../../data/songs'

const LatestWork = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSongClick = (song) => {
    setSelectedVideo(song)
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section id="music" className="section-container relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-50/30 to-transparent -z-10" />
      
      <SectionHeading 
        title="Latest Work"
        subtitle="Featured in SAJANA Movie (Released June 27, 2025)"
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-4xl mx-auto mb-16 mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-3xl opacity-20" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaFilm className="text-4xl text-pink-600" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gradient-pink">
                  SAJANA
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-glow-pink">
                    <FaMusic className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-pink mb-1">4</div>
                  <div className="text-sm text-gray-600">Songs Featured</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-glow-pink">
                    <FaStar className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-pink mb-1">2</div>
                  <div className="text-sm text-gray-600">Duets with Sonu Nigam</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-glow-pink">
                    <FaFilm className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-pink mb-1">2025</div>
                  <div className="text-sm text-gray-600">Latest Release</div>
                </div>
              </div>

              <p className="text-center text-gray-700 leading-relaxed">
                Featured as the voice behind 4 beautiful songs in the movie SAJANA, 
                including duets with legendary singers <span className="font-semibold text-pink-600">Sonu Nigam</span>, 
                <span className="font-semibold text-pink-600"> Adarsh Shinde</span>, and 
                <span className="font-semibold text-pink-600"> Onkarswaroop Bagde</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {latestMovieSongs.map((song, index) => (
          <SongCard 
            key={song.id}
            song={song}
            onClick={() => handleSongClick(song)}
          />
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass-pink rounded-2xl px-8 py-4"
          >
            <p className="text-gray-700">
              <span className="font-semibold text-pink-600">SAJANA</span> is now playing in theatres! 
              Experience the magic of music on the big screen.
            </p>
          </motion.div>
        </div>
      </ScrollReveal>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleCloseModal}
        videoId={selectedVideo?.youtubeId}
        title={selectedVideo?.title}
      />
    </section>
  )
}

export default LatestWork