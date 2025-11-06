import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from './TestimonialCard'
import ScrollReveal from '../common/ScrollReveal'
import { FaQuoteRight, FaStar, FaMusic, FaTheaterMasks } from 'react-icons/fa'
import { testimonialsData } from '../../data/testimonials'

const TestimonialsSection = () => {
  const featuredTestimonial = testimonialsData.find(t => t.featured)
  const otherTestimonials = testimonialsData.filter(t => !t.featured)

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10 animate-float" />

      <SectionHeading 
        title="Testimonials"
        subtitle="What industry professionals and collaborators say"
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-5xl mx-auto mt-16 mb-12">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaQuoteRight className="text-5xl text-pink-400" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink">
                  Featured Review
                </h3>
              </div>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-gray-800 text-center leading-relaxed mb-8">
                "{featuredTestimonial.quote}"
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl font-bold shadow-glow-pink mb-4">
                  {featuredTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="text-2xl font-display font-bold text-gradient-pink mb-2">
                  {featuredTestimonial.name}
                </p>
                <p className="text-gray-600 mb-4">{featuredTestimonial.role}</p>
                <div className="flex items-center gap-1">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
        {otherTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            index={index} 
          />
        ))}
      </div>

      

      <ScrollReveal direction="up" delay={0.6}>
        <div className="mt-16 max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <FaStar className="text-yellow-400 text-3xl" />
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Working with legendary artists and accomplished professionals across the music industry. 
            Known for dedication, professionalism, and delivering exceptional vocal performances 
            that bring compositions to life.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.8}>
        <div className="mt-12 text-center">
          <motion.p
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg text-gray-600 italic"
          >
            "Music is the universal language that connects hearts"
          </motion.p>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default TestimonialsSection