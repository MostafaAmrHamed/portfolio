import React from 'react';

import styles from './about.module.css';

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <h1 className={styles.title}> About </h1>
        <h1 className={styles.intro}>Frontend Developer and Graphic Designer</h1>
        <p className={styles.info}>
          I am a Frontend Developer and a Graphic Designer. I work using HTML, CSS, Typescript,
          Bootstrap and library React.js (Front-end) & Adobe Photoshop, Adobe illustrator and Adobe
          Xd (Graphic Design){' '}
          <a
            href="https://www.behance.net/mostafaamro"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
          . I believe having experience in both design,UI UX and development allows for making the
          most optimal user experiences. I have been working as a video editor for multiple clients;
          using Adobe Premiere I have done a few professional montages which you can check{' '}
          <a href="#work" className={styles.link2}>
            below
          </a>
          .
        </p>
      </div>
    </div>
  );
};
