import React from 'react';
import styles from './BestDeal.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BestDeal = () => {
  return (
    <div className={' ' + styles.root}>
      <div className={'' + styles.dealInfo}>
        <img src={`images/beds/Aenean Ru Bristique 1.jpg`} alt={'sss'} />
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
      <div className={styles.buttons}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
};

export default BestDeal;
