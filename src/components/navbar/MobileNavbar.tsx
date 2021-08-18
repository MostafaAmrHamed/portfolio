import React, { useState } from 'react';

import styles from './navbar.module.css';
import { BiMenu } from 'react-icons/bi';

export const MobileNavbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const data = ['About', 'Work', 'Skills', 'Contact', 'Resume'];

  return (
    <div className={styles.mobile__navbar}>
      <div className={styles.dropDown__icon}>
        <BiMenu onClick={() => setOpenNav(!openNav)} />
      </div>
      {openNav && (
        <ul
          className={
            openNav
              ? styles.mobile__links__container + ' ' + styles.active
              : styles.mobile__links__container + ' ' + styles.disabled
          }
        >
          {data.map((item) => {
            return (
              <li onClick={() => setOpenNav(false)}>
                <a href={`#${item.toLowerCase()}`} className={styles.mobile__links}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
