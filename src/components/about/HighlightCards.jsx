import { motion } from 'framer-motion'
import { FaMicrophone, FaTheaterMasks, FaPaintBrush, FaTrophy } from 'react-icons/fa'

const HighlightCards = () => {
  const highlights = [
    {
      icon: FaMicrophone,
      title: 'Playback Singer',
      description: 'Featured in major Marathi movies with renowned music directors',
      gradient: 'from-pink-500 via-rose-500 to-pink-600',
      iconBg: 'bg-pink-500',
      delay: 0
    },
    {
      icon: FaTheaterMasks,
      title: 'Bharatnatyam Vishaarad',
      description: 'Trained classical dancer with expertise in traditional Indian dance forms',
      gradient: 'from-rose-500 via-pink-500 to-rose-600',
      iconBg: 'bg-rose-500',
      delay: 0.1
    },
    {
      icon: FaPaintBrush,
      title: 'Interior Designer',
      description: 'Professional interior designer combining creativity with technical skills',
      gradient: 'from-pink-600 via-rose-600 to-pink-700',
      iconBg: 'bg-pink-600',
      delay: 0.2
    },
    {
      icon: FaTrophy,
      title: 'Masters in English Literature',
      description: 'from Pune University',
      gradient: 'from-rose-600 via-pink-600 to-rose-700',
      iconBg: 'bg-rose-600',
      delay: 0.3
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: item.delay }}
          whileHover={{ y: -8 }}
          className="group"
        >
          <div className="relative flex flex-col items-center justify-between h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100">
            
            <div className={`absolute inset-0 rounded-2xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />

            {/* Icon container */}
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`${item.iconBg} w-16 h-16 rounded-xl flex items-center justify-center shadow-md`}
              >
                <item.icon className="text-3xl text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* Bottom accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay + 0.2 }}
              className={`h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-6`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default HighlightCards