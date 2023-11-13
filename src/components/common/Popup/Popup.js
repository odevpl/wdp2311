import React from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.scss';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import StarsRating from '../../features/StarsRating/StarsRating';

const Popup = props => {
  return (
    <div>
      {props.backgroundBlur ? <div className={styles.blur}></div> : ''}
      <Modal
        className={styles.root}
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>{props.name}</Modal.Title>
          <button type='button' className='close' onClick={props.onHide}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={7}>
              <img
                className={styles.photo}
                src={`images/beds/${props.name}.jpg`}
                alt={props.name}
              />
            </Col>
            <Col md={5}>
              <div>
                <h5 className={styles.name}>{props.name}</h5>
                {props.oldPrice ? (
                  <h5 className={styles.oldPrice}>Old price: ${props.oldPrice}</h5>
                ) : (
                  ''
                )}
                <h5>Discount: {props.promo ? 'Promotion' : 'Standard'} price</h5>
                <h5>
                  Price: <b>${props.price}</b>
                </h5>
                <div>
                  <h5>Rating: </h5>
                  <StarsRating
                    stars={props.stars}
                    id={props.id}
                    ownRating={props.ownRating}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
Popup.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  ownRating: PropTypes.number,
  onHide: PropTypes.func,
  backgroundBlur: PropTypes.bool,
};

export default Popup;
