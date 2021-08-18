import React from 'react';

import styles from './work.module.css';

type Props = {
  data: {
    img: string;
    description: string;
    buttons: {
      name: string;
      link: string;
    }[];
  };
};

export const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img className={styles.img} src={`${data.img}`} alt="img-card" />
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      <div className={styles.links}>
        {data.buttons.map((item) => {
          return (
            <a href={`${item.link}`} className={styles.link} target="_blank">
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
