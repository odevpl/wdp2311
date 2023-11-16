import styles from './Brands.module.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLayout } from '../../../redux/layoutRedux';

const BrandsSlider = () => {
  const photos = useSelector(state => state.brands);
  const [currentIndex, setCurrentIndex] = useState(0);

  const layout = useSelector(state => getLayout(state));
  const slidesLength = photos.length;

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

  const visibleSlides = photos.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className={styles.slider}>
      <button onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
      </button>
      {visibleSlides.map((photo, index) => (
        <div key={photo.id} className={styles.item}>
          <img src={process.env.PUBLIC_URL + photo.url} alt={photo.description} />
          <p>{photo.description}</p>
        </div>
      ))}
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
      </button>
    </div>
  );
};

export default BrandsSlider;
