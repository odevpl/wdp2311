import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.registerBox}>
      <Col lg={4}>
        <Form className='my-3'>
          <Row className='justify-content-between'>
            <Form.Check type={'radio'} id={`check-api-${'radio'}`} className='mx-4'>
              <Form.Check.Input type={'radio'} />
              <Form.Check.Label>Mam konto</Form.Check.Label>
            </Form.Check>
            <Form.Check
              type={'radio'}
              id={`check-api-${'radio'}`}
              className='mx-4 px-3'
            >
              <Form.Check.Input type={'radio'} />
              <Form.Check.Label>Nie mam konta</Form.Check.Label>
            </Form.Check>
          </Row>
          <Col>
            <Form.Group className='mb-3 mt-5' controlId='exampleForm.ControlInput1'>
              <Form.Label>Podaj dane do rejestracji</Form.Label>
              <Form.Control type='email' placeholder='E-mail *' className='mb-3' />
              <Form.Control type='password' placeholder='Hasło *' className='mb-3' />
              <Form.Control
                type='password'
                placeholder='Powtórz hasło *'
                className='mb-1'
              />
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
                <b>Zaznacz wszystko</b>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check custom type={'checkbox'} id={`check-api-2`} className='mb-3 '>
              <Form.Check.Input
                type={'checkbox'}
                style={{ width: '1rem', height: '1rem' }}
              />
              <Form.Check.Label className='pt-1'>
                Akceptuje warunki <span className={styles.orange}> regulaminu *</span>
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
          <Row className='my-3'>
            <Link to='/' className={styles.linkReturn}>
              <Button>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
                Wróć
              </Button>
            </Link>
            <Link to='/' className={styles.linkRegister}>
              <span>Zarejestruj się</span>
            </Link>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default Register;
