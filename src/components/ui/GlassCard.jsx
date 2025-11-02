import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  onClick,
  ...props 
}) => {
  const variants = {
    default: 'glass-pink',
    strong: 'glass-strong',
    rose: 'glass-rose',
    light: 'glass'
  }
  
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300'
  const hoverStyles = hover ? 'hover:scale-105 hover:shadow-glass-lg' : ''
  
  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard