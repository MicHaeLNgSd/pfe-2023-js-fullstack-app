import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import styles from './ProfilePage.module.scss';
import UpdateUserForm from '../../components/formComponents/UpdateUserForm';
import { connect } from 'react-redux';
import { logoutCreator } from '../../store/actions/actionCreators';

const ProfilePage = ({ user, logout }) => {
  const [isProfileUpdating, setIsProfileUpdating] = useState(false);
  const history = useHistory();

  const handleDeleteProfile = () => {
    // TODO переробити на запит на сервер
    // видаляємо дані про користувача
    logout();
    // автоматично перенести на головну сторінку
    history.replace('/');
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <aside className={styles.aside}>
          <button className={styles.btn} onClick={() => setIsProfileUpdating(false)}>
            Profile
          </button>
          <button className={styles.btn} onClick={() => setIsProfileUpdating(true)}>
            Change profile
          </button>
          <button
            className={cx(styles.btn, styles.deleteBtn)}
            onClick={handleDeleteProfile}
          >
            Delete profile
          </button>
        </aside>
        <section className={styles.section}>
          {isProfileUpdating ? (
            <>
              <h1 className={styles.heading}>Profile update form</h1>
              <UpdateUserForm />
            </>
          ) : (
            <UserProfile user={user} />
          )}
        </section>
      </section>
    </>
  );
};

const mapStateToProps = ({ user }) => user;
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
