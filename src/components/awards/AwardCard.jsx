import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'

const AwardCard = ({ award, index }) => {
  const categoryColors = {
    music: 'from-pink-400 to-rose-400',
    special: 'from-rose-400 to-pink-500',
    cinema: 'from-pink-500 to-rose-500',
    state: 'from-rose-500 to-pink-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-pink rounded-2xl p-6 hover:shadow-glow-pink transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br ${categoryColors[award.category]} flex items-center justify-center shadow-glow-pink`}
        >
          <span className="text-3xl">{award.icon}</span>
        </motion.div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-display font-bold text-pink-600 group-hover:text-pink-700 transition-colors">
              {award.title}
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-pink-200 to-rose-200 text-pink-700 text-xs font-semibold rounded-full">
              {award.year}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-2 font-medium">
            {award.organization}
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            {award.description}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className="mt-4 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-full origin-left"
      />
    </motion.div>
  )
}

export default AwardCard