import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import HighlightCards from './HighlightCards'
import QuoteCard from './QuoteCard'
import AnimatedCounter from '../ui/AnimatedCounter'
import Button from '../ui/Button'
import ParallaxWrapper from '../common/ParallaxWrapper'
import ScrollReveal from '../common/ScrollReveal'
import { FaDownload, FaAward, FaMicrophone, FaTv, FaGlobeAsia, FaCertificate, FaBuilding, FaUserGraduate } from 'react-icons/fa'
import { singerImages } from '../../utils/helpers'
import { achievements } from '../../data/awards'

const AboutSection = () => {
  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-30 -z-10" />
      
      <SectionHeading 
        title="About Me"
        subtitle="Professional Playback Singer from Pune, Maharashtra"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 mt-16">
        <ScrollReveal direction="left">
          <ParallaxWrapper speed={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <img 
                  src={singerImages.about}
                  alt="Rajeshwari Pawar"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-pink-500/20 to-transparent" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-6 -right-6 w-24 h-24 glass-pink rounded-full flex items-center justify-center shadow-glow-pink"
              >
                <FaMicrophone className="text-3xl text-pink-600" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-20 h-20 glass-rose rounded-full flex items-center justify-center shadow-glass"
              >
                <FaAward className="text-2xl text-rose-600" />
              </motion.div>
            </div>
          </ParallaxWrapper>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gradient-pink">
              Bringing Melodies to Life
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Professional playback singer with extensive experience in Marathi and Hindi cinema. 
              Featured in the latest movie <span className="font-semibold text-pink-600">SAJANA</span> (Released June 27, 2025) 
              with 4 songs including duets with <span className="font-semibold text-pink-600">Sonu Nigam</span> and 
              <span className="font-semibold text-pink-600"> Adarsh Shinde</span>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Performed 1000+ live shows across India with 8 years of extensive stage experience. Collaborated as Co-Singer with legendary <span className="font-semibold text-pink-600">Bappi Lahiri </span>  
              and shared stages with renowned artists including Sonu Nigam, Avadhoot Gupte, and Rahul Deshpande in various solo and ensemble performances.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 glass-pink rounded-full text-sm font-semibold text-pink-600">
                Playback Singer
              </span>
              <span className="px-4 py-2 glass-pink rounded-full text-sm font-semibold text-pink-600">
                Live Performer
              </span>
              <span className="px-4 py-2 glass-pink rounded-full text-sm font-semibold text-pink-600">
                Reality Show Finalist
              </span>
              <span className="px-4 py-2 glass-pink rounded-full text-sm font-semibold text-pink-600">
                Interior Designer
              </span>
            </div>

            <Button variant="champagne" size="md" icon={FaDownload}>
              Download Press Kit
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <HighlightCards />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
        {achievements.map((achievement, index) => (
          <ScrollReveal key={achievement.id} direction="up" delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-pink rounded-2xl p-6 text-center shadow-glass hover:shadow-glow-pink transition-all duration-300"
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-pink mb-2">
                <AnimatedCounter end={parseInt(achievement.number)} suffix={achievement.number.replace(/[0-9]/g, '')} />
              </div>
              <div className="text-sm font-semibold text-pink-600 mb-1">
                {achievement.label}
              </div>
              <div className="text-xs text-gray-600">
                {achievement.description}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <QuoteCard />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="glass-strong rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-8 text-center">
            Career Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                <FaMicrophone className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-pink-600 mb-2">Latest Release</h4>
                <p className="text-sm text-gray-600">4 songs in SAJANA movie with Sonu Nigam</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                <FaTv className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-pink-600 mb-2">Reality Shows</h4>
                <p className="text-sm text-gray-600">Finalist on Colors Marathi & ETV Marathi</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                <FaGlobeAsia className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-pink-600 mb-2">International</h4>
                <p className="text-sm text-gray-600">2 songs released at Tomorrowland Festival</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.25}>
        <div className="glass-strong rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-8 text-center">
            Training & Mentorship
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-pink rounded-2xl p-6 hover:shadow-glow-pink transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                  <FaMicrophone className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold text-pink-600 mb-3">
                    Music Training
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-pink-600">Mrs. Aparna Sant</span>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-pink-600">Dr. Sanjeev Shende</span>
                    </p>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full">
                    <FaUserGraduate className="text-pink-600 text-sm" />
                    <span className="text-sm font-semibold text-pink-700">Classical Training</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-pink rounded-2xl p-6 hover:shadow-glow-pink transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                  <FaUserGraduate className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold text-pink-600 mb-3">
                    Bharatnatyam Training
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-pink-600">Mrs. Anjali Bhatavdekar</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Trained classical dancer with Bharatnatyam Vishaarad certification
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full">
                    <FaUserGraduate className="text-rose-600 text-sm" />
                    <span className="text-sm font-semibold text-rose-700">Vishaarad Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200">
            <p className="text-center text-gray-700 leading-relaxed">
              Trained under renowned gurus in both <span className="font-semibold text-pink-600">Classical Music</span> and 
              <span className="font-semibold text-rose-600"> Bharatnatyam Dance</span>, combining technical excellence with artistic expression
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.3}>
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-8 text-center">
            Professional Credentials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-pink rounded-2xl p-6 hover:shadow-glow-pink transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold text-pink-600 mb-3">
                    Registered Singer
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Registered Singer in <span className="font-semibold text-pink-600">Akhil Bhartiya Marathi Chitrapat Mahamandal</span>
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-pink-700">Certified Professional</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-pink rounded-2xl p-6 hover:shadow-glow-pink transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                  <FaBuilding className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold text-pink-600 mb-3">
                    Production House
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Founder & Owner of <span className="font-semibold text-pink-600">Rajmudra Enterprises</span> - Registered Production House
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-rose-700">Active Enterprise</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-pink-600">Official Registration</p>
                  <p className="text-xs text-gray-600">Industry Recognized</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-pink-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <FaBuilding className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-600">Registered Enterprise</p>
                  <p className="text-xs text-gray-600">Licensed Production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default AboutSection