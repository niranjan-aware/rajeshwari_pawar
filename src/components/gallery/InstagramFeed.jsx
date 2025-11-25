import { singerImages } from '../../utils/helpers'
import InfiniteMovingCards from '../ui/InfiniteMovingCards'

const InstagramFeed = () => {
  const row1Items = [
    { image: singerImages.gallery1, alt: 'Gallery image 1' },
    { image: singerImages.gallery2, alt: 'Gallery image 2' },
    { image: singerImages.gallery3, alt: 'Gallery image 3' },
    { image: singerImages.gallery4, alt: 'Gallery image 4' },
    { image: singerImages.gallery5, alt: 'Gallery image 5' },
    { image: singerImages.gallery6, alt: 'Gallery image 6' },
    { image: singerImages.gallery7, alt: 'Gallery image 7' },
    { image: singerImages.gallery8, alt: 'Gallery image 8' },
    { image: singerImages.gallery9, alt: 'Gallery image 9' },
    { image: singerImages.gallery19, alt: 'Gallery image 19' },
    { image: singerImages.gallery20, alt: 'Gallery image 20' },
    { image: singerImages.gallery21, alt: 'Gallery image 21' },
    { image: singerImages.gallery22, alt: 'Gallery image 22' },
    { image: singerImages.gallery23, alt: 'Gallery image 23' },
  ]

  const row2Items = [
    { image: singerImages.gallery10, alt: 'Gallery image 10' },
    { image: singerImages.gallery11, alt: 'Gallery image 11' },
    { image: singerImages.gallery12, alt: 'Gallery image 12' },
    { image: singerImages.gallery13, alt: 'Gallery image 13' },
    { image: singerImages.gallery14, alt: 'Gallery image 14' },
    { image: singerImages.gallery15, alt: 'Gallery image 15' },
    { image: singerImages.gallery16, alt: 'Gallery image 16' },
    { image: singerImages.gallery17, alt: 'Gallery image 17' },
    { image: singerImages.gallery18, alt: 'Gallery image 18' },
    { image: singerImages.gallery25, alt: 'Gallery image 25' },
    { image: singerImages.gallery26, alt: 'Gallery image 26' },
    { image: singerImages.gallery27, alt: 'Gallery image 27' },
    { image: singerImages.gallery28, alt: 'Gallery image 28' },
  ]

  

  return (
    <div className="flex flex-col gap-4">
      <InfiniteMovingCards
        items={row1Items}
        direction="left"
        speed="slow"
        pauseOnHover={true}
      />
      <InfiniteMovingCards
        items={row2Items}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
     
    </div>
  )
}

export default InstagramFeed
