import { motion } from 'framer-motion'
import { FaTv, FaStar } from 'react-icons/fa'

const ShowCard = ({ show, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-pink rounded-2xl overflow-hidden hover:shadow-glow-pink transition-all duration-300 group"
    >
      <div className="relative h-48 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        />
        
        <div className="relative z-10 text-center">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-2xl"
          >
            <FaTv className="text-4xl text-pink-600" />
          </motion.div>
          <div className="px-4 py-2 glass-strong rounded-full inline-block">
            <span className="text-white font-bold text-sm">{show.channel}</span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-3 py-1 bg-yellow-400 rounded-full shadow-lg">
            <FaStar className="text-yellow-800 text-sm" />
            <span className="text-yellow-800 text-xs font-bold">Finalist</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-pink-600 mb-2 group-hover:text-pink-700 transition-colors">
          {show.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs font-semibold rounded-full">
            {show.year}
          </span>
          <span className="px-3 py-1 bg-rose-100 text-rose-600 text-xs font-semibold rounded-full">
            {show.achievement}
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {show.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-pink-200">
          <span className="text-xs text-gray-500 font-medium">{show.channel}</span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-md"
          >
            <FaTv className="text-white text-sm" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ShowCard