import { 
  GitHub as IconGitHub,
  LinkedIn as IconLinkedin,
  Facebook as IconFacebook,
  Email as IconEmail,
} from '@mui/icons-material';

export const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'LinkedIn':
      return <IconLinkedin />;
    case 'Facebook':
      return <IconFacebook />;
    case 'Email':
      return <IconEmail />;
  }
};

