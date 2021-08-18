import React from 'react';

import styles from './navbar.module.css';

export const DesktopNavbar = () => {
  const data = ['About', 'Work', 'Skills', 'Contact', 'Resume'];
  return (
    <div className={styles.dekstop__navbar}>
      <ul className={styles.desktop__links__container}>
        {data.map((item) => {
          return (
            <li>
              <a href={`#${item.toLowerCase()}`} className={styles.desktop__links}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
