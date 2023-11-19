import React, { useState } from 'react';
import styles from './Promotional.module.scss';
import { useSelector } from 'react-redux';
import { allPromotional } from '../../../redux/productsRedux';
import PromotionalProduct from '../../common/PromotionalProduct/PromotionalProduct';
import BestDeal from '../BestDeal/BestDeal';
import Swipeable from '../../common/Swipeable/Swipeable';

const Promotional = () => {
  const [deal, setDeal] = useState(0);
  const [index, setIndex] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const promotionalProducts = useSelector(allPromotional);


  const dots = [];
  for (let i = 0; i < promotionalProducts.length; i++) {
    dots.push(
      <li key={i}>
        <a
          className={i === deal ? styles.active : ''}
          onClick={() => {
            setDeal(i);
            setIndex(i);
          }}
        >
          view {i}
        </a>
      </li>
    );
  }
  const previousPage = () =>
    activePage > 0
      ? `${(setIndex(index - 1), setDeal(index - 1), setActivePage(index - 1))}`
      : '';
  const nextPage = () =>
    activePage + 1 < promotionalProducts.length
      ? `${(setDeal(index + 1), setIndex(index + 1), setActivePage(index + 1))}`
      : '';

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-4 d-none d-sm-block ' + styles.hotDeal}>
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
                  <div key={i} className={i !== deal ? 'd-none' : 'd-block'}>
                    <PromotionalProduct {...item} />
                  </div>
                ))}
              </div>
            </Swipeable>
          </div>
          <div className='col-12 col-sm-8'>
            <BestDeal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
