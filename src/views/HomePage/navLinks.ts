
import digitalArt from '../../assets/images/DigitalArts/digitalArt.png';
import artwork from '../../assets/images/Artwork/artwork.png';
import animations from '../../assets/images/animations.png';
import codeSamples from '../../assets/images/codeSamples.png';

export const NavLinks: {
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

