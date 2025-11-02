import { motion } from 'framer-motion'
import { FaMusic } from 'react-icons/fa'
import { IoMusicalNotes } from 'react-icons/io5'
import { GiMusicalNotes } from 'react-icons/gi'

const FloatingNotes = () => {
  const noteIcons = [FaMusic, IoMusicalNotes, GiMusicalNotes]
  
  const notes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    Icon: noteIcons[i % noteIcons.length],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    size: 20 + Math.random() * 30,
    opacity: 0.1 + Math.random() * 0.3
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note) => (
        <motion.div
          key={note.id}
          className="absolute"
          style={{
            left: note.left,
            bottom: '-50px'
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(note.id) * 50],
            rotate: [0, 360],
            opacity: [0, note.opacity, note.opacity, 0]
          }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <note.Icon 
            className="text-pink-300"
            style={{ fontSize: `${note.size}px` }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingNotes