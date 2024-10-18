import digitalArt1 from '../../../assets/images/DigitalArts/digitalArt.png';
import digitalArt2 from '../../../assets/images/DigitalArts/digitalArt2.png';
import digitalArt3 from '../../../assets/images/DigitalArts/digitalArt3.png';
import digitalArt4 from '../../../assets/images/DigitalArts/digitalArt4.png';
import arvr1 from '../../../assets/videos/Murder2.mp4';
import arvr2 from '../../../assets/videos/Candy2.mp4';
import arvr3 from '../../../assets/videos/Turtle2.mp4';
import arvr4 from '../../../assets/videos/Shark2.mp4';
import figma1 from '../../../assets/images/DigitalArts/figma1.png';
import figma2 from '../../../assets/images/DigitalArts/figma2.png';
import figma3 from '../../../assets/images/DigitalArts/figma3.jpg';
import figma4 from '../../../assets/images/DigitalArts/figma4.jpg';
import figma5 from '../../../assets/images/DigitalArts/figma5.png';


type Project = {
    title: string;
    src: string[];
    gridSize: number,
    areVideos: boolean;
    description: string;
    details: string[];
};

export const DigitalProjectList: Project[] = [
    {
        title: "3D Digital Model",
        src: [digitalArt1, digitalArt2, digitalArt3, digitalArt4],
        gridSize: 6,
        areVideos: false,
        description: "A 3D digital model recreating an office using Maya Autodesk 2018 and rendering with Arnold. I was inspired by my father's office and decided to add as many details as I could remember.",
        details: ["Duration of project: 10 weeks."]
    },
    {
        title: "AR/VR Projects",
        src: [arvr1, arvr2, arvr3, arvr4],
        gridSize: 6,
        areVideos: true,
        description: "A variety of virtual and augmented reality projects created for the class 'COSC23.01 - AR and VR Design'. Each of these projects where created with a different prompt in mind using the application Unity.",
        details: []
    },
    {
        title: "Moose Tracks ",
        src: [figma1, figma2, figma3, figma4, figma5],
        gridSize: 4,
        areVideos: false,
        description: "Moose Tracks allows students to post tasks they need to carry out like pickups or carpools that others can accept and help with. Hence, in addition to making students mobile, the app incentivizes students to utilize it by allowing them to make money, meet new students, carpool to reduce carbon emissions, and to be part of a tight-knit community.",
        details: [
            "Context: A majority of Dartmouth students have little access to cheap transportation to get off-campus. Because of this, students have a difficult time accesing certain locations like better supermarkets or farther away hiking paths.",
            "Goal: Our goal was to reduce costs for those who own the vehicles and increase accesibility for those who do not own them by connecting the two users.",
            "Duration: 10 weeks",
            "Tools: Figma, Sketch, Illustrator",
            "Figma Link: https://www.figma.com/file/gPCWKB7oNjccaKdxmGBwae/cs-67?node-id=0%3A1",
            "More Details: https://drive.google.com/drive/folders/1imiUcjR6oa6x0TL93zk53taB0U8MDhT-?usp=sharing"
        ]
    }
];

