import { Grid } from '@mui/material';
import { ImageLink } from './ImageLink';
import { HomePageNavLinks } from './navLinks';

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      {HomePageNavLinks.map(({ img, href, title, description }) => (
        <Grid item xs={6} sm={6} md={6} key={title}>
          <ImageLink
            key={title}
            href={href}
            src={img}
            title={title}
            description={description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
