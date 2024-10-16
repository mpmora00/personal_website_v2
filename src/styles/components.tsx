import styled from 'styled-components';
import { Link } from '@mui/material';
import { theme } from './themes.tsx';

const StyledText = styled.div`
    ul.coding-languages {
        display: grid;
        grid-template-columns: repeat(3, minmax(140px, 200px));
        grid-gap: 0 30px;
    }
    ul {
        list-style: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: white;
        padding: 0;
        margin: 20px 0 0 0;
    }

    li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-family: 'Roboto', sans-serif;

        &:before {
        color: ${theme.palette.secondary.dark};
        content: '▹';
        position: absolute;
        left: 0;
    }
  }
`;

const StyledLink = ({ href, text }: {href: string, text: string}) => (
    <Link
    underline="hover" 
    href={href}
    color="secondary.main"
    target="_blank" 
    rel="noreferrer">
      {text}
    </Link>
  );

export { StyledText, StyledLink };
