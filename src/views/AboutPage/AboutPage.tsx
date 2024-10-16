import profileImage from '../../assets/images/me.png';
import styled from 'styled-components';
import { Grid, Box, Typography } from '@mui/material';
import Jobs from './jobs/index.tsx';
import { StyledText, StyledLink } from '../../styles/components.tsx';
import { theme } from '../../styles/themes.tsx'; // Assuming you have defined your theme in this file
import { ThemeProvider } from '@mui/material/styles';


const codingLanguages = ['Java', 'Python', 'JavaScript', 'HTLM', 'SQL', 'React', 'GraphQL', 'Terraform', 'CSS']
// const otherCodingLanguages = ['C++', 'C', 'Objective C', 'Swift', 'Relay', '']
// const technicalStrenghts = ['Autodesk Maya', 'Docker', 'Hasura', 'AWS', 'Unity', 'Figma', 'Twine', 'Sugarcube']
// const languages = ['Spanish (Native)', 'English (Fluent)', 'French (Proficient)']

const ImageWrapper = styled.div`
position: relative;
width: 80%;

img {
  display: block;
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease; 
}

&::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 4px ${theme.palette.secondary.dark};
  transform: translate(15px, 15px); 
  transition: transform 0.3s ease; 
  border-radius: 2px;
  z-index: -1;
}

&:hover {
  img {
    transform: translate(-5px, -5px);
  }

  &::before {
    transform: translate(20px, 20px); 
  }
}
`;


// const StyledChip = ({ text, description }: {text: string, description: string}) => (
//   <Chip sx={{
//     border: '1px solid #ff7878',
//     backgroundColor: 'transparent',
//     color: '#ff7878',
//     margin: '10px',
//   }} 
//   color="primary"
//   label={(<p>{text}</p>)}
//   key={description}
//   />
// );


export default function AboutPage() {
  return (
    <Box
      sx={{
        margin: 'auto',
        width: '80%',
        mt: '30px',
      }}
    >
      <Typography variant="h5" color="primary.contrastText"> A little bit about me</Typography>

      <Grid container spacing={4}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
        <ThemeProvider theme={theme}>
            <StyledText>
              <Typography variant="body1" color="primary.contrastText">
                Hello! My name is Maria and I enjoy creating things that live on the internet. My
                interest in web development started back in 2012 when I decided to try to build a 
                website for my mother's company. I graduated Summa Cum Laude from Dartmouth College  
                in 2022 with a major in Computer Science Modified with Digital Arts and a minor in 
                Human-Centered Design. 
                <br/><br/>

                Fast-forward to today, and I’ve had the privilege of working at{' '}
                <StyledLink href="https://iterative.health/" text="a startup"/>{', '}
                <StyledLink href="https://www.meta.com/" text="a huge corporation"/>{', and '}
                <StyledLink href="https://dali.dartmouth.edu/" text="a student-led design studio"/>.
                <br/><br/>

                Outside the world of tech, I’m originally from Heredia, Costa Rica and you can find me 
                skiing every week during the winter, going to camps with CISV around the world, 
                volunteering teaching English and Spanish, or backing chocolate chip cookies.
                <br/><br/>
              
                Here are a few technologies I’ve been working with recently:
              </Typography>

              <ul className="coding-languages">
                {codingLanguages && codingLanguages.map((lang, i) => <li key={i}>{lang}</li>)}
              </ul>
            </StyledText>
            {/* <StyledChip text="Spoken Languages" description="y"/>
            <StyledChip text="Other Coding Languages" description="y" />
            <StyledChip text="Other Technical Skill" description="y" /> */}
          </ThemeProvider>
        </Grid>
        <Grid item xs={4}>
            <ImageWrapper>
              <img
                srcSet={profileImage}
                src={profileImage}
                alt="Headshot"
                loading="lazy"
              />
            </ImageWrapper>
        </Grid>
      </Grid>

      <Box
        sx={{
          margin: '100px auto',
          width: '90%',
        }}
      >
        <Box sx={{ width: '70%', display: 'flex', alignItems: 'center'}}>
          <Typography variant="h5" color="primary.contrastText"> Where I've worked</Typography>
          <hr style={{ marginLeft: '20px', flex: '1', borderColor: `${theme.palette.primary.main}`}} />
        </Box>
        <Jobs/>
      </Box>
    </Box>
  );
}