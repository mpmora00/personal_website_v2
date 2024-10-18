import { Box, IconButton, Typography } from '@mui/material';
import { SocialMedia } from '../../utils/socialmedia.ts';
import { Icon } from '../../utils/icons.tsx'
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography variant="h5" className={styles.footerText}>
        Contact Me:
      </Typography>

      {SocialMedia && SocialMedia.map(({ url, name }) => (
        <IconButton key={url} href={url} color="inherit" className={styles.footerIcons}>
          <Icon name={name}/>
        </IconButton>
      ))}
  </Box>
  );
}
