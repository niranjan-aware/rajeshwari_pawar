import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { singerImages } from '../../utils/helpers'

const InstagramFeed = () => {
  const [showAll, setShowAll] = useState(false)

  const handleToggle = () => {
    if (showAll) {
      const gallerySection = document.getElementById('gallery')
      if (gallerySection) {
        setTimeout(() => {
          gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
    setShowAll(!showAll)
  }

  const posts = [
    {
      id: 1,
      image: singerImages.gallery1,
      likes: 1248,
      comments: 89,
      caption: 'Live performance highlights ✨'
    },
    {
      id: 2,
      image: singerImages.gallery2,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 3,
      image: singerImages.gallery3,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 4,
      image: singerImages.gallery4,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },  
    {
      id: 5,
      image: singerImages.gallery5,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 6,
      image: singerImages.gallery6,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 7,
      image: singerImages.gallery7,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 8,
      image: singerImages.gallery8,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 9,
      image: singerImages.gallery9,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 10,
      image: singerImages.gallery10,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 11,
      image: singerImages.gallery11,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 12,
      image: singerImages.gallery12,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 13,
      image: singerImages.gallery13,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 14,
      image: singerImages.gallery14,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
        id: 15,
      image: singerImages.gallery15,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 16,
      image: singerImages.gallery16,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 17,
      image: singerImages.gallery17,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 18,
      image: singerImages.gallery18,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 19,
      image: singerImages.gallery19,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 20,
      image: singerImages.gallery20,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 21, 
      image: singerImages.gallery21,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 22,
      image: singerImages.gallery22,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 23,
      image: singerImages.gallery23,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 25,
      image: singerImages.gallery25,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 26,
      image: singerImages.gallery26,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 27,
      image: singerImages.gallery27,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
    {
      id: 28,
      image: singerImages.gallery28,
      likes: 2789,
      comments: 167,
      caption: 'Musical journey continues 🎶'
    },
  ]

  const visiblePosts = showAll ? posts : posts.slice(0, 6)
  const remainingCount = posts.length - 6

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: {
                  duration: 0.3,
                  delay: (visiblePosts.length - 1 - index) * 0.05
                }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={post.image}
                alt={`Rajeshwari Pawar - ${post.caption}`}
                loading="lazy"
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
        </AnimatePresence>
      </div>

      
      {posts.length > 6 && (
        <motion.button
          onClick={handleToggle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-glow-pink hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center gap-3"
        >
          <HiOutlinePhotograph className="text-xl" />
          {showAll ? 'Show Less' : `See More (${remainingCount}+ photos)`}
        </motion.button>
      )}
    </div>
  )
}

export default InstagramFeed