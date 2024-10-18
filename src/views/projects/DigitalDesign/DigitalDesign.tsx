import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import styles from './DigitalDesign.module.scss';
import StyledBulletPoints from "../../../components/common/StyledBulletPoints";
import { DigitalProjectList } from './DigitalDesignProjects';
import ReactPlayer from 'react-player';

export default function DigitalDesignPage() {
  return (
    <Box className={styles.digitalDesignContainer}>
      {DigitalProjectList.map((project) => (
        <Box key={project.title} className={styles.projectContainer}>
          <Typography variant="h5">{project.title}</Typography>
          <Typography variant="body1" className={styles.descriptionText}>
            {project.description}
          </Typography>
          <StyledBulletPoints items={project.details} className={styles.descriptionBullet} />

          <Grid container spacing={2}>
            {project.src.map((src) => (
              <Grid size={project.gridSize} key={src}>
                {project.areVideos 
                  ? <ReactPlayer
                    url={src}
                    width="100%"
                    height="100%"
                    controls
                    config={{
                      file: {
                        attributes: {
                          controlsList: 'nodownload',
                        },
                      },
                    }}
                  />
                  : <img
                    src={src}
                    alt={project.title}
                    height="100%"
                    width="100%"
                    loading="lazy"
                  />
                }
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}