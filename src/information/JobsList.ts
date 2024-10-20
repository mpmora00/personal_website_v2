export type JobDescription = {
  position: string;
  location: string;
  url: string;
  time: string;
  description: string[];
};

export const JobsInformation: { 
  [key: number]: JobDescription[]
} = {
  0: [
    {
      position: 'Backend Software Engineer I at ',
      location: 'Iterative Scopes',
      url: 'https://iterative.health/',
      time: 'Jan 2023 - Mar 2024',
      description: [
        "Deployed AWS services like Lambdas and Step Functions using Terraform to upgrade the video ingestion pipeline which achieved a 90% reduction in missed videos and increased the identification rate of corrupted videos by 30%, while ensuring complete failure recovery without manual intervention.",
        "Pioneered CloudWatch Monitoring system, ensuring real-time system health monitoring across the pipeline.",
        "Designed databases for storage of PHI and non-PHI information for videos."
      ]
    },
    {
      position: 'Full Stack Software Engineer II at ',
      location: 'Iterative Scopes',
      url: 'https://iterative.health/',
      time: 'Mar 2024 - Present',
      description: [
        "Transitioned to a new role building an in-house annotations system for high-quality labeling of colonoscopy videos."
      ]
    },
  ],
  1: [
    {
      position: 'Software Engineer at ',
      location: 'Meta',
      url: 'https://www.meta.com/',
      time: 'Sep 2022 - Nov 2022',
      description: [
        "Worked with the Connectivity Partner Impact team in Front-end web portal development to increase partner revenue.",
        "Developed a responsive landing page with 5 real-time updated data visualization components using React and GraphQL."
      ]
    },
    {
      position: 'Software Engineer Intern at ',
      location: 'Facebook',
      url: 'https://www.meta.com/',
      time: 'Jun 2021 - Sep 2021',
      description: [
        "Designed a new log upload system in C++ for WhatsApp iOS Mobile team, meeting Apple’s requirements for iOS 15."
      ]
    },
  ],
  2: [
    {
      position: 'UI/UX Designer at ',
      location: 'DALI Lab',
      url: 'https://dali.dartmouth.edu/',
      time: 'Mar 2021 - Jun 2021',
      description: [
        "Developed a digital platform to teach Dartmouth's Full-Stack Web Development class, boosting student enrollment by 10x."
      ]
    }
  ],
  3: [
    {
      position: 'James O. Freedman Presidential Scholar Research Assistant at ',
      location: 'Dartmouth College',
      url: 'https://students.dartmouth.edu/ugar/research/programs/presidential-scholars/program-information',
      time: 'Sep 2020 - Jun 2021',
      description: [
        "Developed a machine-learning algorithm achieving 93% fidelity in classifying unknown virtual microstructures."
      ]
    },
    {
      position: 'Sophomore Scholars Research Assistant at ',
      location: 'Dartmouth College',
      url: 'https://students.dartmouth.edu/wisp/internships/sophomore-scholarships',
      time: 'Sep 2019 - Sep 2020',
      description: [
        "Studied the effects of a VR stimulus on the human brain using Unity3D and analyzed 300+ data sets from EEG studies using MATLAB for Machine Learning applications"
      ]
    }
  ],
  4: [
    {
      position: 'Co-Founder of ',
      location: 'Compartamos la Mesa',
      url: 'https://www.facebook.com/CompartamoslaMesa/',
      time: 'Mar 2021 - Jun 2021',
      description: [
        "Successfully introduced a bill to Costa Rican Congress to construct a non-profit route for food donation.",
        "Gathered the endorsement of over 10 congressmen including the country's vice president at the time, Ana Helena Chacón."
      ]
    }
  ],
};
