import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import PropTypes from 'prop-types';
import ProductBox from '../ProductBox/ProductBox';

const Login = ({ loginOpen, setIsOpenLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Zastąp je rzeczywistymi danymi logowania

    const validEmail = 'admin';
    const validPass = 'pass';

    if (email === validEmail && password === validPass) {
      navigate('/');
      setIsOpenLogin(false);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleOverlayClick = e => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      loginOpen();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.loginModal}>
        <button className={styles.login__close} onClick={loginOpen}>
          X
        </button>
        <div className={styles.login__block}>
          <input
            type='email'
            className={styles.login__email}
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type='password'
            className={styles.login__password}
            placeholder='Haslo'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p className={styles.login__info}>
            Nie pamiętasz hasła?{' '}
            <NavLink to={'#'} className={styles.login__link}>
              Przypomnij hasło
            </NavLink>
          </p>
          {error && <p className={styles.login__error}>{error}</p>}
          <button className={styles.login__button} onClick={handleLogin}>
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginOpen: PropTypes.func.isRequired,
  setIsOpenLogin: PropTypes.func.isRequired,
};

export default Login;
