import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { PageTab } from './utils/enums.ts'
import Header from './components/header/index.tsx'
import Footer from './components/footer/index.tsx'
import { NavLinks } from './utils/navlinks.tsx'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/themes.tsx';


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
      {element}
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