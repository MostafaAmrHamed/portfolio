import React from 'react';

import styles from './header.module.css';
import bg from './bg.png';
import profile from './profile.png';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={bg} height={'auto'} width={'100%'} alt="Cover" />
      <img className={styles.profile} src={profile} height={300} width={300} alt="porfilePicture" />
    </div>
  );
};
