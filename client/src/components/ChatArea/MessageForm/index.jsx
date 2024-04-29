import React from 'react';
import styles from './MessageForm.module.scss';

function MessageForm() {
  const inputPlaceholder = 'Enter your text';

  return (
    <section className={styles.inputArea}>
      <input
        className={styles.messageInput}
        type='text'
        placeholder={inputPlaceholder}
        autoFocus
      />
      <button className={styles.messageSendBtn}>Send</button>
    </section>
  );
}

export default MessageForm;
