import Grid from '@mui/material/Grid2';
import { ImageLink } from './ImageLink';
import { NavLinks } from '@/information/Routing';
import LoadingImage from '@/components/common/LoadingImage';

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      {NavLinks
        .filter(({ moreInformation }) => moreInformation !== undefined)
        .map(({ path, moreInformation }) => (
        <Grid size={{xs: 12, sm: 12, md: 6, lg: 6}} key={moreInformation!.title}>
            <LoadingImage src={moreInformation!.img}>
              {(imgRef) => (
                <ImageLink
                  key={moreInformation!.title}
                  imgRef={imgRef}
                  href={path}
                  src={moreInformation!.img}
                  title={moreInformation!.title}
                  description={moreInformation!.description}
                />
              )}
            </LoadingImage>
        </Grid>
      ))}
    </Grid>
  );
}
