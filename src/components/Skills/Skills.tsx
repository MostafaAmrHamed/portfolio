import React from 'react';

import styles from './skills.module.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import {
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobepremiere,
  SiAdobexd,
  SiAdobeillustrator,
  SiReact,
} from 'react-icons/si';
import { FaGitAlt, FaBootstrap } from 'react-icons/fa';

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.container}>
        <div className={styles.web__skills}>
          <p className={styles.skill}>
            HTML5 <AiFillHtml5 className={styles.icon} />
          </p>
          <p className={styles.skill}>
            CSS3 <IoLogoCss3 className={styles.icon} />
          </p>
          <p className={styles.skill}>
            javaScript <SiJavascript className={styles.icon} />
          </p>
        </div>
      </div>
    </div>
  );
};
