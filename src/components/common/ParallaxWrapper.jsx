import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxWrapper = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const directionMultiplier = direction === 'down' ? -1 : 1
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, speed * 100 * directionMultiplier]
  )
  
  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxWrapper