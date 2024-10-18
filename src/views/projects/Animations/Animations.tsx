import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import styles from './Animations.module.scss';
import ReactPlayer from 'react-player';
import { AnimationsList } from './AnimationsList';

export default function AnimationsPage() {
  return (
    <Box className={styles.animationsContainer}>
      <Typography variant="h5" >
        {"Animations"}
      </Typography>
      <Typography variant="body1" className={styles.descriptionText}>
        {"Various animations, characters, and settings created over the years for various purposes mostly utilizing Autodesk Maya 2018."}
      </Typography>

      <Grid container spacing={5}>
        {AnimationsList.map((animations) => (
          <Grid size={6} key={animations.video}>
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
            <Typography variant="body1" className={styles.descriptionText}>
              {animations.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}