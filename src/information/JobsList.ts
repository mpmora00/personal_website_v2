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
      position: 'Full Stack Software Engineer II at ',
      location: 'Iterative Scopes',
      url: 'https://iterative.health/',
      time: 'Mar 2024 - Present',
      description: [
        "Led migration of core platform from a third-party vendor to an in-house database by coordinating across engineering, data, and product teams; diminished annual vendor costs by ~$50K, eliminated vendor lock-in, unlocking new product features and long-term scalability.",
        "Optimized patient record collection platform by redesigning backend data pipelines and collaborating with clinical operations teams; diminished average load times by 40% and enhanced patient onboarding speed, driving a 15% increase in clinical trial participation.",
        "Drove adoption of automated QA practices by partnering with QA engineers and product managers to define test strategy, procuring buy-in through stakeholder workshops and prioritization discussions; increased backend test coverage to 93% and frontend to 37%, improving reliability and reducing risk for customer-facing releases.",
        "Coordinated end-to-end delivery of 4 patient-record features by aligning clinical, engineering, and UX teams on requirements and organizing rollout with customer success, enabling smoother trial-site operations and supporting 70+ active clinical trials."
      ]
    },
    {
      position: 'Backend Software Engineer I at ',
      location: 'Iterative Scopes',
      url: 'https://iterative.health/',
      time: 'Jan 2023 - Mar 2024',
      description: [
        "Developed observability dashboards with real-time alerts, partnering with site reliability and frontend engineers to integrate system into existing workflows; diminishing mean-time-to-resolution by 42%; boosting client confidence in system performance.",
        "Led cross-functional vendor evaluation of monitoring platforms, collaborating with engineering, finance, and DataOps to analyze scalability and cost; presented recommendations to senior leadership, leading to adoption of a new platform, delivering $30K annual savings and supporting higher data volumes without added cost.",
        "Upgraded clinical video processing pipeline removing protected patient health information, coordinating with compliance officers and QA testers; reduced missed data by 90% and enhanced corrupted video detection by 30%, while ensuring failure recovery without manual intervention, facilitating HIPAA compliance for clinical trials",
        "Designed 3 HIPAA and SOC 2 compliant databases for secure storage of both PHI (Protected Health Information) and non-PHI data, engaging with compliance, security, and legal stakeholders; ensured data integrity and patient privacy across clinical workflows."  
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
        "Launched a real-time analytics dashboard with 5+ interactive visualizations to give Connectivity Partner Impact leadership visibility into partner revenue trends; liaised with Product Managers and Partner Managers to define metrics and surfaced insights directly informing go-to-market strategy for internet partnerships, unlocking new revenue opportunities.",
      ]
    },
    {
      position: 'Software Engineer Intern at ',
      location: 'Facebook',
      url: 'https://www.meta.com/',
      time: 'Jun 2021 - Sep 2021',
      description: [
        "Pioneered a C++ log upload system for WhatsApp iOS, working with platform engineers and Apple’s technical review team; ensured compliance with iOS 15 requirements, securing uninterrupted app releases.",
        "Engaged in Facebook’s Global Hackathon prototyping an Interactive Comic Book feature, producing a working MVP in under 72 hours demonstrating potential to increase community content creation by 20% based on internal testing."
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
        "Designed web platform for Full-Stack Development course, removing enrollment bottlenecks and increasing annual enrollment 10x."
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
        "Analyzed environmental datasets and developed machine learning models with 93% accuracy in predictive pattern recognition."
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
