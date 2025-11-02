import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import AwardCard from './AwardCard'
import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../common/ScrollReveal'
import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa'
import { awardsData } from '../../data/awards'

const AwardsSection = () => {
  const stats = [
    {
      icon: FaTrophy,
      number: 15,
      suffix: '+',
      label: 'Awards Won',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: FaMedal,
      number: 4,
      suffix: '',
      label: 'Major Honors 2024-25',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: FaStar,
      number: 2,
      suffix: '',
      label: 'Reality Show Finals',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaAward,
      number: 8,
      suffix: '+',
      label: 'Years Excellence',
      color: 'from-rose-500 to-pink-600'
    }
  ]

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20 -z-10 animate-float-delayed" />

      <SectionHeading 
        title="Awards & Recognition"
        subtitle="Honored with prestigious awards for excellence in music"
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-pink rounded-2xl p-6 text-center hover:shadow-glow-pink transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-glow-pink`}
              >
                <stat.icon className="text-2xl text-white" />
              </motion.div>
              <div className="text-4xl font-bold text-gradient-pink mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2} />
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="max-w-4xl mx-auto mb-12 glass-strong rounded-3xl p-8 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <FaTrophy className="text-6xl text-gradient-pink" />
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
            Latest Achievements 2024-2025
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Recognized for outstanding contribution to Indian music and cinema with multiple prestigious awards 
            including the Balgandharva Vishesh Puraskar, Dadasaheb Phalke Cine Award, Maharashtra Ratna Puraskar, 
            and Dhar Kulbhushan Puraskar.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {awardsData.map((award, index) => (
          <AwardCard key={award.id} award={award} index={index} />
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.6}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-16 max-w-4xl mx-auto glass-pink rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-3">🎵</div>
              <h4 className="font-display font-semibold text-pink-600 mb-2">Musical Excellence</h4>
              <p className="text-sm text-gray-600">Recognized for outstanding vocal performance</p>
            </div>
            <div>
              <div className="text-5xl mb-3">🎬</div>
              <h4 className="font-display font-semibold text-pink-600 mb-2">Cinema Contribution</h4>
              <p className="text-sm text-gray-600">Honored for playback singing in films</p>
            </div>
            <div>
              <div className="text-5xl mb-3">⭐</div>
              <h4 className="font-display font-semibold text-pink-600 mb-2">Cultural Impact</h4>
              <p className="text-sm text-gray-600">State recognition for arts & culture</p>
            </div>
          </div>
        </motion.div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.8}>
        <div className="mt-16 text-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <p className="text-lg text-gray-600 italic">
              "Success is not just about winning awards, but about touching hearts through music"
            </p>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default AwardsSection