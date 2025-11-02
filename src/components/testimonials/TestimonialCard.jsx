import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-pink rounded-3xl p-8 md:p-10 hover:shadow-glow-pink transition-all duration-300 ${
        testimonial.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xl font-bold shadow-glow-pink">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          {testimonial.featured && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
              <FaStar className="text-yellow-800 text-xs" />
            </div>
          )}
        </motion.div>

        <div>
          <h4 className="text-lg font-display font-bold text-pink-600">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>

      <div className="relative">
        <FaQuoteLeft className="text-3xl text-pink-300 mb-4" />
        <blockquote className={`text-gray-700 leading-relaxed italic ${
          testimonial.featured ? 'text-lg md:text-xl' : 'text-base'
        }`}>
          "{testimonial.quote}"
        </blockquote>
      </div>

      <div className="flex items-center gap-1 mt-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
          >
            <FaStar className="text-yellow-400 text-lg" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialCard