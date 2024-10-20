import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import { CodeProjectsList } from '@/information/CodeProjectsList.ts';
import styles from './CodeSamples.module.scss';
import DetailsContainer from './DetailsContainer.tsx';
import ProjectCard from './ProjectCard.tsx';

export default function CodeSamplesPage() {
  return (
    <Box>
      <Grid container spacing={5} className={styles.codeSamplesGrid}>
        {CodeProjectsList.map((project ) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={project.title}>
            <DetailsContainer title={project.title} description={project.longDescription}>
              {(handleOpen) => (
                <ProjectCard project={project} handleOpen={handleOpen} />
              )}
            </DetailsContainer>
          </Grid>
        ))}
      </Grid>
      <Box className={styles.codeSamplesMessage}>
        {"To see more projects, feel free to send me an email! I'd love to hear from you."}
      </Box>
    </Box>
  );
}