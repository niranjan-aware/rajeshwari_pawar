import { useState, useEffect } from 'react'

export const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])
  
  return offsetY
}