import React from 'react';

import styles from './about.module.css';

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <h1 className={styles.title}> About </h1>
        <h1 className={styles.intro}>I am a Frontend Developer and Graphic Designer</h1>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis at nam, nesciunt
          consequuntur beatae ducimus vero nemo minima ullam expedita. Magnam aliquam accusamus
          eveniet asperiores nam! Itaque non at ipsum rerum corporis similique ea ab enim autem,
          placeat nemo veritatis quisquam totam quidem asperiores dolor. Pariatur ratione ullam
          tempore consequatur.
        </p>
      </div>
    </div>
  );
};
