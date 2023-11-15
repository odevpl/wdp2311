import React from 'react';
import { Form, Row, FormCheck } from 'react-bootstrap';
import styles from './Register.module.scss';
const Register = () => {
  return (
    <div className={styles.registerBox}>
      <Form>
        <Row>
          <Form.Check type={'radio'} id={`check-api-${'radio'}`} className='mx-5'>
            <Form.Check.Input type={'radio'} />
            <Form.Check.Label>Mam konto</Form.Check.Label>
          </Form.Check>
          <Form.Check type={'radio'} id={`check-api-${'radio'}`}>
            <Form.Check.Input type={'radio'} />
            <Form.Check.Label>Nie mam konta</Form.Check.Label>
          </Form.Check>
        </Row>
        <Form.Group className='mb-3 my-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Podaj dane do rejestracji</Form.Label>
          <Form.Control type='email' placeholder='E-mail *' className='mb-3' />
          <Form.Control type='password' placeholder='Hasło *' className='mb-3' />
          <Form.Control
            type='password'
            placeholder='Powtórz hasło *'
            className='mb-3'
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
