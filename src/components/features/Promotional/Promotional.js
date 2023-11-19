import React, { useState } from 'react';
import styles from './Promotional.module.scss';
import { useSelector } from 'react-redux';
import { allPromotional } from '../../../redux/productsRedux';
import PromotionalProduct from '../../common/PromotionalProduct/PromotionalProduct';
import BestDeal from '../BestDeal/BestDeal';

const Promotional = () => {
  const [deal, setDeal] = useState(0);
  const promotionalProducts = useSelector(allPromotional);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-4 ' + styles.hotDeal}>
            <div className={styles.dealBg}>
              <h3 className={styles.title}>hot deals</h3>
              <div className={'mr-3 ' + styles.dots}>
                <ul>
                  {[0, 1, 2].map(i => (
                    <li key={i}>
                      <a className={i === deal ? styles.active : ''}>view {i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {promotionalProducts.map(item => (
              <div key={item.id}>
                <PromotionalProduct {...item} />
              </div>
            ))}
          </div>
          <div className='col-8'>
            <BestDeal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
