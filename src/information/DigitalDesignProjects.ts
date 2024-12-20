import {
    digitalArt1, digitalArt2, digitalArt3, digitalArt4,
    figma1, figma2, figma3, figma4, figma5, lostInTime1
} from '../assets/images/DigitalArts';
import { arvr1, arvr2, arvr3, arvr4 } from '../assets/videos';

type Project = {
    title: string;
    src: string[];
    gridSize: number,
    smallGridSize: number,
    areVideos: boolean;
    description: string;
    details: string[];
    links?: Record<string, string>[],
};

export const DigitalProjectList: Project[] = [
    {
        title: "3D Digital Model",
        src: [digitalArt1, digitalArt2, digitalArt3, digitalArt4],
        gridSize: 6,
        smallGridSize: 12, 
        areVideos: false,
        description: "A 3D digital model recreating an office using Maya Autodesk 2018 and rendering with Arnold. I was inspired by my father's office and decided to add as many details as I could remember.",
        details: ["Academic", "Duration of project: 10 weeks."]
    },
    {
        title: "Lost in Time",
        src: [lostInTime1],
        gridSize: 4,
        smallGridSize: 6,
        areVideos: false,
        description: "A co-op virtual reality puzzle game created as a Senior Design Project.",
        details: ["Academic, Team-based, Role: Delevoper and Designer"],
        links: [{
            "Medium Article": "https://medium.com/dartmouth-cs98/combating-loneliness-with-co-op-virtual-reality-fun-9ccbb77ec30b"
        }]
    },
    {
        title: "AR/VR Projects",
        src: [arvr1, arvr2, arvr3, arvr4],
        gridSize: 6,
        smallGridSize: 12, 
        areVideos: true,
        description: "A variety of virtual and augmented reality projects created for the class 'COSC23.01 - AR and VR Design'. Each of these projects where created with a different prompt in mind using the application Unity.",
        details: ["Academic"]
    },
    {
        title: "Moose Tracks ",
        src: [figma1, figma2, figma3, figma4, figma5],
        gridSize: 4,
        smallGridSize: 12, 
        areVideos: false,
        description: "Moose Tracks allows students to post tasks they need to carry out like pickups or carpools that others can accept and help with. Hence, in addition to making students mobile, the app incentivizes students to utilize it by allowing them to make money, meet new students, carpool to reduce carbon emissions, and to be part of a tight-knit community.",
        details: [
            "Academic, Team-based, Role: Designer",
            "Context: A majority of Dartmouth students have little access to cheap transportation to get off-campus. Because of this, students have a difficult time accesing certain locations like better supermarkets or farther away hiking paths.",
            "Goal: Our goal was to reduce costs for those who own the vehicles and increase accesibility for those who do not own them by connecting the two users.",
            "Duration: 10 weeks",
            "Tools: Figma, Sketch, Illustrator",
        ], 
        links: [
            {"Figma Link": "https://www.figma.com/file/gPCWKB7oNjccaKdxmGBwae/cs-67?node-id=0%3A1"},
        ]
    }
];

