import { 
  GitHub as IconGitHub,
  LinkedIn as IconLinkedin,
  Facebook as IconFacebook,
  Email as IconEmail,
} from '@mui/icons-material';

interface IconProps {
  name: string;
}

const Icon = ({ name } : IconProps) => {
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

export default Icon;
