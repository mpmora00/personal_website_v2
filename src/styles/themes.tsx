
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            default: '#101010'
        },
        primary: {
            contrastText: '#FFFFFF',
            light: '#303030',
            main: '#808080',
            dark: '#232323',
        },

        secondary: {
            main: '#ff7878',
            dark: '#6E5959',
        },
    },
    typography: {
        body1: {
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
        },
        h2: {
            fontFamily: "'Bebas Neue', Impact",
            letterSpacing: 2,
            marginTop: '20px',
        },
        h5: {
            fontFamily: "'Bebas Neue', Impact",
            letterSpacing: 1,
        },
        h6: {
            fontFamily: "'Roboto', sans-serif",
        },
        body2: {
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 100, 
        }
    }
});
