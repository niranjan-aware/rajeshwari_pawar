import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ContactForm from './ContactForm'
import ScrollReveal from '../common/ScrollReveal'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaMicrophone, FaMusic } from 'react-icons/fa'
import { contactInfo, socialLinks } from '../../data/socialLinks'

const ContactSection = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: contactInfo.location,
      href: null,
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const services = [
    {
      icon: FaMicrophone,
      title: 'Playback Singing',
      description: 'Professional recording for movies and albums'
    },
    {
      icon: FaMusic,
      title: 'Live Performances',
      description: 'Concerts, events, and cultural programs'
    },
    {
      icon: FaClock,
      title: 'Collaborations',
      description: 'Music projects and artistic partnerships'
    }
  ]

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20 -z-10 animate-float-delayed" />

      <SectionHeading 
        title="Get In Touch"
        subtitle="Let's collaborate on your next project"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
        <ScrollReveal direction="left">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
                Let's Create Magic Together
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Available for playback singing, live performances, and musical collaborations. 
                Whether you're planning a movie, album, concert, or special event, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      className="flex items-center gap-4 glass-pink rounded-2xl p-4 hover:shadow-glow-pink transition-all duration-300"
                    >
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center shadow-glow-pink flex-shrink-0`}>
                        <method.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{method.title}</p>
                        <p className="text-gray-800 font-semibold">{method.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 glass-pink rounded-2xl p-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center shadow-glow-pink flex-shrink-0`}>
                        <method.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">{method.title}</p>
                        <p className="text-gray-800 font-semibold">{method.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <h4 className="text-xl font-display font-bold text-pink-600 mb-4">
                Available For
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <service.icon className="text-pink-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{service.title}</p>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-display font-bold text-pink-600 mb-4">
                Connect on Social Media
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 glass-pink rounded-full flex items-center justify-center hover:shadow-glow-pink transition-all duration-300"
                  >
                    <social.icon className="text-xl" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-display font-bold text-gradient-pink mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="max-w-4xl mx-auto mt-16 glass-pink rounded-3xl p-8 md:p-12 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">🎤</div>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
            Let's Bring Your Vision to Life
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
            With experience in playback singing for major productions, 1000+ live shows, and collaborations 
            with legendary artists, I'm ready to contribute my voice to your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Currently Available
            </span>
            <span>•</span>
            <span>Quick Response Time</span>
            <span>•</span>
            <span>Professional Service</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default ContactSection