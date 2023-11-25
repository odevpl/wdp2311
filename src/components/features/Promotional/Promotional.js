import React, { useState } from 'react';
import styles from './Promotional.module.scss';
import { useSelector } from 'react-redux';
import { allPromotional } from '../../../redux/productsRedux';
import PromotionalProduct from '../../common/PromotionalProduct/PromotionalProduct';
import BestDeal from '../BestDeal/BestDeal';
import { useEffect } from 'react';
import Swipeable from '../../common/Swipeable/Swipeable';

const Promotional = () => {
  const promotionalProducts = useSelector(allPromotional);
  const [index, setIndex] = useState(0);
  const [deal, setDeal] = useState(0);
  const [fade, setFade] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [fadeTiming] = useState(parseInt(styles.animationTime));
  const [swapTiming] = useState(parseInt(styles.swapTime));

  useEffect(() => {
    let autoplayInterval;

    if (autoplay) {
      autoplayInterval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setDeal(prevDeal => (prevDeal + 1) % promotionalProducts.length);
          setFade(false);
        }, fadeTiming);
      }, swapTiming * 2);
    }

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [autoplay, fadeTiming, promotionalProducts.length, swapTiming]);

  const handleDealChange = newIndex => {
    setAutoplay(false);
    setFade(true);

    setTimeout(() => {
      setDeal(newIndex);
      setFade(false);
    });
    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  const dots = promotionalProducts.map((item, i) => (
    <li key={i}>
      <a
        className={i === deal ? styles.active : ''}
        onClick={() => {
          handleDealChange(i);
        }}
      >
        view {i}
      </a>
    </li>
  ));

  const previousPage = () => {
    if (index > 0) {
      setIndex(index - 1);
      setDeal(index - 1);
      setActivePage(index - 1);

      setAutoplay(false);
      setTimeout(() => {
        setAutoplay(true);
      }, 10000);
    }
  };

  const nextPage = () => {
    if (index + 1 < promotionalProducts.length) {
      setIndex(index + 1);
      setDeal(index + 1);
      setActivePage(index + 1);

      setAutoplay(false);
      setTimeout(() => {
        setAutoplay(true);
      }, 10000);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-4 d-none d-md-block ' + styles.hotDeal}>
            <div className={styles.dealBg}>
              <h3 className={styles.title}>hot deals</h3>
              <div className={'mr-3 ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <Swipeable
              activePage={activePage}
              pagesCount={dots.length}
              leftAction={nextPage}
              rightAction={previousPage}
            >
              <div className='swipeableContent'>
                {promotionalProducts.map((item, i) => (
                  <div
                    key={i}
                    className={`${i !== deal ? 'd-none' : 'd-block'} ${
                      styles.promotionalItem
                    } ${i === deal ? (fade ? styles.fadeOut : styles.fadeIn) : ''}`}
                  >
                    <PromotionalProduct {...item} />
                  </div>
                ))}
              </div>
            </Swipeable>
          </div>
          <div className='col-12 col-md-8'>
            <BestDeal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
