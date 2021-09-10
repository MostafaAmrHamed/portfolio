import React from 'react';

import styles from './contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.container}>
        <div className={styles.input__container}>
          <p className={styles.label}>Email</p>
          <input type="text" className={styles.email} />

          <div className={styles.textarea2}>
            <div>
              <p className={styles.label}>Message</p>
              <textarea className={styles.message}>Write your message..</textarea>
            </div>
            <div>
              <button className={styles.btn}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
