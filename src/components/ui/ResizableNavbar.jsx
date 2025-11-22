import { useState, useEffect, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Utility function for className merging
const cn = (...classes) => classes.filter(Boolean).join(" ")

// Context to share scroll state
const NavbarContext = createContext({ scrolled: false })

// Main Navbar container
export const Navbar = ({ children, className }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    handleResize() // Check on mount
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // On mobile, always use full width
  const shouldShrink = scrolled && !isMobile

  return (
    <NavbarContext.Provider value={{ scrolled }}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 inset-x-0 z-50 mx-auto transition-all duration-300"
      >
        <motion.div
          animate={{
            width: shouldShrink ? "60%" : "95%",
            maxWidth: shouldShrink ? "700px" : "1400px",
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={cn(
            "mx-auto rounded-full border border-pink-200/50 backdrop-blur-xl shadow-glass-pink",
            className
          )}
        >
          {children}
        </motion.div>
      </motion.nav>
    </NavbarContext.Provider>
  )
}

// Desktop navigation body
export const NavBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "hidden lg:flex items-center justify-between px-6 py-3",
        className
      )}
    >
      {children}
    </div>
  )
}

// Navigation items for desktop
export const NavItems = ({ items, onItemClick, className }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {items.map((item, idx) => (
        <motion.button
          key={item.id || idx}
          onClick={() => onItemClick?.(item.id || item.link)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-pink-600"
        >
          {hoveredIdx === idx && (
            <motion.span
              layoutId="nav-highlight"
              className="absolute inset-0 rounded-full bg-pink-100/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="relative z-10">{item.label || item.name}</span>
        </motion.button>
      ))}
    </div>
  )
}

// Logo component
export const NavbarLogo = ({ children, onClick, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn("flex items-center gap-2 cursor-pointer", className)}
    >
      {children}
    </motion.div>
  )
}

// Logo text that hides on scroll
export const NavbarLogoText = ({ children, className }) => {
  const { scrolled } = useContext(NavbarContext)

  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Hook to access scroll state
export const useNavbarScroll = () => useContext(NavbarContext)

// CTA Button component
export const NavbarButton = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30",
    secondary:
      "bg-pink-100 text-pink-700 hover:bg-pink-200",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  )
}

// Mobile navigation container
export const MobileNav = ({ children, className }) => {
  return (
    <div className={cn("lg:hidden", className)}>
      {children}
    </div>
  )
}

// Mobile header
export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3",
        className
      )}
    >
      {children}
    </div>
  )
}

// Mobile menu toggle button
export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={cn(
        "relative w-10 h-10 flex items-center justify-center rounded-full",
        "bg-pink-100 hover:bg-pink-200 transition-colors",
        className
      )}
    >
      <div className="relative w-5 h-4 flex flex-col justify-between">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          className="block h-0.5 w-full bg-pink-600 rounded-full origin-left"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
          }}
          className="block h-0.5 w-full bg-pink-600 rounded-full"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          className="block h-0.5 w-full bg-pink-600 rounded-full origin-left"
        />
      </div>
    </motion.button>
  )
}

// Mobile menu
export const MobileNavMenu = ({ isOpen, onClose, children, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - starts below navbar (top-20) to not blur the navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed top-20 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* Menu panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "fixed top-20 left-4 right-4 z-50",
              "bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-pink-100",
              "overflow-hidden",
              className
            )}
          >
            <div className="flex flex-col p-4 gap-2">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Mobile nav item
export const MobileNavItem = ({ children, onClick, className }) => {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium",
        "hover:bg-pink-50 hover:text-pink-600 transition-colors",
        className
      )}
    >
      {children}
    </motion.button>
  )
}
