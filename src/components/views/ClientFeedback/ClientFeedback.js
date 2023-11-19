import styles from './ClientFeedback.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import React, { useState } from 'react';
import { allFeedbacks, feedbackCount } from '../../../redux/feedbackRedux';
import Swipeable from '../../common/Swipeable/Swipeable';

const ClientFeedback = () => {
  const [feedback, setFeedback] = useState(0);
  const [index, setIndex] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState(0);

  const feedbacksAmount = useSelector(feedbackCount);
  const feedbacks = useSelector(allFeedbacks);
  const dots = [];
  for (let i = 0; i < feedbacksAmount; i++) {
    dots.push(
      <li key={i}>
        <a
          className={i === feedback ? styles.active : ''}
          onClick={() => {
            setFeedback(i);
            setIndex(i);
          }}
        >
          feedback {i}
        </a>
      </li>
    );
  }

  const previousPage = () =>
    activeFeedback > 0
      ? `${(setFeedback(index - 1), setIndex(index - 1), setActiveFeedback(index - 1))}`
      : '';
  const nextPage = () =>
    activeFeedback + 1 < feedbacksAmount
      ? `${(setFeedback(index + 1), setIndex(index + 1), setActiveFeedback(index + 1))}`
      : '';

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.panelBar} `}>
          <div className='row col-12 no-gutters align-items-end '>
            <div className={styles.heading}>
              <h3>Client Feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <Swipeable
          activePage={activeFeedback}
          pagesCount={feedbacksAmount}
          leftAction={nextPage}
          rightAction={previousPage}
        >
          {feedbacks.map((item, i) => (
            <div
              key={item.id}
              className={
                i !== feedback
                  ? 'd-none'
                  : `d-flex swipeableContent  ${styles.quoteContainer} `
              }
            >
              <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
              <div className={styles.quoteTextBox}>
                <p className='my-3 py-2'>{item.message}</p>
              </div>
              <div className={styles.clientInfoBox}>
                <img src={item.clientImg} alt='client1' />
                <div className='d-flex flex-column justify-content-center'>
                  <p className='mb-1 font-weight-bold'>{item.name}</p>
                  <p className='mb-1'>Furniture Client</p>
                </div>
              </div>
            </div>
          ))}
        </Swipeable>
      </div>
    </div>
  );
};

export default ClientFeedback;
