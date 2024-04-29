import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './MessageForm.module.scss';
import { addMessageToChat } from '../../../api';
import UserContext from '../../../contexts/userContext';

const inputPlaceholder = 'Enter your text';
const initialValues = {
  text: '',
};

function MessageForm({ chatId, userId, setChat }) {
  const [{ user }, setUserData] = useContext(UserContext);
  const handleSubmit = async (values, formikBag) => {
    const {
      data: { data: newMessage },
    } = await addMessageToChat(chatId, {
      author: userId,
      text: values.text,
    });

    newMessage.author = user;
    setChat((chat) => {
      const updatedChat = { ...chat, messages: [...chat.messages, newMessage] };
      return updatedChat;
    });
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
