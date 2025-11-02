import { motion } from 'framer-motion'
import { FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { socialLinks, contactInfo } from '../../data/socialLinks'
import { scrollToSection } from '../../utils/helpers'

const Footer = () => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'music', label: 'Music' },
    { id: 'gallery', label: 'Gallery' }
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold text-gradient-pink mb-4">
              Rajeshwari Pawar
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Professional playback singer bringing melodies to life. Featured in Sajana movie and collaborated with legendary artists.
            </p>
            <div className="flex items-center gap-2 text-pink-500">
              <span>Made with</span>
              <FaHeart className="animate-pulse text-rose-500" />
              <span>for music</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold text-pink-600 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-pink-600 transition-colors hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold text-pink-600 mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-pink-500 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 hover:text-pink-600 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-pink-500 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  {contactInfo.location}
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-semibold text-pink-600 mb-6">
              Follow Me
            </h4>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-glow-pink"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="text-xl" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Connect with me on social media for latest updates and performances
            </p>
          </motion.div>
        </div>

        <div className="border-t border-pink-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-sm text-gray-600 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              © 2025 Rajeshwari Pawar. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400"></div>
    </footer>
  )
}

export default Footer