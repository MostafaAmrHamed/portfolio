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
              <a
                href={
                  item !== 'Resume'
                    ? `#${item.toLowerCase()}`
                    : `https://drive.google.com/file/d/1IOAJfwS2OkyKVJexjjU8MuhTER_hemo0/view`
                }
                rel="noopener noreferrer"
                target={item === 'Resume' ? '_blank' : '_self'}
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
