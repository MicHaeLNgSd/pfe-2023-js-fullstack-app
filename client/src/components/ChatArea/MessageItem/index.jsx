import classNames from 'classnames';
import React from 'react';
import ChatLogo from '../../ChatLogo';
import styles from './MessageItem.module.scss';

function MessageItem({ message: { _id, author, text }, userId }) {
  const styleMessageItem = classNames(styles.messageItem, {
    [styles.own]: author?._id === userId,
  });

  return (
    <li className={styleMessageItem}>
      <ChatLogo chat={{ name: author?.firstName }} />
      <div className={styles.textSection}>
        <h3 className={styles.author}>{author?.firstName}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
}

export default MessageItem;
