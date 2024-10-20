import {
    artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7, 
    artwork8, artwork9, artwork10, artwork11, artwork12, artwork13, artwork14
} from '../assets/images/Artwork';

export type Artwork = {
    src: string;
    title: string;
    description: string;
}; 

export const ArtworkList: Artwork[] = [
    {
        src: artwork1,
        title: "Still Life",
        description: "Medium Used: Oil on canvas. \nSize of original: 60 x 45 cm. \nDate: December 2016. \nWork focus: This still-life is based upon the Flemish and Dutch style of painting of the 16th century.",
    },
    {
        src: artwork2,
        title: "Ceramic Heart 1",
        description: "Medium: Ceramics with acrylic. \nSize of original: 18 x 7 x 18.5 cm. \nDate: November 2017. \nWork focus: This heart was inspired by the Japanese technique of Kintsugi which signifies to 'patch with gold', allowing it to depicting the beauty of a broken object.",
    },
    {
        src: artwork3,
        title: "Ceramic Heart 2",
        description: "Different angle/focus of the previously described artwork.",
    },
    {
        src: artwork4,
        title: "Self-Portrait",
        description: "Medium: Acrylic on canvas. \nSize of original: 40 x 50 cm. \nDate: September 2016. \nText/Topic/Work focus: This piece is a self-portrait made to portray myself during junior year of high school.",
    },
    {
        src: artwork5,
        title: "Mixed Media Gears",
        description: "Medium: Mixed media. \nSize of original: 68.5 x 5 x 61.2 cm. \nDate: January 2018. \nWork focus: This sculpture was inspired by the artist Laura Harris who is known for her work with mixed media including tools. I wanted to depict a waterfall which I visited with a group of friends. However, I decided to utilize a three-dimensional gear shape to depict this image.",
    },
    {
        src: artwork6,
        title: "Mixed Media Gears 2",
        description: "Different angle/focus of the previously described artwork.",
    },
    {
        src: artwork7,
        title: "Watercolor Family",
        description: "Medium: Watercolor. \nSize of original: 84 x 46 cm. \nDate: January 2018,. \nWork focus: This series of watercolor artworks are based upon 3 pictures taken by my father before I was even born. These images depict my mother and my older brother at the beach playing in the water.",
    },
    {
        src: artwork8,
        title: "Watercolor Family - Focused 1",
        description: "Individual image of the previous triad of paintings.",
    },
    {
        src: artwork9,
        title: "Watercolor Family - Focused 2",
        description: "Individual image of the previous triad of paintings.",
    },
    {
        src: artwork10,
        title: "Ceramic Heart 3",
        description: "Different angle/focus of the previously described artwork.",
    },
    {
        src: artwork11,
        title: "Charcoal Cheetah",
        description: "Medium: Charcoal and pastel. \nSize of original: 45 x 60 cm. \nDate: September 2015. \nWork focus: This work is based upon a pastel and charcoal book tutorial for practice on the medium.",
    },
    {
        src: artwork12,
        title: "Oil Forest",
        description: "Medium: Oil on canvas. \nSize of original: 50 x 40 cm. \nDate: March 2013. \nWork focus: This work is based upon a how to paint nature book tutorial since it was one of the first pieces I created using oil paint.",
    },
    {
        src: artwork13,
        title: "Charcoal Dog",
        description: "Medium: Charcoal and pastel. \nSize of original: 45 x 60 cm. \nDate: December 2014. \nWork focus: This work is based upon a pastel and charcoal book tutorial for practice on the medium.",
    },
    {
        src: artwork14,
        title: "Mother & Daughter Portrait",
        description: "Medium: Acrylic on canvas. \nSize of original: 50 x 40 cm. \nDate: January 2018. \nWork Focus: This portrait is inspired by Emile Munier's artwork of 'Portrait of a mother and daughter' but is also based on a picture taken in 2004 of my and my mom.",
    }
];