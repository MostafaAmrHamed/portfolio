import React from 'react';

import styles from './header.module.css';

export const Header: React.FC = () => {
  return (
    <div>
      <h1 className={styles.header}>Header</h1>
    </div>
  );
};
