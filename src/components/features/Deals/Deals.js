import React from 'react';
import { useSelector } from 'react-redux';
import DealBox from './DealBox';
import RightBox from './RightBox';
import styles from './Deals.module.scss';

const Deals = () => {
  const dealsData = useSelector(state => state.promotions);

  return (
    <div className={`container ${styles.dealsContainer}`}>
      <div className='row'>
        <div className='col-md-6'>
          <DealBox key={dealsData[0].id} {...dealsData[0]} />
        </div>
        <div className='col-md-6'>
          <div className='row'>
            {dealsData
              .slice(1, 3)
              .map(({ id, title, description, imgSrc, subtitle }) => (
                <div key={id}>
                  <RightBox
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    imgSrc={imgSrc}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
