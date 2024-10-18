import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import { CodeProjectsList } from './CodeProjectsList.ts';
import ProjectDetails from './ProjectDetails.tsx';
import styles from './CodeSamples.module.scss';

export default function CodeSamplesPage() {
  return (
    <Box>
      <Grid container spacing={5} className={styles.codeSamplesGrid}>
        {CodeProjectsList.map((project ) => (
          <Grid size={4} key={project.title}>
            <ProjectDetails project={project}/>
          </Grid>
        ))}
      </Grid>
      <Box className={styles.codeSamplesMessage}>
        {"To see more projects, feel free to send me an email! I'd love to hear from you."}
      </Box>
    </Box>
  );
}