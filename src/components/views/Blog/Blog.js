import React from 'react';
import styles from './Blog.module.scss';
import Button from '../../common/Button/Button';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Latest Blog</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>page </a>
                </li>
                <li>
                  <a>page </a>
                </li>
                <li>
                  <a> page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.postsContainer}>
          <div className='col m-3'>
            <div className={styles.postImage}></div>

            <div className={styles.postInfo}>
              <div className={styles.details}>
                <p>
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faGift}>gift</FontAwesomeIcon>
                  </span>
                  15 JAN 2016
                </p>

                <p>
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faComments}>gift</FontAwesomeIcon>
                  </span>
                  4 comments
                </p>
              </div>
              <div>
                <h6>Products that fight static</h6>
                <p className={styles.postText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <Button> Read more</Button>
            </div>
          </div>

          <div className='col m-3'>
            <div className={styles.postImage}></div>
            <div className={styles.postInfo}></div>
          </div>
          <div className='col m-3'>
            <div className={styles.postImage}></div>
            <div className={styles.postInfo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
