import { motion } from 'framer-motion'

const SectionHeading = ({ 
  title, 
  subtitle, 
  className = '',
  align = 'center',
  variant = 'gradient'
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const titleVariants = {
    gradient: 'text-gradient-pink',
    solid: 'text-pink-600',
    rose: 'text-gradient-rose',
    champagne: 'text-gradient-champagne'
  }
  
  return (
    <div className={`${alignments[align]} ${className}`}>
      <motion.h2 
        className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 ${titleVariants[variant]}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  )
}

export default SectionHeading