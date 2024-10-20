import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Facebook, Email } from '@mui/icons-material';
import styles from './Footer.module.scss';

const SocialMedia = [
  {
    icon: <GitHub />,
    url: 'https://github.com/mpmora00',
  },
  {
    icon: <Facebook />,
    url: 'https://www.facebook.com/mpmora00',
  },
  {
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/in/maria-paula-mora00/',
  },
  {
    icon: <Email />,
    url: 'mailto:mpmora00@gmail.com',
  },
];

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Box className={styles.footerText}>Contact Me:</Box>

      <Box className={styles.icons}>
        {SocialMedia.map(({ url, icon }) => (
          <IconButton key={url} href={url} color="inherit" className={styles.footerIcons}>
            {icon}
          </IconButton>
        ))}
      </Box>
  </Box>
  );
}
