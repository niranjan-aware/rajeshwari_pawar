import { useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [start, setStart] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '10s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '30s')
      }
    }
  }

  // Manual scroll handlers - Fixed to scroll the container
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeft(containerRef.current.scrollLeft)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing'
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
    const walk = (x - startX) * 2.5 // Scroll speed multiplier
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX
    const walk = (x - startX) * 2.5
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-x-auto',
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ 
        cursor: isDragging ? 'grabbing' : 'grab',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          isDragging && '[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] relative flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer select-none"
          >
            <img
              src={item.image}
              alt={item.alt || 'Gallery image'}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 pointer-events-none"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .scroller::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default InfiniteMovingCards