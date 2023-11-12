import React from 'react';
import styles from './Blog.module.scss';
import Button from '../../common/Button/Button';
import { faGift, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <div className={styles.postBox}>
            <div className={styles.postImage}></div>
            <div className={styles.postInfo}>
              <div className={styles.postContainer}>
                <div className={styles.details}>
                  <p>
                    <FontAwesomeIcon icon={faGift} className={styles.gift}>
                      {' '}
                      stars
                    </FontAwesomeIcon>
                    15 JAN 2016
                  </p>

                  <p> 4 comments</p>
                </div>
                <div className={styles.postText}>
                  <h6>Products taht fight static</h6>
                  <p>Lorem impus ...</p>
                </div>
                <Button> Read more</Button>
              </div>
            </div>
          </div>
          <div className={styles.postBox}>
            <div className={styles.postImage}></div>
            <div className={styles.postInfo}></div>
          </div>
          <div className={styles.postBox}>
            <div className={styles.postImage}></div>
            <div className={styles.postInfo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
