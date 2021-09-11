import React from 'react';

import styles from './navbar.module.css';

export const DesktopNavbar = () => {
  const data = ['About', 'Work', 'Skills', 'Contact', 'Resume'];

  return (
    <div className={styles.dekstop__navbar + ' ' + styles.fixed}>
      <ul className={styles.desktop__links__container}>
        {data.map((item) => {
          return (
            <li>
              <a
                href={
                  item !== 'Resume'
                    ? `#${item.toLowerCase()}`
                    : `https://drive.google.com/u/0/uc?id=1MrjcVJWnDqYHLJ1aSjkGzYd88VUuOFYo&export=download`
                }
                className={styles.desktop__links}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
