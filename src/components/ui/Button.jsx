import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  icon: Icon,
  href,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-3 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4'
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:shadow-glow-pink focus:ring-pink-300',
    secondary: 'glass-pink text-pink-600 hover:bg-pink-100 hover:shadow-glass-pink focus:ring-pink-200',
    outline: 'border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:ring-pink-300',
    ghost: 'text-pink-600 hover:bg-pink-50 focus:ring-pink-200',
    champagne: 'bg-gradient-to-r from-champagne-400 to-champagne-600 text-gray-800 hover:from-champagne-500 hover:to-champagne-700 hover:shadow-lg focus:ring-champagne-300'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
    xl: 'px-12 py-6 text-xl'
  }
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const ButtonContent = () => (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  )
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <ButtonContent />
      </motion.a>
    )
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  )
}

export default Button