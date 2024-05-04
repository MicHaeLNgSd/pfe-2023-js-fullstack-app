import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { logout } from '../../api';
import { logoutCreator } from '../../store/actions/actionCreators';

const Header = ({ user, logoutAction }) => {
  const handleLogout = () => {
    // видаляємо токен з локалСтораджу
    logout();

    // видаляємо користувача зі стейту
    logoutAction();
  };

  return (
    <header className={styles.container}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            exact
            to='/'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              exact
              to='/profile'
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Profile
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            exact
            to='/users'
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Active users
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              exact
              to='/chats'
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Chats
            </NavLink>
          </li>
        )}
        {user ? (
          <li>
            <button className={styles.link} onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                exact
                to='/login'
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/registration'
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Registration
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => dispatch(logoutCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
