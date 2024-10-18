
import { PageTab } from './enums.tsx'
import resumePDF from '../assets/Resume.pdf';

import HomePage from '../views/HomePage/HomePage.tsx';
import AboutPage from '../views/AboutPage/AboutPage.tsx';
import DigitalDesignPage from '../views/Projects/DigitalDesign.tsx';
import CodeSamplesPage from '../views/Projects/CodeSamples/CodeSamples.tsx';
import AnimationsPage from '../views/Projects/Animations/Animations.tsx';
import ArtworksPage from '../views/Projects/Artworks/Artwork.tsx';

export const NavLinks : { 
    path: string; page: PageTab; element: JSX.Element;
}[] = [
  {
      path: '/about',
      page: PageTab.about,
      element: <AboutPage />
  },
  {
    path: '/',
    page: PageTab.home,
    element: <HomePage />
  },
  {
    path: '/resume',
    page: PageTab.resume,
    element: <iframe src={resumePDF} style={{ display: 'block', margin: '0 auto', width: '70%', height: '600px' }} />
  },
  {
    path: '/projects/codesamples',
    page: PageTab.projects,
    element: <CodeSamplesPage />
  },
  {
    path: '/projects/digitaldesign',
    page: PageTab.projects,
    element: <DigitalDesignPage />
  },
  {
    path: '/projects/animations',
    page: PageTab.projects,
    element: <AnimationsPage />
  },
  {
    path: '/projects/artworks',
    page: PageTab.projects,
    element: <ArtworksPage />
  },
];