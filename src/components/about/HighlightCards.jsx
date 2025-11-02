import { motion } from 'framer-motion'
import { FaMicrophone, FaTheaterMasks, FaPaintBrush, FaTrophy } from 'react-icons/fa'
import GlassCard from '../ui/GlassCard'

const HighlightCards = () => {
  const highlights = [
    {
      icon: FaMicrophone,
      title: 'Playback Singer',
      description: 'Featured in major Marathi and Hindi movies with renowned music directors',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: FaTheaterMasks,
      title: 'Bharatnatyam Vishaarad',
      description: 'Trained classical dancer with expertise in traditional Indian dance forms',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: FaPaintBrush,
      title: 'Interior Designer',
      description: 'Professional interior designer combining creativity with technical skills',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaTrophy,
      title: '1000+ Live Shows',
      description: 'Performed across India as co-singer with Late Bappi Lahiri for 8 years',
      color: 'from-rose-500 to-pink-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <GlassCard className="h-full text-center hover:shadow-glow-pink group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-glow-pink`}
            >
              <item.icon className="text-3xl text-white" />
            </motion.div>
            <h3 className="text-xl font-display font-bold text-pink-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}

export default HighlightCards