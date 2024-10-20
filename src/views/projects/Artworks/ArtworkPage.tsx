import { Box, ImageList, ImageListItem } from "@mui/material";
import { ArtworkList } from "@/utils/ArtworkList.ts";
import styles from './ArtworkPage.module.scss';
import DetailsContainer from "./ArtworkItem.tsx";
import StyledTitle from "@/components/common/StyledTitle.tsx";

export default function ArtworkPage() {
  return (
    <Box className={styles.artworksContainer}>
      <StyledTitle text={"Artworks"} />
      <Box className={styles.descriptionText}>
        {"A series of various original artworks including paintings, sculptures, and drawings, created over the years. I've received drawing and paintings lessons since the age of 3 allowing me to have a large artwork collection. I've only shown the ones I'm most proud but, fortunately, there are more to see."}
      </Box>
  
      <ImageList variant="masonry" cols={3} gap={20}>
        {ArtworkList.map((item) => (
          <ImageListItem key={item.src}>
            <DetailsContainer title={item.title} description={item.description} artwork={item}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}