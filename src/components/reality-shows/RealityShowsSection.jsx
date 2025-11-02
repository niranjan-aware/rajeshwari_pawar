import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ShowCard from './ShowCard'
import ScrollReveal from '../common/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { FaTv, FaStar, FaMicrophone, FaTrophy } from 'react-icons/fa'

const RealityShowsSection = () => {
  const shows = [
    {
      id: 'sur-nava-dhyas-nava',
      name: 'Sur Nava Dhyas Nava',
      channel: 'Colors Marathi',
      year: '2018',
      achievement: 'Finalist',
      description: 'Competed among top singers from Maharashtra and reached the finals with outstanding performances that captivated audiences and judges alike.',
      logo: '🎤'
    },
    {
      id: 'gaurav-maharashtracha',
      name: 'Gaurav Maharashtracha',
      channel: 'ETV Marathi',
      year: '2015',
      achievement: 'Finalist',
      description: 'Showcased exceptional talent in this prestigious competition, earning recognition for vocal excellence and stage presence throughout the season.',
      logo: '⭐'
    }
  ]

  const stats = [
    {
      icon: FaTv,
      number: 2,
      label: 'Reality Shows',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: FaStar,
      number: 2,
      label: 'Finalist Positions',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: FaMicrophone,
      number: 50,
      suffix: '+',
      label: 'TV Performances',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaTrophy,
      number: 100,
      suffix: '%',
      label: 'Dedication',
      color: 'from-rose-500 to-pink-600'
    }
  ]

  const channels = [
    { name: 'Colors Marathi', color: 'bg-purple-500' },
    { name: 'ETV Marathi', color: 'bg-blue-500' },
    { name: 'Sony Television', color: 'bg-red-500' },
    { name: 'Dangal TV', color: 'bg-orange-500' },
    { name: 'Zee Marathi', color: 'bg-yellow-500' }
  ]

  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10" />

      <SectionHeading 
        title="Reality Shows & TV"
        subtitle="Featured on popular television shows across India"
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
                <AnimatedCounter end={stat.number} suffix={stat.suffix || ''} duration={2} />
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {shows.map((show, index) => (
          <ShowCard key={show.id} show={show} index={index} />
        ))}
      </div>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <div className="text-6xl">📺</div>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-pink mb-4">
              Television Journey
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Participated in competitive reality shows that tested vocal abilities, stage presence, 
              and versatility. Reached finals in both major competitions, earning recognition from 
              renowned judges and winning hearts of millions of viewers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                <FaStar className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-pink-600 mb-2">Sur Nava Dhyas Nava</h4>
                <p className="text-sm text-gray-600">Colors Marathi's prestigious singing competition (2018)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-glow-pink">
                <FaTrophy className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-pink-600 mb-2">Gaurav Maharashtracha</h4>
                <p className="text-sm text-gray-600">ETV Marathi's talent showcase platform (2015)</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.6}>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-gradient-pink text-center mb-8">
            Featured On
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass-pink rounded-full px-6 py-3 hover:shadow-glow-pink transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${channel.color}`} />
                  <span className="text-sm font-semibold text-gray-700">{channel.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.8}>
        <div className="mt-16 text-center max-w-3xl mx-auto glass-pink rounded-3xl p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-pink-600">Playback for TV serials</span> on major channels including 
            Sony Television, Dangal TV, and Zee Marathi. Brought life to characters through memorable songs 
            that resonated with audiences across India.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default RealityShowsSection