import React, { useState } from 'react';
import styles from './Promotional.module.scss';
import { useSelector } from 'react-redux';
import { allPromotional } from '../../../redux/productsRedux';
import PromotionalProduct from '../PromotionalProduct/PromotionalProduct';

const Promotional = () => {
  const [deal, setDeal] = useState(0);
  const promotionalProducts = Object.values(useSelector(allPromotional));
  const handleDealChange = number => {
    setDeal(number);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className={'' + styles.dealBg}>
              <h3 className={styles.title}>hot deals</h3>
              <div className={'mr-3 ' + styles.dots}>
                <ul>
                  {[0, 1, 2].map(i => (
                    <li key={i}>
                      <a
                        onClick={() => handleDealChange(i)}
                        className={i === deal ? styles.active : ''}
                      >
                        view {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {promotionalProducts.map((item, index) => (
              <div key={item.id} className={index !== deal && 'd-none'}>
                <PromotionalProduct {...item} />
              </div>
            ))}
          </div>
          <div className='col-7'></div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
