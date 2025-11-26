import { motion } from "framer-motion";
import { FaPlay, FaArrowDown, FaSpotify, FaYoutube } from "react-icons/fa";
import Button from "../ui/Button";
import FloatingNotes from "./FloatingNotes";
import SocialLinks from "./SocialLinks";
import ParallaxWrapper from "../common/ParallaxWrapper";
import { singerImages } from "../../utils/helpers";
import { scrollToSection } from "../../utils/helpers";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative  flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('${singerImages.hero}')`,
          filter: "blur(2px)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/90 via-cream-50/80 to-rose-50/90" />

      <FloatingNotes />

      <div className="absolute top-1/4 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-300/30 dark:border-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />{" "}
              <span className="text-sm font-medium  text-pink-600">
                Available for Booking
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6"
            >
              <span className="block text-gray-800">Hello, I'm</span>
              <span className="block text-gradient-pink mt-2">
                Rajeshwari Pawar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-gray-700 mb-4">
                Playback Singer & Music Artist
              </p>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Voice of{" "}
                <span className="text-pink-600 font-semibold">Sajana</span> |
                Co-Singer of Bappi Lahiri | 1000+ Live Shows
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                icon={FaPlay}
                onClick={() => scrollToSection("music")}
              >
                Watch Showreel
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            >
              <span className="text-gray-600 font-medium">Listen on:</span>
              <a
                href="https://open.spotify.com/artist/4qqzMJcgDpO3CTWeolpESJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-pink rounded-full hover:scale-105 transition-transform"
              >
                <FaSpotify className="text-green-500 text-xl" />
                <span className="text-sm font-semibold text-gray-700">
                  Spotify
                </span>
              </a>
              <a
                href="https://youtube.com/@rajeshwaripawar15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-pink rounded-full hover:scale-105 transition-transform"
              >
                <FaYoutube className="text-red-500 text-xl" />
                <span className="text-sm font-semibold text-gray-700">
                  YouTube
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 lg:hidden flex justify-center"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          <ParallaxWrapper speed={0.3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-xl mx-auto group">
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-square rounded-full overflow-hidden border-8 bg-white border-white shadow-2xl"
                  >
                    <img
                      src={singerImages.hero}
                      alt="Rajeshwari Pawar - Professional Playback Singer"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-fill object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 blur-3xl -z-10"
                />
              </div>

              {/* <div className="hidden lg:flex absolute -right-16 top-1/2 transform -translate-y-1/2">
                <SocialLinks vertical />
              </div> */}
            </motion.div>
          </ParallaxWrapper>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent backdrop-blur-sm pointer-events-none" />
    </section>
  );
};

export default HeroSection;
