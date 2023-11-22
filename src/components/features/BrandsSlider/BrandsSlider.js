import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLayout } from '../../../redux/layoutRedux';
import getBrandsImages from './GetBrandsImages';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './BrandsSlider.module.scss';

const BrandsSlider = () => {
  const brands = useSelector(state => state.brands);
  const images = getBrandsImages(brands, 9);
  const [currentIndex, setCurrentIndex] = useState(0);

  const layout = useSelector(state => getLayout(state));
  const slidesLength = images.length;

  const slidesPerPage = {
    DESKTOP: 6,
    TABLET: 4,
    MOBILE: 3,
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + slidesPerPage[layout]) % slidesLength;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - slidesPerPage[layout] + slidesLength) % slidesLength;
    setCurrentIndex(prevIndex);
  };

  const getColClass = () => {
    switch (layout) {
      case 'DESKTOP':
        return 'col';
      case 'TABLET':
        return 'col-4';
      case 'MOBILE':
        return 'col-3 col-xs-3';
      default:
        return 'col-md-4';
    }
  };

  const visibleSlides = images.slice(
    currentIndex,
    currentIndex + slidesPerPage[layout]
  );

  return (
    <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
      <div className={styles.slider}>
        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
        </button>
        <div className='row justify-content-center'>
          {visibleSlides.map(image => (
            <div key={image} className={`${getColClass()} ${styles.item}`}>
              <img src={image} alt={`Brand ${image.id}`} className='img-fluid w-100' />
            </div>
          ))}
        </div>
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
        </button>
      </div>
    </Swipeable>
  );
};

export default BrandsSlider;
