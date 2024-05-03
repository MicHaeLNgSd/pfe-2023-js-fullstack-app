import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
// import UserContext from './contexts/userContext';
import UsersPage from './pages/Users';
import LoginPage from './pages/Login';
import { refresh } from './api';
import CONSTANTS from './constants';
import PrivateRoute from './components/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';
import ChatsPage from './pages/Chats';
import { connect } from 'react-redux';
import * as ActionCreators from './../../client/src/store/actions/actionCreators';

function App({ userRequest, userSuccess, userError }) {
  // спроба виконання рефреш - запиту
  useEffect(() => {
    const token = window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN);

    // якщо токен існує то робимо запит на рефреш даних користувача
    if (token) {
      userRequest();

      refresh(token)
        .then((response) => {
          // отриманого користувача зберігаємо у стейт
          const userFromServer = response.data.data.user;
          userSuccess(userFromServer);
        })
        .catch((error) => userError(error));
    }
  }, []);

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <PrivateRoute path='/profile' component={ProfilePage} />
      <PrivateRoute path='/chats' component={ChatsPage} />
      <PublicOnlyRoute path='/registration' component={RegistrationPage} />
      <PublicOnlyRoute path='/login' component={LoginPage} />
      <Route path='/users' component={UsersPage} />
    </Switch>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userRequest: () => dispatch(ActionCreators.userRequestCreator()),
  userSuccess: (value) => dispatch(ActionCreators.userSuccessCreator(value)),
  userError: (value) => dispatch(ActionCreators.userErrorCreator(value)),
  logout: () => dispatch(ActionCreators.logoutCreator()),
});

export default connect(null, mapDispatchToProps)(App);
