import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useSlider from './useSlider';

function ImageSlider({ images, onChildImageClick, selectedImage }) {
  const { initSlider, prev, next, scrollToFirst } = useSlider({ step: 3 });

  if (selectedImage === images[0]) scrollToFirst();
  const selectedClass = image => (selectedImage === image ? styles.selected : '');

  return (
    <div className={styles.wrapper}>
      <button onClick={prev} className={styles.button}>
        <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
      </button>
      <div className={styles.thumbnailsWrapper} {...initSlider()}>
        {images.map(image => (
          <div
            key={image}
            onClick={() => onChildImageClick(image)}
            className={`${styles.thumbnail} ${selectedClass(image)}`}
          >
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
      <button onClick={next} className={styles.button}>
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
  selectedImage: PropTypes.string,
};
