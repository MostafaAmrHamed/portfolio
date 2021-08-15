import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './header.module.css';

import bg from './bg.png';
import profile from './profile.png';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Image src={bg} height={'450'} width={'100%'} fluid />
      <Image className={styles.profile} src={profile} height={300} width={300} />
    </div>
  );
};
