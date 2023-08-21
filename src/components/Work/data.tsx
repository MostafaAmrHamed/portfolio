import diceGame from './images/diceGame.jpg';
import GP from './images/GP.jpg';
import StoreX from './images/StoreX.jpg';
import montage1 from './images/Montage 1.png';
import montage2 from './images/Montage 2.jpg';
import montage3 from './images/Montage 3.jpg';
import Cut from './images/Cut.jpg';
import Opy from './images/Opy.jpg';
import fastCare from './images/fastCare.jpg';
import csgo from './images/CSGO.jpg';
import unholy from './images/Unholy.jpg';
import montage4 from './images/Never Get Used To People.jpg';
type Data = {
  tag: string;
  img: string;
  description: string;
  buttons: {
    name: string;
    link: string;
  }[];
}[];
export const data: Data = [
  // {
  //   tag: 'web',
  //   img: freeTime,
  //   description: `Helps you to find a movie to watch made with React, Bootstrap, and JavaScript.`,
  //   buttons: [
  //     {
  //       name: 'View',
  //       link: 'https://mostafaamrhamed.github.io/FreeTime/',
  //     },
  //     {
  //       name: 'Source',
  //       link: 'https://github.com/MostafaAmrHamed/FreeTime',
  //     },
  //   ],
  // },
  // {
  //   tag: 'web',
  //   img: wuzzufClone,
  //   description: `Helps you in your online job search to find jobs made with React, Bootstrap, and JavaScript.`,
  //   buttons: [
  //     {
  //       name: 'Source',
  //       link: 'https://github.com/MostafaAmrHamed/WuzzufClone',
  //     },
  //   ],
  // },
  // {
  //   tag: 'web',
  //   img: landingPage,
  //   description: `Landing page for a company website made with HTML, CSS, Bootstrap, and JavaScript.`,
  //   buttons: [
  //     {
  //       name: 'View',
  //       link: 'https://mostafaamrhamed.github.io/A-company-website/',
  //     },
  //     {
  //       name: 'Source',
  //       link: 'https://github.com/MostafaAmrHamed/A-company-website',
  //     },
  //   ],
  // },
  {
    tag: 'web',
    img: StoreX,
    description: `E-commerce Website: Explore, Add, and Manage Products with Ease on a Next.js-powered Website Made with: NextJS, React, Tailwind, Redux, FakeStoreAPI.`,
    buttons: [
      {
        name: 'View',
        link: 'https://store-x-sooty.vercel.app/',
      },
      {
        name: 'Source',
        link: 'https://github.com/MostafaAmrHamed/StoreX',
      },
    ],
  },
  {
    tag: 'web',
    img: fastCare,
    description: `Healthcare Hub: Empowering Communities with Vital Hospital Information and Lifesaving Connections. made with React, Typescript, Tailwind, Leaflet, Adobe Xd. `,
    buttons: [
      {
        name: 'View',
        link: 'https://fast-care.vercel.app/',
      },
      {
        name: 'Source',
        link: 'https://github.com/MostafaAmrHamed/fast-care',
      },
    ],
  },
  {
    tag: 'web',
    img: GP,
    description: `System for Postgraduate Students to Manage All of Their Needs and Information`,
    buttons: [
      {
        name: 'Source',
        link: 'https://github.com/youssifYasser/post-graduate-system',
      },
    ],
  },
  {
    tag: 'web',
    img: diceGame,
    description: `A game that teaches probability and is a fun boredom buster for kids made with HTML, CSS and JavaScript.`,
    buttons: [
      {
        name: 'View',
        link: 'https://mostafaamrhamed.github.io/Pig-Game/',
      },
      {
        name: 'Source',
        link: 'https://github.com/MostafaAmrHamed/Pig-Game',
      },
    ],
  },
  {
    tag: 'video',
    img: montage1,
    description: `A Valorant montage for Marshal, A pro player for team Occupy made using Adobe Premiere  and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/lP3HPpSb7So',
      },
    ],
  },
  {
    tag: 'video',
    img: Opy,
    description: `Introducing Team Occupy VALORANT - OPY VALORANT Roster made using Adobe Premiere  and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/MnIrkT2EW1s',
      },
    ],
  },
  {
    tag: 'video',
    img: Cut,
    description: `Introducing Team Cut Esports VALORANT - Cut VALORANT Roster made using Adobe Premiere  and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/i-T1wEsRBU8',
      },
    ],
  },
  {
    tag: 'video',
    img: csgo,
    description: `A CSGO  montage made using Adobe Premiere and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/tcXRgYlyB74',
      },
    ],
  },
  {
    tag: 'video',
    img: unholy,
    description: `A Valorant montage made using Adobe Premiere and Photoshop `,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/ciidxl2cZ14',
      },
    ],
  },
  {
    tag: 'video',
    img: montage4,
    description: `A Valorant  montage made using Adobe Premiere and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/O505z6mVE2Y',
      },
    ],
  },
  {
    tag: 'video',
    img: montage2,
    description: `A Valorant montage made using Adobe Premiere  and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/SKqhJ0AMD2Y',
      },
    ],
  },
  {
    tag: 'video',
    img: montage3,
    description: `A Valorant montage made using Adobe Premiere  and Photoshop`,
    buttons: [
      {
        name: 'Watch',
        link: 'https://youtu.be/UeZjL0wuF7U',
      },
    ],
  },
];

export const getWeb = (data: Data) => {
  return data.filter((item) => item.tag === 'web');
};
export const getVideo = (data: Data) => {
  return data.filter((item) => item.tag === 'video');
};
