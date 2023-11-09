import styles from './StarsRating.module.scss';
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

import { addStarsRating } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';

const StarsRating = ({ stars, id, ownRating }) => {
  const [hover, setHover] = useState(0);

  const dispatch = useDispatch();

  const handleClick = (e, star) => {
    e.preventDefault();
    dispatch(addStarsRating({ ownRating: star, id }));
  };
  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <Button key={star} onClick={e => handleClick(e, star)}>
          <FontAwesomeIcon
            icon={star <= (hover || ownRating || stars) ? faStar : farStar}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={
              (hover > 0 && star <= hover) || star <= ownRating
                ? styles.ownStar
                : styles.star
            }
          ></FontAwesomeIcon>
        </Button>
      ))}
    </div>
  );
};

StarsRating.propTypes = {
  id: PropTypes.string,
  ownRating: PropTypes.number,
  stars: PropTypes.number,
};

export default StarsRating;
