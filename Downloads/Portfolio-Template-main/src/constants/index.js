import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  flutter,
  projectOne,
  projectTwo,
  sumaax,
  pinkblue,
  heyhello,
  apple,
  android,
  swift
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Flutter',
    icon: flutter,
  },
  {
    title: 'iOS',
    icon: apple,
  },
  {
    title: 'Android',
    icon: android,
  },
  {
    title: 'Fullstack Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Developer',
    company_name: 'Bliss Infosoft',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2019 - July 2022',
  },
  {
    title: 'Software Developer',
    company_name: 'Instant Systems INC',
    icon: microverse,
    iconBg: '#333333',
    date: 'July 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Ceekr',
    description: 'Ceekr is home to YogiMeter and hundreds of self-improvement philosophies, organizations, masters and seekers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: projectTwo,
    repo: '',
    demo: 'https://www.ceekr.com/',
  },
  {
    id: 'project-2',
    name: 'Humanize',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: projectOne,
    repo: '',
    demo: 'https://www.humanize.com/',
  },
  {
    id: 'project-3',
    name: 'Sumaax',
    description: 'Humanize is a global digital platform supporting personal development through an innovative science-based curriculum',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: sumaax,
    repo: '',
    demo: 'https://www.sumaax.com/',
  },
  {
    id: 'project-4',
    name: 'PinkBlue',
    description: `An ecommerce mobile application that specialises on medical equipments`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pinkblue,
    repo: '',
    demo: 'https://pinkblue.in/',
  },
  {
    id: 'project-5',
    name: 'Hey-Hello',
    description:
      'A unique social media application that uses a digital medium for sharing contacts',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: heyhello,
    repo: '',
    demo: 'https://hey-hello.com/',
  },
];

export { services, technologies, experiences, projects };
