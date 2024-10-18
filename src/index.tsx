import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { PageTab } from './utils/enums.ts'
import Header from './components/header/Header.tsx'
import Footer from './components/footer/Footer.tsx'
import { NavLinks } from './utils/navlinks.tsx'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './styles/themes.tsx';
import './index.css';

interface RoutesProps {
  path: string,
  page: PageTab;
  element: JSX.Element;
}

const routes = NavLinks.map(({ path, page, element }: RoutesProps) => (
  <Route key={path} path={path} element={
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header page={page}/>
      <Box className="pageContainer">
        {element}
      </Box>
      <Footer/>
    </ThemeProvider>
  } />
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes}
      </Routes>
    </Router>
  </React.StrictMode>,
);