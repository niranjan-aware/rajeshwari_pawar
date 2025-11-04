import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../common/ScrollReveal'
import { FaYoutube, FaMicrophone, FaMusic, FaTv, FaTheaterMasks, FaHeadphones, FaUserTie } from 'react-icons/fa'

const PlaylistsSection = () => {
  const playlists = [
    {
      id: 'live-performances',
      title: 'Live Performances',
      icon: FaMicrophone,
      url: 'https://youtube.com/playlist?list=PL440728Fu1jSVbkoxhmocZubMnukxuCap&si=fTTjD98r5QURhIPg',
      description: 'Watch energetic live performances from concerts across India',
      color: 'from-pink-400 to-rose-400',
      count: '50+ Videos'
    },
    {
      id: 'original-songs',
      title: 'Original Songs',
      icon: FaMusic,
      url: 'https://youtube.com/playlist?list=PL440728Fu1jT7YNEyNXyiFYuBOaG5qUdI&si=3lp_imFp9q9KEl1e',
      description: 'Collection of original compositions and playback songs',
      color: 'from-rose-400 to-pink-500',
      count: '40+ Videos'
    },
    {
      id: 'reality-shows',
      title: 'Reality Show Performances',
      icon: FaTv,
      url: 'https://youtube.com/playlist?list=PL440728Fu1jSidvhnnIP01XtsjNV82HsH&si=tiC41srN7ngvAWI7',
      description: 'Memorable performances from Colors Marathi & ETV Marathi',
      color: 'from-pink-500 to-rose-500',
      count: '30+ Videos'
    },
    {
      id: 'dance-videos',
      title: 'Dance Videos',
      icon: FaTheaterMasks,
      url: 'https://youtube.com/playlist?list=PL440728Fu1jSi9Wn1Bwe5_2ixfeJBHIvO&si=QJcRarDSqLmKk0NV',
      description: 'Bharatnatyam and contemporary dance performances',
      color: 'from-rose-500 to-pink-600',
      count: '20+ Videos'
    },
    {
      id: 'cover-songs',
      title: 'Cover Songs',
      icon: FaHeadphones,
      url: 'https://youtube.com/playlist?list=PL440728Fu1jS1TU3ZOrfIjArfQ82B3yiR&si=4bVGFUg_cOOiBOdG',
      description: 'Beautiful renditions of popular songs',
      color: 'from-pink-600 to-rose-600',
      count: '25+ Videos'
    },
    {
      id: 'interviews',
      title: 'Personal Interviews',
      icon: FaUserTie,
      url: 'https://youtube.com/playlist?list=PL440728Fu1jRqkjg-oBS4egT5liGhPJH3&si=xgeAIdOsTWrfqo45',
      description: 'Exclusive interviews and behind-the-scenes conversations',
      color: 'from-rose-600 to-pink-700',
      count: '15+ Videos'
    }
  ]

  return (
    <section id="playlists" className="section-container relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20 -z-10 animate-float-delayed" />

      <SectionHeading 
        title="YouTube Playlists"
        subtitle="Explore curated collections of performances and content"
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-6xl mx-auto mt-16 mb-12 glass-strong rounded-3xl p-8 md:p-12 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <FaYoutube className="text-4xl text-white" />
            </div>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
            Comprehensive Video Collection
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Access organized playlists featuring live performances, original compositions, reality show highlights, 
            dance videos, cover songs, and personal interviews - all in one place.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {playlists.map((playlist, index) => (
          <ScrollReveal key={playlist.id} direction="up" delay={0.1 * index}>
            <motion.a
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.02 }}
              className="block glass-pink rounded-2xl overflow-hidden hover:shadow-glow-pink transition-all duration-300 group"
            >
              <div className={`relative h-32 bg-gradient-to-br ${playlist.color} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <playlist.icon className="text-3xl text-pink-600" />
                </motion.div>

                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                    <FaYoutube className="text-white text-lg" />
                    <span className="text-white text-xs font-semibold">Playlist</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors">
                  {playlist.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {playlist.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">{playlist.count}</span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold rounded-full shadow-md group-hover:shadow-lg transition-all duration-300"
                  >
                    Watch Now
                  </motion.div>
                </div>
              </div>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="mt-16 max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-6">
            Subscribe for Latest Updates
          </h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Don't miss out on new performances, original songs, and exclusive content. 
            Subscribe to the YouTube channel for regular updates.
          </p>
          <motion.a
            href="https://youtube.com/@rajeshwaripawar15"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg"
          >
            <FaYoutube className="text-2xl" />
            Subscribe on YouTube
          </motion.a>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.6}>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
          >
            <div className="text-4xl mb-3">🎤</div>
            <h4 className="font-display font-semibold text-pink-600 mb-2">180+ Videos</h4>
            <p className="text-sm text-gray-600">Total Content</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
          >
            <div className="text-4xl mb-3">📺</div>
            <h4 className="font-display font-semibold text-pink-600 mb-2">6 Playlists</h4>
            <p className="text-sm text-gray-600">Organized Collections</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
          >
            <div className="text-4xl mb-3">⭐</div>
            <h4 className="font-display font-semibold text-pink-600 mb-2">HD Quality</h4>
            <p className="text-sm text-gray-600">High Resolution</p>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default PlaylistsSection