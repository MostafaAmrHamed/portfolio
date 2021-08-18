import image from './images/img.jpg';
export const data = [
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

export const getWeb = (data: any) => {
  return data.filter((item: any) => item.tag === 'web');
};
export const getVideo = (data: any) => {
  return data.filter((item: any) => item.tag === 'video');
};
