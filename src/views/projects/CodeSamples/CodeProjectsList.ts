export type Project = {
    title: string;
    language: string;
    shortDescription: string;
    longDescription: string;
    link?: string;
};

export const CodeProjectsList: Project[] = [
    {
        title: "Personal Website V2",
        language: "React, TypeScript",
        shortDescription: "An upgrade to my personal website built with React and TypeScript to showcase my projects and skills.",
        longDescription: "In early 2024, I was promoted at work to a full-stack engineer role, necessitating a solid understanding of React and TypeScript. Although I had previous experience with React, I wanted to refresh my knowledge and deepen my understanding of TypeScript. To achieve this, I decided to rewrite my personal website as a practical self-review exercise. This project allowed me to apply the concepts of React and TypeScript in a real-world context, resulting in an enhanced user experience and a modernized design. The website serves as a portfolio to showcase my projects, skills, and professional growth while reinforcing my proficiency in these technologies.",
        link: "https://github.com/mpmora00/personal_website_v1",
    },
    {
        title: "Personal Website V1",
        language: "HTML, Javascript",
        shortDescription: "I taught myself HTML, JavaScript, and CSS to build this personal website showcasing my projects and skills.",
        longDescription: "I taught myself HTML, JavaScript, and CSS through a combination of online courses, tutorials, and hands-on projects. I solidified my understanding by building this personal website which allowed me to apply my knowledge in a real-world scenario and develop a stronger foundation in web development.",
        link: "https://github.com/mpmora00/personal_website_v1",
    }, 
    {
        title: "Tiny Search Engine",
        language: "C",
        shortDescription: "A command-line search program that allows users to search a website using specific words or keyword patterns, returning ranked results based on word frequency.",
        longDescription: "Tiny Search Engine (TSE) is a command-line search program that will take a valid seed URL and allows the user to search for specific words on that URL and all of its subpages. It then returns a list of pages ranked with respect to the frequency of occurrences that contain the relevant word (or words). Keywords like 'and', 'or' and 'not' are also functional when searching for specific word patterns. This program is capable of crawling webpages to access subpages, parsing web content, and responding to user's UI queries.",
        link: "https://github.com/mpmora00/tiny_search_engine",
    },
    {
        title: "Matrix Library",
        language: "C++",
        shortDescription: "This library solves matrix-based problems and was used to develop a machine learning algorithm that accurately recognizes hand-drawn numbers with 75% accuracy.",
        longDescription: "This library was coded to solve matrix-based problems such as Gaussian Elimination, Gram–Schmidt algorithm, QR decomposition, and LU Decomposition. After thorough debugging and testing, this library was utilized to create a machine-based learning algorithm using 200 epochs to correctly identify 75% of numbers hand-drawn on a paper.",
        link: "https://github.com/mpmora00/matrix_library",
    },
    {
        title: "Sudoku Solver",
        language: "C",
        shortDescription: "This module is capable of solving any sudoku puzzling using an efficient recursive algorithm.",
        longDescription: "This module is capable of creating unique sudoku boards and solving them using an efficient recursive algorithm. It is also capable of solving any unknown given sudoku. To implement and design this project I collaborated using Git and Slack with four other peers. Moreover, we were so engulfed in the prospects of the project that we decided to create a graphical interface to generates and solve different difficulty levels including a diagonal sudoku, where the diagonal line is constrained to contain unique numbers from 1-9, and a Samurai Sudoku, which consist of 5 overlapping sudokus.",
        link: "https://github.com/lizziehv/cs50-sudoku",
    },
    {
        title: "Whack-A-Mole Game",
        language: "Java",
        shortDescription: "Used to practice the Point Quadtree Algorithm with a dot tree image but we enhanced it to accurately represent a whack-a-mole game interface.",
        longDescription: "The main purpose of this project was for overall practice on Point Quadtree Algorithm. At first, it was simply used to create a dot tree image to easily visualize the algorithm. However, I expanded upon the idea and used the algorithm to create an accurate representation of a whack-a-mole game interface where the Point Quadtree Algorithm can be used to detect accurately where the mole has appeared.",
    },
    {
        title: "Sketch Servers",
        language: "Java",
        shortDescription: "Originally implements a multi-threaded application for collaborative drawing but it evolved into a multiplayer game inspired by 'Draw Something'.",
        longDescription: "The main purpose of this project was for overall practice on the implementation of servers in Java. Using multi-threaded server and clients, the program connects two (or more computers) in order to draw and send these images, sort of like Google Docs for drawings. After much practice, I collaborated with a peer to create a game similar to the app store game called 'Draw something'. The program connects several players and assigns a specific role to each. The 'drawer' is in charge of thinking of a subject and drawing it to the best of their ability while the 'guessers' must compete to see who can figure out what the object is first.",
        link: "https://github.com/mpmora00/sketch_server",
    },
    {
        title: "Part-of-Speech Tagger",
        language: "Java",
        shortDescription: "This command-line part-of-speech tagger labels words, achieving a 97% accuracy rate when tested on a 10,000-word file.",
        longDescription: "This part-of-speech tagger is a command-line program that uses a Hidden Markov Model and a Viterbi Algorithm to label each word with its part of speech. The program can also be run on a given file. For this reason, it was tested on a file with 10,000 words (the U.S.A. Constitution) and had a 97% accuracy rate.",
    },
];

