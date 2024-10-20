import { Box, ImageList, ImageListItem } from "@mui/material";
import { ArtworkList } from "@/information/ArtworkList.ts";
import styles from './ArtworkPage.module.scss';
import DetailsContainer from "./ArtworkItem.tsx";
import StyledTitle from "@/components/common/StyledTitle.tsx";
import { useMediaQuery } from '@mui/material';

export default function ArtworkPage() {
  // Define the number of columns based on screen size
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:960px)');

  // Set the number of columns based on the screen size
  const columns = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Box className={styles.artworksContainer}>
      <StyledTitle text={"Artworks"} />
      <Box className={styles.descriptionText}>
        {"A series of various original artworks including paintings, sculptures, and drawings, created over the years. I've received drawing and paintings lessons since the age of 3 allowing me to have a large artwork collection. I've only shown the ones I'm most proud but, fortunately, there are more to see."}
      </Box>
  
      <ImageList variant="masonry" cols={columns} gap={20}>
        {ArtworkList.map((item) => (
          <ImageListItem key={item.src}>
            <DetailsContainer title={item.title} description={item.description} artwork={item}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}