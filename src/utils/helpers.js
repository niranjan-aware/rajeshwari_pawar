import gallery1 from '../assets/GalleryImages/galleryImg_1.jpg'
import gallery2 from '../assets/GalleryImages/galleryImg_2.jpg'
import gallery3 from '../assets/GalleryImages/galleryImg_3.jpg'
import gallery4 from '../assets/GalleryImages/galleryImg_4.jpg'
import gallery5 from '../assets/GalleryImages/galleryImg_5.jpg'
import gallery6 from '../assets/GalleryImages/galleryImg_6.jpg'
import gallery7 from '../assets/GalleryImages/galleryImg_7.jpeg'
import gallery8 from '../assets/GalleryImages/galleryImg_8.jpg'
import gallery9 from '../assets/GalleryImages/galleryImg_9.jpg'
import gallery10 from '../assets/GalleryImages/galleryImg_10.jpg'
import gallery11 from '../assets/GalleryImages/galleryImg_11.jpg'
import gallery12 from '../assets/GalleryImages/galleryImg_12.jpg'
import gallery13 from '../assets/GalleryImages/galleryImg_13.jpg'
import gallery14 from '../assets/GalleryImages/galleryImg_14.jpg'
import gallery15 from '../assets/GalleryImages/galleryImg_15.jpg'
import gallery16 from '../assets/GalleryImages/galleryImg_16.jpg'
import gallery17 from '../assets/GalleryImages/galleryImg_17.jpg'
import gallery18 from '../assets/GalleryImages/galleryImg_18.jpg'
import gallery19 from '../assets/GalleryImages/galleryImg_19.jpg'
import gallery20 from '../assets/GalleryImages/galleryImg_20.jpg'
import gallery21 from '../assets/GalleryImages/galleryImg_21.jpg'
import gallery22 from '../assets/GalleryImages/galleryImg_22.jpg'
import gallery23 from '../assets/GalleryImages/galleryImg_23.JPG'
// import gallery24 from '../assets/GalleryImages/galleryImg_24.HEIC'
import gallery25 from '../assets/GalleryImages/galleryImg_25.PNG'
import gallery26 from '../assets/GalleryImages/galleryImg_26.JPG'
import gallery27 from '../assets/GalleryImages/galleryImg_27.JPG'
import gallery28 from '../assets/GalleryImages/galleryImg_28.JPG'
// import gallery29 from '../assets/GalleryImages/galleryImg_29.HEIC'
// import gallery30 from '../assets/GalleryImages/galleryImg_30.HEIC'
import aboutImage from '../assets/About.jpg'
import heroImage from '../assets/Hero-section.webp'


export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export const getYouTubeThumbnail = (videoId, quality = 'maxresdefault') => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const getUnsplashImage = (query, width = 800, height = 600) => {
  return `https://images.unsplash.com/photo-${query}?w=${width}&h=${height}&fit=crop&q=80`
}


export const singerImages = {
  hero: heroImage,
  about: aboutImage,
  performance1: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80',
  performance2: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80',
  performance3: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop&q=80',
  performance4: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80',
  stage1: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&h=600&fit=crop&q=80',
  stage2: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&h=600&fit=crop&q=80',
  microphone: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop&q=80',
  concert: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop&q=80',
  gallery1: gallery1,
  gallery2: gallery2,
  gallery3: gallery3,
  gallery4: gallery4,
  gallery5: gallery5,
  gallery6: gallery6,
  gallery7: gallery7,
  gallery8: gallery8,
  gallery9: gallery9,
  gallery10: gallery10,
  gallery11: gallery11,
  gallery12: gallery12,
  gallery13: gallery13,
  gallery14: gallery14,
  gallery15: gallery15,
  gallery16: gallery16,
  gallery17: gallery17,
  gallery18: gallery18,
  gallery19: gallery19,
  gallery20: gallery20,
  gallery21: gallery21,
  gallery22: gallery22,
  gallery23: gallery23,
  gallery25: gallery25,
  gallery26: gallery26,
  gallery27: gallery27,
  gallery28: gallery28,
}