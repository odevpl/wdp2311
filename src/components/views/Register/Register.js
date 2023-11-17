import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validFrom = () => {
    let isValid = true;
    const newErrors = { ...error };

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.password.length < 3) {
      newErrors.password = 'Invalid password';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Invalid confirmPassword';
      isValid = false;
    } else {
      newErrors.confirmPassword = '';
    }
    setError(newErrors);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validFrom()) {
      console.log('Ok');
      navigate('/');
    } else {
      console.log('Error');
    }
  };

  return (
    <div className={styles.registerBox}>
      <Col lg={4}>
        <Form className='my-3' onSubmit={handleSubmit}>
          <Row className='justify-content-between'>
            <Form.Check type={'radio'} id={`check-api-${'radio'}`} className='mx-4'>
              <Form.Check.Input type={'radio'} />
              <Form.Check.Label className='my-3'>Mam konto</Form.Check.Label>
            </Form.Check>
            <Form.Check
              type={'radio'}
              id={`check-api-${'radio'}`}
              className='mx-4 px-3'
            >
              <Form.Check.Input type={'radio'} />
              <Form.Check.Label className='my-3'>Nie mam konta</Form.Check.Label>
            </Form.Check>
          </Row>
          <Col>
            <Form.Group className='mb-3 mt-5' controlId='exampleForm.ControlInput1'>
              <Form.Label>Podaj dane do rejestracji</Form.Label>
              <Form.Control
                type='text'
                placeholder='E-mail *'
                className='mb-3'
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
              />
              <span className={styles.error}>{error.email}</span>
              <Form.Control
                value={formData.password}
                onChange={e => handleInputChange('password', e.target.value)}
                type='password'
                placeholder='Hasło *'
                className='mb-3'
              />
              <span className={styles.error}>{error.password}</span>
              <Form.Control
                type='password'
                placeholder='Powtórz hasło *'
                className='mb-1'
                value={formData.confirmPassword}
                onChange={e => handleInputChange('confirmPassword', e.target.value)}
              />
              <span className={styles.error}>{error.confirmPassword}</span>
            </Form.Group>
          </Col>
          <Row className='justify-content-end mx-3'>
            <div className={styles.switchContainer}>
              <input type='checkbox' id='switch' className={styles.switchInput} />
              <label className={styles.switchButton}></label>
              <span className={styles.switchCircle}></span>
            </div>
            <label htmlFor='switch' className={styles.lable}>
              Pokaż hasło
            </label>
          </Row>
          <Col className={`my-2 ${styles.conditions}`}>
            <Form.Check custom type={'checkbox'} id={`check-api-1`} className='mb-3'>
              <Form.Check.Input
                type={'checkbox'}
                style={{ width: '1rem', height: '1rem' }}
              />
              <Form.Check.Label className='pt-1'>
                <b>Zaznacz wszystkie</b>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check custom type={'checkbox'} id={`check-api-2`} className='mb-3 '>
              <Form.Check.Input
                type={'checkbox'}
                style={{ width: '1rem', height: '1rem' }}
              />
              <Form.Check.Label className='pt-1'>
                Akceptuje warunki <span className={styles.orange}> regulaminu</span>*
              </Form.Check.Label>
            </Form.Check>
            <Form.Check custom type={'checkbox'} id={`check-api-3`} className='mb-3'>
              <Form.Check.Input
                type={'checkbox'}
                style={{ width: '1rem', height: '1rem' }}
              />
              <Form.Check.Label className='pt-1'>
                Tak, tak! Chcę otrzymywać JEŻowy newsletter
              </Form.Check.Label>
            </Form.Check>
          </Col>
          <div className={styles.submitBtn}>
            <NavLink to='/' className={styles.linkReturn}>
              <Button>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
                Wróć
              </Button>
            </NavLink>

            <button className={styles.linkRegister}>
              <span>Zarejestruj się</span>
            </button>
          </div>
        </Form>
      </Col>
    </div>
  );
};

export default Register;
