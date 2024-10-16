import digitalArt from '../assets/images/DigitalArts/digitalArt.png';
import artwork from '../assets/images/Artwork/artwork.png';
import animations from '../assets/images/animations.png';
import codeSamples from '../assets/images/codeSamples.png';
import { PageTab } from './enums.tsx'
import resumePDF from '../assets/Resume.pdf';

import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage/AboutPage.tsx';
import ErrorPage from '../views/ErrorPage';
import DigitalDesignPage from '../views/projects/DigitalDesign';
import CodeSamplesPage from '../views/projects/CodeSamples';
import AnimationsPage from '../views/projects/Animations';
import ArtworksPage from '../views/projects/Artwork';

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
  {
    path: '/error',
    page: PageTab.error,
    element: <ErrorPage />
  }
];

export const HomePageNavLinks : { 
    img: string; href: string, title: string, description: string
}[] = [
    {
      img: digitalArt,
      href: '/projects/digitaldesign',
      title: 'Digital Arts',
      description: 'A series of projects done through digital mediums. For example: Autodesk Maya for 3-D Digital Modeling and Figma for UI/UX design.',
    },
    {
      img: artwork,
      href: '/projects/artworks',
      title: 'Artwork',
      description: 'A series of various original artworks including paintings, sculptures, and drawings, created over the years.'
    },
    {
      img: animations,
      href: '/projects/animations',
      title: 'Animations',
      description: 'Various animations, characters, and settings created over the years for various purposes mostly utilizing Autodesk Maya 2018.'
    },
    {
      img: codeSamples,
      href: '/projects/codesamples',
      title: 'Code Samples',
      description: 'Various coding samples from several projects I have worked in throughout my time at Dartmouth College.'
    }
  ];

