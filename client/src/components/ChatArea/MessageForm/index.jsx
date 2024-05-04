import React from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './MessageForm.module.scss';
import { addMessageToChat } from '../../../api';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setChatCreator } from '../../../store/actions/actionCreators';

const inputPlaceholder = 'Enter your text';
const initialValues = { text: '' };
const validationSchema = Yup.object({
  text: Yup.string().required(),
});

function MessageForm({ chat, setChats }) {
  const dispatch = useDispatch();
  const chatId = chat._id;
  const user = useSelector((s) => s.user.user);
  const userId = user._id;

  const handleSubmit = async (values, formikBag) => {
    const {
      data: { data: newMessage },
    } = await addMessageToChat(chatId, {
      author: userId,
      text: values.text,
    });

    newMessage.author = user;
    setChats((chats) => {
      const restChats = chats.filter((c) => c._id !== chatId);
      const updatedChat = { ...chat, messages: [...chat.messages, newMessage] };
      dispatch(setChatCreator(updatedChat));
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
      validationSchema={validationSchema}
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
