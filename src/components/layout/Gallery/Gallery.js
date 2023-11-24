import React from 'react';
import Heading from '../../common/Heading/Heading';
import styles from './Gallery.module.scss';
import TabsBox from '../../common/TabsBox/TabsBox';
import ProductsBrowser from '../../features/ProductsBrowser/ProductsBrowser';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getLayout } from '../../../redux/layoutRedux';

function Gallery() {
  const [tabActive, setTabActive] = useState('featured');
  const layout = useSelector(getLayout);

  const handleTabChange = newTab => {
    setTabActive(newTab);
  };

  return (
    <div className='container my-3'>
      <div
        className={`${styles.wrapper} ${
          layout === 'MOBILE' ? styles.mobileLayout : ''
        }`}
      >
        <div
          className={` ${styles.leftColumn} d-flex flex-column col-sm-12`}
          style={{ gap: '1rem' }}
        >
          <Heading>Furniture gallery</Heading>
          <TabsBox
            tabActive={tabActive}
            onTabChange={handleTabChange}
            tabs={['featured', 'top seller', 'sale off', 'top rated']}
          >
            <ProductsBrowser tabActive={tabActive} />
          </TabsBox>
        </div>

        <div
          className={`${styles.rightColumn} w-100 ${
            layout === 'MOBILE' ? styles.rightColumnBlock : ''
          }`}
        >
          <img
            src={window.location.origin + '/images/beds/Aenean Ru Bristique 13.jpg'}
            alt={'bed'}
            className={styles.rightImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
