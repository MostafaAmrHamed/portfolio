import React from 'react';

import styles from './header.module.css';
import bg from './bg.png';
import profile2 from './profile_2.png';

export const Header: React.FC = () => {
  return (
    <div className={styles.profile}>
      <img src={bg} height={'auto'} width={'100%'} alt="Cover" />
      <div className={styles.profile_container}>
        <div className={styles.profile_info}>
          <img className={styles.profile_photo} src={profile2} alt="porfilePicture" />
          <h1 className={styles.profile_name}>Mostafa Amr</h1>
        </div>
      </div>
    </div>
  );
};
