import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function ImageSlider({ images, onChildImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesLength = images.length;

  const slidesPerPage = 6;

  const handleNext = () => {
    const nextIndex = (currentIndex + slidesPerPage) % slidesLength;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - slidesPerPage + slidesLength) % slidesLength;
    setCurrentIndex(prevIndex);
  };
  const visibleSlides = images.slice(currentIndex, currentIndex + 6);
  console.log('visibleSlides', visibleSlides);

  const handleClickImage = image => {
    onChildImageClick(image);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handlePrev} className={styles.button}>
        <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
      </button>
      <div className={styles.thumbnailsWrapper}>
        {visibleSlides.map((image, index) => (
          <div className={styles.thumbnail} key={image.id}>
            <img
              onClick={() => handleClickImage(image)}
              src={process.env.PUBLIC_URL + image}
              alt={image.description}
            />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className={styles.button}>
        <FontAwesomeIcon icon={faChevronRight}>Right</FontAwesomeIcon>
      </button>
    </div>
  );
}

export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.array,
  onChildClick: PropTypes.func,
  onChildImageClick: PropTypes.func,
};
