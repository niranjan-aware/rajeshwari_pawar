import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-2xl p-6 shadow-lg transition-all duration-300'
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card