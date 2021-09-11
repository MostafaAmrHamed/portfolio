import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import styles from './contact.module.css';

const sendEmail = (e: any) => {
  e.preventDefault();

  emailjs
    .sendForm('service_ylpvus8', 'template_xzfrcal', e.target, 'user_dat081ElRtKpBVaf1gRRv')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  alert();
  e.target.reset();
};

const alert = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thank you for contacting us!',
    showConfirmButton: false,
    timer: 2000,
  });
};
export const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.container}>
        <form onSubmit={sendEmail}>
          <div className={styles.input__container}>
            <p className={styles.label}>Email</p>
            <input type="email" className={styles.email} name="email" required />

            <div className={styles.textarea}>
              <div>
                <p className={styles.label}>Message</p>
                <textarea
                  className={styles.message}
                  placeholder="Write your message.."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className={styles.send__message}>
                <input type="submit" className={styles.btn} value="Send message"></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
