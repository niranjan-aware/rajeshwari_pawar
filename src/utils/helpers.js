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

import aboutImage from '../assets/211162.jpg'
import heroImage from '../assets/214677.jpg'
export const singerImages = {
  hero: heroImage,
  about: heroImage,
  performance1: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80',
  performance2: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80',
  performance3: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop&q=80',
  performance4: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80',
  stage1: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&h=600&fit=crop&q=80',
  stage2: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&h=600&fit=crop&q=80',
  microphone: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop&q=80',
  concert: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop&q=80'
}