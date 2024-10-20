import {
  HomePage, AboutPage, DigitalDesignPage, 
  CodeSamplesPage, AnimationsPage, ArtworksPage
}from '../views';

import resumePDF from '../assets/Resume.pdf';
import digitalArt from '../assets/images/DigitalArts/digitalArt.png';
import artwork from '../assets/images/Artwork/artwork.png';
import animations from '../assets/images/animations.png';
import codeSamples from '../assets/images/codeSamples.png';

export const enum PageTab {
  home = 'HOME',
  projects = 'PROJECTS',
  about = 'ABOUT',
  resume = 'RESUME',
}

export const NavLinks: {
  path: string,
  page: PageTab,
  element: JSX.Element,
  moreInformation?: {
    img: string; title: string, description: string
  }
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
    element: <iframe src={ resumePDF } style = {{ display: 'block', margin: '0 auto', width: '70%', height: '600px' }} />
  },
  {
    path: '/projects/digitaldesign',
    page: PageTab.projects,
    element: <DigitalDesignPage />,
    moreInformation: {
      img: digitalArt,
      title: 'Digital Arts',
      description: 'A series of projects done through digital mediums. For example: Autodesk Maya for 3-D Digital Modeling and Figma for UI/UX design.',
    }
  },
  {
    path: '/projects/artworks',
    page: PageTab.projects,
    element: <ArtworksPage />,
    moreInformation: {
      img: artwork,
      title: 'Artwork',
      description: 'A series of various original artworks including paintings, sculptures, and drawings, created over the years.'
    }
  },
  {
    path: '/projects/animations',
    page: PageTab.projects,
    element: <AnimationsPage />,
    moreInformation: {
      img: animations,
      title: 'Animations',
      description: 'Various animations, characters, and settings created over the years for various purposes mostly utilizing Autodesk Maya 2018.'
    }
  },
  {
    path: '/projects/codesamples',
    page: PageTab.projects,
    element: <CodeSamplesPage />,
    moreInformation: {
      img: codeSamples,
      title: 'Code Samples',
      description: 'Various coding samples from several projects I have worked in throughout my time at Dartmouth College.'
    }
  },
];