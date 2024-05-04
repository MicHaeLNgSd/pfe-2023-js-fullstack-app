import React from 'react';
import styles from './ChatList.module.scss';
import ChatItem from './ChatItem';

function ChatList({ chats = [] }) {
  return (
    <section className={styles.chatList}>
      {chats.length && (
        <ul>
          {chats.map((c) => (
            <ChatItem key={c._id} chat={c} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ChatList;
