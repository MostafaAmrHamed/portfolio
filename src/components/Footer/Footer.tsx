import React from 'react';

import styles from './footer.module.css';
import { AiFillYoutube, AiOutlineBehance, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

const data = [
  {
    link: 'mailto:mostafaamro5619@gmail.com',
    icon: <MdEmail />,
  },
  {
    link: 'https://github.com/MostafaAmrHamed',
    icon: <AiFillGithub />,
  },
  {
    link: 'https://www.linkedin.com/in/mostafa-amr-452434188/',
    icon: <FaLinkedinIn />,
  },
  {
    link: 'https://www.youtube.com/channel/UCt92XPjckv4HiW6ORFFHOxw',
    icon: <AiFillYoutube />,
  },
  {
    link: 'https://www.behance.net/mostafaamro',
    icon: <AiOutlineBehance />,
  },
];
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.test}>
        {data.map((item) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer" className={styles.icon}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
