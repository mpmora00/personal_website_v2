import animations1 from '../../../assets/videos/snow.mp4';
import animations2 from '../../../assets/videos/walkFront.mp4';
import animations3 from '../../../assets/videos/runFront.mp4';
import animations4 from '../../../assets/videos/jump.mp4';
import animations5 from '../../../assets/videos/character.mp4';
import animations6 from '../../../assets/videos/runSide.mp4';
import animations7 from '../../../assets/videos/walkSide.mp4';
import animations8 from '../../../assets/videos/ball.mp4';

type Animation = {
    video: string;
    description: string;
};

export const AnimationsList: Animation[] = [
    {
        video: animations1,
        description: "'Slipping through campus': The final animation project created for famous animator's Patricia Hannaway course in winter 2020. The scene is set in front of Baker-Berry Library, Dartmouth College, Hanover, NH, USA.",
    },
    {
        video: animations2,
        description: "Front - Practicing the walk cycle using Patricia Hannaway's model 2020.",
    },
    {
        video: animations3,
        description: "Front - Practicing the run cycle using Patricia Hannaway's model 2020.",
    },
    {
        video: animations4,
        description: "Practicing the principles of jumping, utilizing recoil and anticipation with Patricia Hannaway's model winter 2020.",
    },
    {
        video: animations5,
        description: "Practicing modeling a 3-D character, creating a skeleton, attaching joints, painting weights, skinning, and using Arnold rendering to create an animation winter 2019.",
    },
    {
        video: animations6,
        description: "Side - Practicing the walk cycle using Patricia Hannaway's model 2020.",
    },
    {
        video: animations7,
        description: "Side - Practicing the run cycle using Patricia Hannaway's model 2020.",
    },
    {
        video: animations8,
        description: "Animating the principles of weight and settling using a bowling ball and a balloon winter 2020.",
    }
];

