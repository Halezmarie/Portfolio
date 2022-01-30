import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vT_BFLne4muZN_KPKXdN5w5mKnptVIfFUgQwueTSXuohR8zlvFgnKege-JaUQ9TSqayn-5KZkKDjuup/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pups R Us 🐕',
    info: 'Pups R Us is an app for reviewing toys for your favorite pups! Users can submit reviews for existing toys, or add new toys to the website.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=kGQkVHi1O_U',
    repo: 'https://github.com/Halezmarie/pupsrus-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Boogle👻',
    info: 'Boogle is for everyone who loves scary movies. Users can view, create, and delete movies, as well as add movies to the current list.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=enG8KTtPc50',
    repo: 'https://github.com/Halezmarie/Boogle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'TeaScape 🍵',
    info: 'TeaScape is for anyone who loves tea. Users can create, delete, edit, and review tea. Users can also see the reviews of other users.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=ygHHl_Nc8ks',
    repo: 'https://github.com/Halezmarie/TeaScape-Project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'haleymgrassi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UC9jObIjQp5WJw_cJLYFWQzw',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/haley-grassi0716/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Halezmarie',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@haleymgrassi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
