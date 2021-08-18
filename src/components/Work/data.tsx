import image from './images/img.jpg';
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
    img: image,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eligendi dolorum
          obcaecati fugiat tempore dolor`,
    buttons: [
      {
        name: 'View',
        link: 'https://www.facebook.com/chetos.amr/',
      },
      {
        name: 'Source',
        link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
      },
    ],
  },
  {
    tag: 'web',
    img: image,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eligendi dolorum
          obcaecati fugiat tempore dolor`,
    buttons: [
      {
        name: 'View',
        link: 'https://www.facebook.com/chetos.amr/',
      },
      {
        name: 'Source',
        link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
      },
    ],
  },
  {
    tag: 'web',
    img: image,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eligendi dolorum
          obcaecati fugiat tempore dolor`,
    buttons: [
      {
        name: 'View',
        link: 'https://www.facebook.com/chetos.amr/',
      },
      {
        name: 'Source',
        link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
      },
    ],
  },
  {
    tag: 'web',
    img: image,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eligendi dolorum
          obcaecati fugiat tempore dolor`,
    buttons: [
      {
        name: 'View',
        link: 'https://www.facebook.com/chetos.amr/',
      },
      {
        name: 'Source',
        link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
      },
    ],
  },
  {
    tag: 'video',
    img: image,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eligendi dolorum
          obcaecati fugiat tempore dolor`,
    buttons: [
      {
        name: 'View',
        link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
      },
    ],
  },
  {
    tag: 'video',
    img: image,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eligendi dolorum
          obcaecati fugiat tempore dolor`,
    buttons: [
      {
        name: 'View',
        link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
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
