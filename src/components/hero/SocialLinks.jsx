import { motion } from 'framer-motion'
import { socialLinks } from '../../data/socialLinks'

const SocialLinks = ({ vertical = false, className = '' }) => {
  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 glass-pink rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md hover:shadow-glow-pink overflow-hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.5 + index * 0.1,
            type: 'spring',
            stiffness: 200
          }}
          whileHover={{ 
            y: -5,
            rotate: [0, -10, 10, -10, 0]
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ backgroundColor: social.color }}
          />
          <social.icon 
            className="text-xl relative z-10 transition-colors duration-300" 
            style={{ color: social.color }}
          />
          
          <motion.div
            className="absolute -bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-bottom-12 transition-all duration-300 pointer-events-none"
          >
            {social.name}
          </motion.div>
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks