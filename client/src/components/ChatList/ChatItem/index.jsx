import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from '../../../api';
import styles from './ChatItem.module.scss';
import ChatLogo from '../../ChatLogo';
import { setChatCreator } from '../../../store/actions/actionCreators';

const clickHandler = (chatId, dispatch) => {
  getChat(chatId).then((res) => dispatch(setChatCreator(res.data.data)));
};

function ChatItem({ chat: { _id, isPrivate, name, messages, coverImage: imgUrl } }) {
  const dispatch = useDispatch();
  const currentChatId = useSelector((s) => s.chat.chat?._id);
  const lastMsg = messages.slice(-1)[0];
  const {
    author: { firstName, lastName },
    text,
  } = lastMsg || { author: {} };

  const chatItemStyle = classNames(styles.chatItem, {
    [styles.active]: _id === currentChatId,
  });

  return (
    <li className={chatItemStyle} onClick={() => clickHandler(_id, dispatch)}>
      <section className={styles.chatInfo}>
        <ChatLogo chat={{ name, imgUrl }} />
        <div>
          <h2 className={styles.chatHeader}>{name}</h2>
          {text && (
            <p className={styles.lastMessage}>
              {firstName} {lastName}: {text}
            </p>
          )}
        </div>
      </section>
    </li>
  );
}

export default ChatItem;
