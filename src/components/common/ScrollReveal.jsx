import { motion } from 'framer-motion'

const ScrollReveal = ({ 
  children, 
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6
}) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 }
  }
  
  const initial = {
    opacity: 0,
    ...directions[direction]
  }
  
  const animate = {
    opacity: 1,
    x: 0,
    y: 0
  }
  
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal