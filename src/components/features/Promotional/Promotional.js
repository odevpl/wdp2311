import React, { useState } from 'react';
import styles from './Promotional.module.scss';
import { useSelector } from 'react-redux';
import { allPromotional } from '../../../redux/productsRedux';
import PromotionalProduct from '../../common/PromotionalProduct/PromotionalProduct';
import BestDeal from '../BestDeal/BestDeal';
import { useEffect } from 'react';

const Promotional = () => {
  const [activeDeal, setDeal] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [fade, setFade] = useState(true);

  const promotionalProducts = useSelector(allPromotional);
  console.log(promotionalProducts, 'products');

  useEffect(() => {
    let autoplayInterval;
    if (autoplay) {
      autoplayInterval = setInterval(() => {
        setDeal(prevDeal => (prevDeal + 1) % 3);
        setFade(true);
      }, 3000);
    }
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [autoplay]);

  const handleDealChange = index => {
    setAutoplay(false);
    setFade(true);
    setDeal(index);
    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

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
                      <a
                        onClick={() => handleDealChange(i)}
                        className={i === activeDeal ? styles.active : ''}
                      >
                        view {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {promotionalProducts
              .filter((item, index) => index === activeDeal)
              .map(item => (
                <div key={item.id} className={fade ? styles.fadeOut : styles.fadeIn}>
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
