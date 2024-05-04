import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ChatList from '../../components/ChatList';
import { getChats } from '../../api';
import ChatArea from '../../components/ChatArea';
import styles from './Chats.module.scss';
import { useSelector } from 'react-redux';

function ChatsPage() {
  const userId = useSelector((store) => store.user.user?._id);

  const [chats, setChats] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getChats(userId).then((res) => {
      setChats(res.data.data);
    });
  }, [userId]);

  return (
    <>
      <Header />
      <div className={styles.asideMainWrapper}>
        <aside className={styles.chatListWrapper}>
          {/* <button>Add Chat</button> chatId={chat?._id} setChat={setChat} */}
          <ChatList chats={chats} />
        </aside>
        <main className={styles.chatAreaWrapper}>
          <ChatArea userId={userId} setChats={setChats} />
        </main>
      </div>
    </>
  );
}

export default ChatsPage;
