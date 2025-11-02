import { motion } from 'framer-motion'
import { FaMusic } from 'react-icons/fa'

const MusicNotes = ({ count = 8 }) => {
  const notes = Array.from({ length: count }, (_, i) => i)
  
  const getRandomPosition = () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`
  })
  
  const getRandomDelay = () => Math.random() * 2
  const getRandomDuration = () => 4 + Math.random() * 4
  const getRandomSize = () => 16 + Math.random() * 24
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note) => {
        const position = getRandomPosition()
        const delay = getRandomDelay()
        const duration = getRandomDuration()
        const size = getRandomSize()
        
        return (
          <motion.div
            key={note}
            className="absolute"
            style={{
              left: position.left,
              top: position.top
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.6, 0.4, 0.6, 0],
              y: [-20, -100],
              rotate: [0, 360]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaMusic 
              className="text-pink-300" 
              style={{ fontSize: `${size}px` }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default MusicNotes