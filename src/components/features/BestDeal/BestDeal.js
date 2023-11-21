import React from 'react';
import styles from './BestDeal.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { allPromotional } from '../../../redux/productsRedux';
import { useState } from 'react';
import { useEffect } from 'react';
const BestDeal = React.memo(() => {
  const bestDeals = useSelector(allPromotional);

  const [currentDeal, setCurrentDeal] = useState(0);
  const [fade, setFade] = useState(false);

  const mainDeal = bestDeals.slice(currentDeal, currentDeal + 1);
  const dealsLength = bestDeals.length;

  const handleNext = e => {
    e.preventDefault();
    const nextDeal = (currentDeal + 1) % dealsLength;
    setFade(true);

    setTimeout(() => {
      setCurrentDeal(nextDeal);
      setFade(false);
    }, 300);
  };

  const handlePrev = e => {
    e.preventDefault();
    const prevDeal = (currentDeal - 1 + dealsLength) % dealsLength;
    setFade(true);

    setTimeout(() => {
      setCurrentDeal(prevDeal);
      setFade(false);
    }, 300);
  };

  return (
    <div className={' ' + styles.root}>
      {mainDeal.map(deal => (
        <div
          key={deal.id}
          className={'' + `${styles.dealInfo} ${fade ? styles.fadeOut : styles.fadeIn}`}
        >
          <img src={`images/${deal.category}s/${deal.name}.jpg`} alt={`${deal.name}`} />
          <div className={styles.infoBg}>
            <div className={styles.infoTexts}>
              <p className={styles.mainText}>
                indoor <b>furniture</b>
              </p>
              <p className={styles.additionalText}>save up to 50% of all furniture</p>
            </div>
            <div className={styles.button}>
              <Button>Shop now</Button>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.buttons}>
        <Button variant='small' onClick={e => handlePrev(e)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <Button variant='small' onClick={e => handleNext(e)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
});

BestDeal.displayName = 'BestDeal';

export default BestDeal;
