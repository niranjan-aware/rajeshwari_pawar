import { motion } from 'framer-motion'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const QuoteCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative my-12"
    >
      <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-3xl opacity-20" />
        
        {/* <div className="relative z-10">
          <FaQuoteLeft className="text-4xl text-pink-300 mb-4" /> */}
          
          {/* <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-gray-800 leading-relaxed mb-6 text-center">
            "Rajeshwari is a sincere and brilliant artist. She sings really well. God bless."
          </blockquote> */}
          
          {/* <FaQuoteRight className="text-4xl text-pink-300 ml-auto mb-6" />
          
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl font-bold shadow-glow-pink">
              BL
            </div>
            <div className="text-left">
              <p className="text-xl font-display font-bold text-gradient-pink">
                Bappi Lahiri
              </p>
              <p className="text-gray-600 text-sm">
                Legendary Music Director
              </p>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </motion.div>
  )
}

export default QuoteCard