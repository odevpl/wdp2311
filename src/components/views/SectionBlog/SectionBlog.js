import React from 'react';
import styles from './SectionBlog.module.scss';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const SectionBlog = () => {
  const posts = useSelector(state => state.posts);

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
                  <a>page</a>
                </li>
                <li>
                  <a>page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.postsContainer}>
          {posts.map(post => (
            <div key={post.id} className='col-12 col-md-4 '>
              <div className={styles.postImage}></div>

              <div className={styles.postInfo}>
                <div className={styles.details}>
                  <p>
                    <span className={styles.icon}>
                      <FontAwesomeIcon icon={faGift}>gift</FontAwesomeIcon>
                    </span>
                    {post.date}
                  </p>

                  <p>
                    <span className={styles.icon}>
                      <FontAwesomeIcon icon={faComments}>comments</FontAwesomeIcon>
                    </span>
                    {post.comments}comments
                  </p>
                </div>
                <div className={styles.content}>
                  <h6>{post.header}</h6>
                  <p className={styles.postText}>{post.description}</p>
                </div>
                <button>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
