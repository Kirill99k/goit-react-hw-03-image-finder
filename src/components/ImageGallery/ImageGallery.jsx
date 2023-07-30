import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryContainer, GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryContainer>
      <GalleryList>
        {images.map(img => (
          <ImageGalleryItem image={img} key={img.id} />
        ))}
      </GalleryList>
    </GalleryContainer>
  );
};
