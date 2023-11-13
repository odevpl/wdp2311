import React from 'react';
import styles from './Reviews.module.scss';
import StarsRating from '../StarsRating/StarsRating';

function Reviews() {
  return (
    <div className={styles.container}>
      <ul>
        <li>Description</li>
        <li className={styles.selected}>Reviews(0)</li>
        <li>Specification</li>
        <li>Custom tab</li>
      </ul>
      <div className={styles.contents}>
        <div className={styles.reviewContainer}>
          <p>There is no reviews for this product</p>
          <h5>Add a review</h5>
          <p>Your rating</p>
          <div className={styles.starsContainer}>
            <p>Bad</p>
            <StarsRating />
            <p>Good</p>
          </div>
          <p>Your review</p>
          <textarea></textarea>
          <div className={styles.inputsContainer}>
            <input placeholder='Name*' />
            <input placeholder='Email*' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
