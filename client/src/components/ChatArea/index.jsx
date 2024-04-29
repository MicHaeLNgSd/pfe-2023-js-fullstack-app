import React from 'react';
import classNames from 'classnames';
import styles from './ChatArea.module.scss';
import MessageItem from './MessageItem';
import MessageForm from './MessageForm';

function ChatArea({ chat, userId, setChat }) {
  const chatAreaClassNames = classNames(styles.chatArea, {
    [styles.chatAreaNoChat]: !chat,
  });

  if (!chat)
    return (
      <article className={chatAreaClassNames}>
        <h2 className={styles.selectChatMsg}>Select chat to start.</h2>
      </article>
    );

  return (
    <article className={chatAreaClassNames}>
      <header className={styles.chatHeader}>
        <h2 className={styles.chatName}>{chat.name}</h2>
        <p>users: {chat.users.length}</p>
      </header>
      <section className={styles.messagesWrapper}>
        <ul className={styles.messageList}>
          {chat.messages.map((m) => (
            <MessageItem message={m} userId={userId} />
          ))}
        </ul>
      </section>
      <MessageForm userId={userId} chatId={chat._id} setChat={setChat} />
    </article>
  );
} //textbox

export default ChatArea;
