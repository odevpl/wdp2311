import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useSlider from './useSlider';

function ImageSlider({ images, onChildImageClick, selectedImage }) {
  const { initSlider, prev, next, scrollToFirst } = useSlider({ step: 3 });

  if (selectedImage === images[0]) scrollToFirst();

  return (
    <div className={styles.wrapper}>
      <button onClick={prev} className={styles.button}>
        <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
      </button>
      <div className={styles.thumbnailsWrapper} {...initSlider()}>
        {images.map(image => (
          <div
            key={image.id}
            onClick={() => onChildImageClick(image)}
            className={`${styles.thumbnail} ${
              selectedImage === image ? styles.selected : ''
            }`}
          >
            <img src={process.env.PUBLIC_URL + image} alt={image.description} />
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
