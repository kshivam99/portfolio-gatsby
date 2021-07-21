import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kumar Shivam', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `A Front End Developer from India, experienced in building responsive, accessible websites`, // e.g: Welcome to my website
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
  paragraphOne: `I’m a Front End Developer from India, experienced in building responsive, 
  accessible websites and web applications using React, NextJs TypeScript, JavaScript, Hasura-Graphql, 
  Redux-Toolkit. I mostly spend my day thinking about some new project and my night coding them.`,
  paragraphTwo: 'Currently I am learning Next Js, GraphQl and React Native',
  paragraphThree: ``,
  resume: 'https://drive.google.com/file/d/1eQFrbluAZF6lRwI8T8CK1l3-R2m3fHP8/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'matrixweb.png',
    title: 'Matrixweb',
    info: 'Social Media App made with Next.js, using Redux Toolkit for state management, Semantic UI for components,Backend is made with Express.js, MongoDB. Authentication using JWT',
    info2: '',
    url: 'https://matrixwebsocial.herokuapp.com/',
    repo: 'https://github.com/kshivam99/matrixweb/tree/dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trekkart.png',
    title: 'Trekkart',
    info: 'Ecommerce app made in MERN Stack, with cart, wishlist, product details page',
    info2: '',
    url: 'https://trekkart.netlify.app/',
    repo: 'https://github.com/kshivam99/Ecommerce/tree/development', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'codesplash.png',
    title: 'CodeSplash',
    info: `This is an educational website consisting of curated playlists to learn any technology, Users can also create their custom playlist and manage them, They can add notes to each video in a particular timestamp to remember some important
    concept. They can even bookmark courses they want to watch later. They can view their watch history and can delete
    them too. The frontend is made in React, and the Backend consists of Express.JS server and MongoDB, and uses JWT for
    authentication.`,
    info2: '',
    url: 'https://codesplash.netlify.app/',
    repo: 'https://github.com/kshivam99/CodeSplash/tree/development', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scribble.png',
    title: 'Scribble',
    info: `Scribble is a note-keeping app, that supports MarkDown Language, User can add notes, create labels for their notes,
    can edit and delete notes. The frontend is made with TypeScript React, and state management using React Context API,
    It uses Hasura-GraphQL as its backend. I have also implemented unit tests using Jest. Authentication is done using Auth0`,
    info2: '',
    url: 'https://scribblebook.netlify.app/',
    repo: 'https://github.com/kshivam99/scribble-typescript', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `I love to connect and work together, If you would like to work together, Let's catch up over a cup of coffee`,
  btn: '',
  email: 'kshivam99.create@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/kshivam99_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kshivam99/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kshivam99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
