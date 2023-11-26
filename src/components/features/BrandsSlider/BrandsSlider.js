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
  const [activePage, setActivePage] = useState(0);

  const layout = useSelector(state => getLayout(state));
  const slidesLength = images.length;

  const slidesPerPage = {
    DESKTOP: 6,
    TABLET: 4,
    MOBILE: 3,
  };

  const dots = [];
  const dotsPerPage = Math.ceil(slidesLength / slidesPerPage[layout]);

  for (let i = 0; i < dotsPerPage; i++) {
    dots.push(
      <li key={i}>
        <a
          className={i === activePage ? styles.active : ''}
          onClick={() => handleDotClick(i)}
        >
          •
        </a>
      </li>
    );
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + slidesPerPage[layout]) % slidesLength;
    setCurrentIndex(nextIndex);
    setActivePage(Math.floor(nextIndex / slidesPerPage[layout]));
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - slidesPerPage[layout] + slidesLength) % slidesLength;
    setCurrentIndex(prevIndex);
    setActivePage(Math.floor(prevIndex / slidesPerPage[layout]));
  };

  const handleDotClick = index => {
    setCurrentIndex(index * slidesPerPage[layout]);
    setActivePage(index);
  };

  const getColClass = () => {
    switch (layout) {
      case 'DESKTOP':
        return 'col';
      case 'TABLET':
        return 'col';
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

  const pagesCount = Math.ceil(images.length / slidesPerPage[layout]);

  const nextPage = () => {
    const nextIndex = (currentIndex + slidesPerPage[layout]) % slidesLength;
    setCurrentIndex(nextIndex);
    setActivePage(Math.floor(nextIndex / slidesPerPage[layout]));
  };

  const previousPage = () => {
    const prevIndex =
      (currentIndex - slidesPerPage[layout] + slidesLength) % slidesLength;
    setCurrentIndex(prevIndex);
    setActivePage(Math.floor(prevIndex / slidesPerPage[layout]));
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.slider}`}>
          <div className={`col-12 no-gutters align-items-end `}>
            <div className={styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
          <Swipeable
            activePage={activePage}
            pagesCount={pagesCount}
            leftAction={previousPage}
            rightAction={nextPage}
          >
            <div
              className={`row-with-buttons d-flex align-items-end justify-content-between`}
            >
              <button onClick={handlePrev} className={`${styles.button} mx-2`}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
              </button>
              <div className={`row justify-content-center`}>
                {visibleSlides.map((image, i) => (
                  <div key={i} className={`${getColClass()} ${styles.item}`}>
                    <img
                      src={image}
                      alt={`Brand ${i + 1}`}
                      className='img-fluid w-100'
                    />
                  </div>
                ))}
              </div>
              <button onClick={handleNext} className={`${styles.button} mx-2`}>
                <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
              </button>
            </div>
          </Swipeable>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
