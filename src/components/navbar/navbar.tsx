import React from 'react';

import styles from './navbar.module.css';
import { DesktopNavbar, MobileNavbar } from './index';
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};
