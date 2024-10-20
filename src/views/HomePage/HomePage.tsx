import Grid from '@mui/material/Grid2';
import { ImageLink } from './ImageLink';
import { NavLinks } from '@/information/Routing';

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      {NavLinks
        .filter(({ moreInformation }) => moreInformation !== undefined)
        .map(({ path, moreInformation }) => (
        <Grid size={{xs: 12, sm: 12, md: 6, lg: 6}} key={moreInformation!.title}>
          <ImageLink
            key={moreInformation!.title}
            href={path}
            src={moreInformation!.img}
            title={moreInformation!.title}
          description={moreInformation!.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
