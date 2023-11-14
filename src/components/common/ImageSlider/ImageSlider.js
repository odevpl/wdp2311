import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ImageSlider({ images = [], select = () => {} }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faChevronLeft}>Left</FontAwesomeIcon>
      </button>
      <div className={styles.thumbnailsWrapper}>
        {images.map(image => (
          <div
            onClick={select}
            className={`${styles.thumbnail} ${images.indexOf(image) === 1 &&
              styles.active}`}
            key={image}
          >
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faChevronRight}>Right</FontAwesomeIcon>
      </button>
    </div>
  );
}

export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.array,
  select: PropTypes.func,
};
