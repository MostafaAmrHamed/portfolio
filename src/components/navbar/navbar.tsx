import React from 'react';

import styles from './navbar.module.css';
import { DesktopNavbar, MobileNavbar } from './index';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};
export default Navbar;
