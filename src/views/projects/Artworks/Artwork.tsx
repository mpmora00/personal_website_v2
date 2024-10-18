import { Box, ImageList, Typography } from "@mui/material";
import { artworks } from "./images.tsx";
import ImageModal from './ImageDetails.tsx';
import styles from './Artwork.module.scss';

export default function ArtworkPage() {
  return (
    <Box className={styles.artworksContainer}>
      <Typography variant="h5" >
        {"Artworks"}
      </Typography>
      <Typography variant="body1" className={styles.descriptionText}>
        {"A series of various original artworks including paintings, sculptures, and drawings, created over the years. I've received drawing and paintings lessons since the age of 3 allowing me to have a large artwork collection. I've only shown the ones I'm most proud but, fortunately, there are more to see."}
      </Typography>
  
      <ImageList variant="masonry" cols={3} gap={20} className={styles.imageList}>
        {artworks.map((item) => (
          <ImageModal img={item.img} title={item.title} key={item.title} description={item.description} />
        ))}
      </ImageList>
    </Box>
  );
}