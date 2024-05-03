import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../api';
import { USER_LOGIN_SCHEMA } from '../../validation/userValidation';
import styles from './LoginForm.module.scss';
import { connect } from 'react-redux';
import * as ActionCreators from './../../store/actions/actionCreators';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ isLoading, error, userRequest, userSuccess, userError }) => {
  const handleSubmit = async (values, formikBag) => {
    // запам'ятовуємо у стані що робимо запит на сервер
    userRequest();

    try {
      const {
        data: {
          data: { user },
        },
      } = await login(values);
      // при успішному запиту зберігаємо юзера
      userSuccess(user);
    } catch (error) {
      // при неуспішному запиту зберігаємо помилку
      userError(error);
    }

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_LOGIN_SCHEMA}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor='email' className={styles.label}>
            Email:
          </label>
          <Field type='email' name='email' id='email' className={styles.input} />
        </div>
        <ErrorMessage name='email' component='div' className={styles.error} />
        <div className={styles.inputContainer}>
          <label htmlFor='password' className={styles.label}>
            Password:
          </label>
          <Field type='password' name='password' id='password' className={styles.input} />
        </div>
        <ErrorMessage name='password' component='div' className={styles.error} />
        <div className={styles.btnContainer}>
          <button type='submit' className={styles.btn}>
            Login
          </button>
          <button type='reset' className={styles.btn}>
            Reset fields
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = (dispatch) => ({
  userRequest: () => dispatch(ActionCreators.userRequestCreator()),
  userSuccess: (value) => dispatch(ActionCreators.userSuccessCreator(value)),
  userError: (value) => dispatch(ActionCreators.userErrorCreator(value)),
  logout: () => dispatch(ActionCreators.logoutCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
