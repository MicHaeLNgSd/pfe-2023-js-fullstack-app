import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/*
  Опціональне ДЗ:
    Створити компонент PublicOnlyRoute який не дозволяє авторизовани користувачам
    переходити на певні сторінки на фронті (реєстрації, логін)
*/

const PublicOnlyRoute = ({ user, isLoading, error, ...props }) => {
  // якщо  дані користувача магаються отримати то можна про це споівстити користувача
  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  // якщо користувач є то ми перекидаємо його на сторінку на яку він йшов
  if (!user) {
    return <Route {...props} />;
  }

  // якщо даних користувача немає і ми не вантажимо їх то можна переенаправити гостя на головну
  return <Redirect to='/' />;
};

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps)(PublicOnlyRoute);
