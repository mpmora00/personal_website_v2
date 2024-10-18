import Grid from '@mui/material/Grid2';
import { ImageLink } from './ImageLink';
import { NavLinks } from './NavLinks';

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      {NavLinks.map(({ img, href, title, description }) => (
        <Grid size={6} key={title}>
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
