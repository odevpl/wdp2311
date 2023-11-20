import styles from './BrandsSlider.module.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLayout } from '../../../redux/layoutRedux';
import getBrandsImages from './GetBrandsImages';

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

  const slidesToShow = Math.min(slidesPerPage[layout], slidesLength);

  const handleNext = () => {
    const nextIndex = (currentIndex + slidesPerPage[layout]) % slidesLength;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - slidesPerPage[layout] + slidesLength) % slidesLength;
    setCurrentIndex(prevIndex);
  };

  const visibleSlides = images.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className={styles.slider}>
      <button onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
      </button>
      {visibleSlides.map(image => (
        <div key={image} className={styles.item}>
          <img src={image} alt={`Brand ${image.id}`} />
        </div>
      ))}
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
      </button>
    </div>
  );
};

export default BrandsSlider;
