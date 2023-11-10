import React from 'react';
import Heading from '../../common/Heading/Heading';
import styles from './Gallery.module.scss';
import TabsBox from '../../common/TabsBox/TabsBox';
import ProductsBrowser from '../../features/ProductsBrowser/ProductsBrowser';

function Gallery() {
  return (
    <div className='container my-3'>
      <div className={styles.wrapper}>
        <div
          className={styles.leftColumn + ' d-flex flex-column'}
          style={{ gap: '1rem' }}
        >
          <Heading>Furniture gallery</Heading>
          <TabsBox tabs={['featured', 'top seller', 'sale off', 'top rated']}>
            <ProductsBrowser />
          </TabsBox>
        </div>
        <div className={styles.rightColumn + ' w-100'}>
          <img src='1' alt={'image'} className={styles.rightImage} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
