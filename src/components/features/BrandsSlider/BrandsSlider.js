import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLayout } from '../../../redux/layoutRedux';
import getBrandsImages from './GetBrandsImages';
import styles from './BrandsSlider.module.scss';

const BrandsSlider = () => {
  const brands = useSelector(state => state.brands);
  const images = getBrandsImages(brands, 9);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([]);

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

  useEffect(() => {
    const updateVisibleSlides = () => {
      const newVisibleSlides = images.slice(
        currentIndex,
        currentIndex + slidesPerPage[layout]
      );
      setVisibleSlides(newVisibleSlides);
    };

    updateVisibleSlides();

    window.addEventListener('resize', updateVisibleSlides);

    return () => {
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, [currentIndex, slidesPerPage, layout, images]);

  return (
    <div className={`container ${styles.slider}`}>
      <button onClick={handlePrev} className={`btn ${styles.controlButton}`}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
      </button>
      <div className={`d-flex flex-wrap ${styles.slideContainer}`}>
        {visibleSlides.map((image, index) => (
          <div
            key={index}
            className={`col lg-12 col md-4 col mb-3 {12 / slidesPerPage[layout]} ${styles.item}`}
          >
            <img
              src={image}
              alt={`Brand ${index}`}
              className={`img-fluid ${styles.image}`}
            />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className={`btn ${styles.controlButton}`}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
      </button>
    </div>
  );
};

export default BrandsSlider;
