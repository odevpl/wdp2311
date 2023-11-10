import styles from './Brands.module.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BrandsSlider = () => {
  const photos = useSelector(state => state.brands);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className={styles.slider}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
      </button>
      {photos.map((photo, index) => (
        <div key={photo.id} className={styles.item}>
          <img src={process.env.PUBLIC_URL + photo.url} alt={photo.description} />
          <p>{photo.description}</p>
        </div>
      ))}
      <button onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
      </button>
    </div>
  );
};

export default BrandsSlider;
