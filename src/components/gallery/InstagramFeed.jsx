import { motion } from 'framer-motion'
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa'
import { singerImages } from '../../utils/helpers'

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: singerImages.performance1,
      likes: 1248,
      comments: 89,
      caption: 'Live performance highlights ✨'
    },
    {
      id: 2,
      image: singerImages.performance2,
      likes: 2156,
      comments: 134,
      caption: 'Behind the scenes magic 🎤'
    },
    {
      id: 3,
      image: singerImages.stage1,
      likes: 1876,
      comments: 112,
      caption: 'Concert vibes 🎵'
    },
    {
      id: 4,
      image: singerImages.performance3,
      likes: 3421,
      comments: 201,
      caption: 'Recording studio sessions 🎧'
    },
    {
      id: 5,
      image: singerImages.stage2,
      likes: 1654,
      comments: 95,
      caption: 'Stage moments 🌟'
    },
    {
      id: 6,
      image: singerImages.performance4,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
        >
          <img 
            src={post.image}
            alt={post.caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-sm mb-3 line-clamp-2">{post.caption}</p>
              <div className="flex items-center gap-4 text-white text-sm">
                <div className="flex items-center gap-1">
                  <FaHeart className="text-red-400" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaComment className="text-blue-400" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-glow-pink">
              <FaInstagram className="text-white text-lg" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default InstagramFeed