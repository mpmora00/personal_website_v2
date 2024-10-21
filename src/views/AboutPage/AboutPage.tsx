import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { JobHistoryPanel } from './JobHistoryPanel.tsx';
import StyledBulletPoints from '@/components/common/StyledBulletPoints.tsx';
import profileImage from '@/assets/images/me.png';
import StyledLink from '@/components/common/StyledLink.tsx';
import StyledTitle from '@/components/common/StyledTitle.tsx';
import styles from './AboutPage.module.scss';
import LoadingImage from '@/components/common/LoadingImage.tsx';

const introductionText = "Hello! My name is Maria and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try to build a website for my mother's company. I graduated Summa Cum Laude from Dartmouth College in 2022 with a major in Computer Science Modified with Digital Arts and a minor in Human - Centered Design."
const introductionText2 = "Outside the world of tech, I’m originally from Heredia, Costa Rica and you can find me skiing every week during the winter, talking my dog on long walks, volunteering teaching English and Spanish, or backing chocolate chip cookies."
const codingLanguages = ['Java', 'Python', 'JavaScript', 'HTLM', 'SQL', 'React', 'GraphQL', 'Terraform', 'CSS']

export default function AboutPage() {
  return (
    <>
        <StyledTitle text={"A little bit about me"} classname={styles.title} />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }} key={"Text"} className={styles.descriptionText}>
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
            <StyledBulletPoints items={codingLanguages} className={styles.codingLanguages} />
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3 }} key={"Image"} className={styles.imageWrapper}>
            <LoadingImage src={profileImage} className={styles.headshotContainer}>
              {(imgRef) => (<img
                src={profileImage}
                ref={imgRef}
                className={styles.headshot}
                alt="Headshot"
                loading="lazy"
              />)}
            </LoadingImage>
          </Grid>
        <JobHistoryPanel />
      </Grid>
    </>
  );
}