

import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import styles from './login.module.scss';

const Login = ({ isOpen, onClose, loginOpen, setIsOpenLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    history.push('/');
    setIsOpenLogin(false)
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.loginModal}>
        <button className={styles.login__close} onClick={loginOpen}>X</button>
        <div className={styles.login__block}>
          <input
            type='email'
            className={styles.login__email}
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={styles.login__password}
            placeholder='Haslo'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.login__info}>
            Nie pamiętasz hasła?  <Link to={'#'} className={styles.login__link}>Przypomnij hasło</Link>
          </p>
          <button className={styles.login__button} onClick={handleLogin}>
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
