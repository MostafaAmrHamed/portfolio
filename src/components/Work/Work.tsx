import React, { useState } from 'react';

import styles from './work.module.css';
import { Card } from './Card';
import { data, getVideo, getWeb } from './data';

export const Work = () => {
  const web = getWeb(data);
  const video = getVideo(data);
  const [show, setShow] = useState(web);
  const [active, setActive] = useState(true);
  return (
    <div className={styles.work} id="work">
      <h1 className={styles.title}>Work</h1>
      <div className={styles.buttons}>
        <p
          onClick={() => {
            setShow(web);
            setActive(true);
          }}
          className={
            active ? styles.buttons__option + ' ' + styles.buttons__active : styles.buttons__option
          }
        >
          Websites
        </p>
        <p
          onClick={() => {
            setShow(video);
            setActive(false);
          }}
          className={
            !active ? styles.buttons__option + ' ' + styles.buttons__active : styles.buttons__option
          }
        >
          Videos
        </p>
      </div>
      <div className={styles.container}>
        {show.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
};
