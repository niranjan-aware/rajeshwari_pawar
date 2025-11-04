import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaYoutube, FaTrophy, FaMicrophone, FaStar } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../common/ScrollReveal'
import VideoModal from '../music/VideoModal'
import { showreelData } from '../../data/songs'

const ShowreelSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const highlights = [
    {
      icon: FaMicrophone,
      text: 'Live Performances',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: FaTrophy,
      text: 'Award Shows',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: FaStar,
      text: 'Reality Shows',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-pink-50 to-cream-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10" />

      <SectionHeading 
        title="Showreel"
        subtitle="Watch highlights from my performances and achievements"
      />

      <div className="max-w-5xl mx-auto mt-16">
        <ScrollReveal direction="up">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={showreelData.thumbnail}
                alt={showreelData.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300" />

              <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-pink-500 transition-colors duration-300"
              >
                <FaPlay className="text-pink-600 group-hover:text-white text-3xl ml-2" />
              </motion.div>

              <div className="absolute top-6 left-6 right-6">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="glass-strong rounded-2xl px-6 py-4 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaYoutube className="text-red-500 text-2xl" />
                    <h3 className="text-white font-display font-bold text-xl">
                      Performance Showreel
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm">
                    {showreelData.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-glow-pink flex items-center gap-2"
                  >
                    <FaPlay className="text-sm" />
                    Watch Full Video
                  </motion.button>

                  <div className="glass-strong rounded-full px-4 py-2 backdrop-blur-xl">
                    <span className="text-white text-sm font-semibold">HD Quality</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400 to-rose-400 blur-2xl -z-10"
            />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-glow-pink`}
                >
                  <item.icon className="text-2xl text-white" />
                </motion.div>
                <p className="text-gray-700 font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 glass-strong rounded-3xl p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the journey of <span className="font-semibold text-pink-600">1000+ live performances</span> across India, 
              featuring collaborations with legendary artists like Amit Kumar, Sumeet Raghavan, Avadhoot Gupte, Shabbir Kumar and unforgettable moments from reality shows, 
              award ceremonies, and concerts.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <VideoModal
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        videoId={showreelData.youtubeId}
        title={showreelData.title}
      />
    </section>
  )
}

export default ShowreelSection