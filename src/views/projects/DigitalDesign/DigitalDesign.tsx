import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import styles from './DigitalDesign.module.scss';
import StyledBulletPoints from "@/components/common/StyledBulletPoints";
import { DigitalProjectList } from '@/information/DigitalDesignProjects';
import ReactPlayer from 'react-player';
import StyledTitle from "@/components/common/StyledTitle";
import LoadingImage from "@/components/common/LoadingImage";

export default function DigitalDesignPage() {
  return (
    <Box className={styles.digitalDesignContainer}>
      {DigitalProjectList.map((project) => (
        <Box key={project.title} className={styles.projectContainer}>
          <StyledTitle text={project.title} />
          <Box className={styles.descriptionText}>{project.description}</Box>
          <StyledBulletPoints items={project.details} className={styles.descriptionBullet} />

          <Grid container spacing={2}>
            {project.src.map((src) => (
              <Grid
                size={{ xs: project.smallGridSize, sm: project.gridSize, md: project.gridSize, lg: project.gridSize }}
                key={src}
              >
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
                  /> : (
                    <LoadingImage src={src}>
                      {(imgRef) => (<img
                        src={src}
                        ref={imgRef}
                        alt={project.title}
                        className={styles.images}
                        loading="lazy"
                      />)}
                    </LoadingImage>
                  )
                }
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}