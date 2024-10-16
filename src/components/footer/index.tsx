import { Box, IconButton, Typography } from '@mui/material';
import { SocialMedia } from '../../utils/socialmedia.ts';
import Icon from '../../utils/icons.tsx'


export default function Footer() {
  return (
    <Box className="footer" sx={{
      color: "primary.main",
      margin: '20px 0px',
      display: 'flex', 
      justifyContent: 'flex-end'
    }}>
      <Typography variant="h5" sx={{ mr: '30px', mt: '5px'}}>Contact Me:</Typography>
      {SocialMedia && SocialMedia.map(({ url, name }) => (
        <IconButton key={url} href={url} color="inherit" sx={{ 
          mr: '20px',
          ':hover': {
            color: 'primary.contrastText',
          }
        }}>
          <Icon name={name}/>
        </IconButton>
      ))}
  </Box>
  );
}
