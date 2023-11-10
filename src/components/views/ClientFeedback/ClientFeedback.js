import styles from './ClientFeedback.module.scss';

import React from 'react';

const ClientFeedback = () => {
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
      </div>
    </div>
  );
};

export default ClientFeedback;
