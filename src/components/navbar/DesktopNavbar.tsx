import React, { useState } from 'react';

import styles from './navbar.module.css';

export const DesktopNavbar = () => {
  const data = ['About', 'Work', 'Skills', 'Contact', 'Resume'];
  const [navbar, setNavbar] = useState(false);

  const fixedNavbar = () => {
    if (window.scrollY >= 750) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener('scroll', fixedNavbar);

  return (
    <div className={navbar ? styles.dekstop__navbar + ' ' + styles.fixed : styles.dekstop__navbar}>
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
