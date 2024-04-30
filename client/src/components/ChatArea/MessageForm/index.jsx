import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './MessageForm.module.scss';
import { addMessageToChat } from '../../../api';
import UserContext from '../../../contexts/userContext';

const inputPlaceholder = 'Enter your text';
const initialValues = {
  text: '',
};

function MessageForm({ chatId, userId, chat, setChats }) {
  const [{ user }, setUserData] = useContext(UserContext);
  const handleSubmit = async (values, formikBag) => {
    const {
      data: { data: newMessage },
    } = await addMessageToChat(chatId, {
      author: userId,
      text: values.text,
    });

    newMessage.author = user;
    setChats((chats) => {
      const restChats = chats.filter((c) => c._id !== chat._id);
      const updatedChat = { ...chat, messages: [...chat.messages, newMessage] };
      const updatedChats = [updatedChat, ...restChats];
      return updatedChats;
    });
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      className={styles.inputAreaWrapper}
    >
      <Form className={styles.inputArea}>
        <Field
          name='text'
          className={styles.messageInput}
          placeholder={inputPlaceholder}
          autoFocus
        />
        <button type='submit' className={styles.messageSendBtn}>
          Send
        </button>
      </Form>
    </Formik>
  );
}

export default MessageForm;
