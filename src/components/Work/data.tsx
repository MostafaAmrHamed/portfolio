import freeTime from './images/FreeTime.jpg';
import wuzzufClone from './images/WuzzufClone.jpg';
import landingPage from './images/landingPage.png';
import diceGame from './images/diceGame.jpg';
import montage1 from './images/Montage 1.png';
import montage2 from './images/Montage 2.jpg';
import montage3 from './images/Montage 3.jpg';
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
  {
    tag: 'web',
    img: freeTime,
    description: `Helps you to find a movie to watch made with React, Bootstrap, and JavaScript.`,
    buttons: [
      {
        name: 'View',
        link: 'https://mostafaamrhamed.github.io/FreeTime/',
      },
      {
        name: 'Source',
        link: 'https://github.com/MostafaAmrHamed/FreeTime',
      },
    ],
  },
  {
    tag: 'web',
    img: wuzzufClone,
    description: `Helps you in your online job search to find jobs made with React, Bootstrap, and JavaScript.`,
    buttons: [
      {
        name: 'Source',
        link: 'https://github.com/MostafaAmrHamed/WuzzufClone',
      },
    ],
  },
  {
    tag: 'web',
    img: landingPage,
    description: `Landing page for a company website made with HTML, CSS, Bootstrap, and JavaScript.`,
    buttons: [
      {
        name: 'View',
        link: 'https://mostafaamrhamed.github.io/A-company-website/',
      },
      {
        name: 'Source',
        link: 'https://github.com/MostafaAmrHamed/A-company-website',
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
