import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import styles from './Animations.module.scss';
import ReactPlayer from 'react-player';
import { AnimationsList } from '@/information/AnimationsList';
import StyledTitle from "@/components/common/StyledTitle";

export default function AnimationsPage() {
  return (
    <Box className={styles.animationsContainer}>
      <StyledTitle text={"Animations"}/>
      <Box className={styles.descriptionText}>
        {"Various animations, characters, and settings created over the years for academic purposes mostly utilizing Autodesk Maya 2018."}
      </Box>

      <Grid container spacing={5}>
        {AnimationsList.map((animations) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={animations.video}>
            <ReactPlayer
              url={animations.video}
              width="100%"
              height="70%"
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                },
              }}
            />
            <Box className={styles.descriptionText}>{animations.description}</Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}