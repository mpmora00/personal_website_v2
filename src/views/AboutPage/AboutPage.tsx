import profileImage from '../../assets/images/me.png';
import { Box, Typography } from '@mui/material';
import { JobHistoryPanel } from './JobHistoryPanel.tsx';
import styles from './AboutPage.module.scss';
import StyledBulletPoints from '../../components/common/StyledBulletPoints.tsx';
import StyledLink from '../../components/common/StyledLink.tsx';

const introductionText = "Hello! My name is Maria and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try to build a website for my mother's company. I graduated Summa Cum Laude from Dartmouth College in 2022 with a major in Computer Science Modified with Digital Arts and a minor in Human - Centered Design."
const introductionText2 = "Outside the world of tech, I’m originally from Heredia, Costa Rica and you can find me skiing every week during the winter, going to camps with CISV around the world, volunteering teaching English and Spanish, or backing chocolate chip cookies."
const codingLanguages = ['Java', 'Python', 'JavaScript', 'HTLM', 'SQL', 'React', 'GraphQL', 'Terraform', 'CSS']

export default function AboutPage() {
  return (
    <Box>
      <Typography variant="h5">{"A little bit about me"}</Typography>

      <Box className={styles.descriptionContainer}>
        <Box className={styles.descriptionText}>
          <Box>{introductionText}</Box>
          <Box>
              {"Fast-forward to today, and I’ve had the privilege of working at "}
              <StyledLink href="https://iterative.health/" text="a startup"/>
              {', '}
              <StyledLink href="https://www.meta.com/" text="a huge corporation"/>
              {', and '}
              <StyledLink href="https://dali.dartmouth.edu/" text="a student-led design studio"/>.
          </Box>
          <Box>{introductionText2}</Box>
          <Box>{"Here are a few technologies I’ve been working with recently:"}</Box>
        </Box>
        <Box className={styles.imageWrapper}>
          <img
            className={styles.headshot}
            src={profileImage}
            alt="Headshot"
            loading="lazy"
          />
        </Box>
      </Box>
      <StyledBulletPoints items={codingLanguages} className={styles.codingLanguages} />
      <JobHistoryPanel />
    </Box>
  );
}