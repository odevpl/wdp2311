import styles from './ClientFeedback.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import React from 'react';

const ClientFeedback = () => {
  const clientsData = useSelector(state => state.feedback);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.panelBar} `}>
          <div className='row col-12 no-gutters align-items-end '>
            <div className={styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>page </a>
                </li>
                <li>
                  <a>page </a>
                </li>
                <li>
                  <a>page </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.quoteContainer}>
          <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
          <div className={styles.quoteTextBox}>
            <p className='my-3 py-2'>{clientsData[0].message}</p>
          </div>
          <div className={styles.clientInfoBox}>
            <img src={clientsData[0].clientImg} alt='client1' />
            <div className='d-flex flex-column justify-content-center'>
              <p className='mb-1 font-weight-bold'>{clientsData[0].name}</p>
              <p className='mb-1'>Furniture Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
