import React from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSquareFull, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faFolder } from '@fortawesome/free-regular-svg-icons';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-9'>
            <div className={styles.post}>
              <h4 className={styles.title}>Witamy na nowej stronie sklepu!</h4>
              <img src={'images/blog/newShop.jpg'} alt='furnitures' />
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
                iaculis nibh. Quisque nec iaculis magna, vel porttitor nisl. Etiam
                eleifend elit vitae magna lacinia mattis. Sed nisi erat, euismod eu
                elementum ultrices, varius id justo. Vestibulum pellentesque ex in ante
                ornare, quis vestibulum odio tincidunt. Fusce nibh erat, aliquet nec
                condimentum sed, elementum vitae leo.
              </div>
              <div className={styles.line} />
              <div className={styles.footer}>
                <div className={styles.informations}>
                  <div className={styles.admin}>
                    <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon> <p>admin</p>
                  </div>
                  <div className={styles.date}>
                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                    <p>June 15, 2020</p>
                  </div>
                  <div className={styles.file}>
                    <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                    <p>Information</p>
                  </div>
                </div>
                <button className={styles.btn}>Read More...</button>
              </div>
              <div className={styles.line} />
            </div>
          </div>
          <div className='d-none d-lg-block'>
            <div className={styles.menu}>
              <input type='text' placeholder='Search...' />
              <div className={styles.recentPosts}>
                <h5>Recent Posts</h5>
                <ul>
                  <li>Bed</li>
                  <li>Furniture Set</li>
                  <li>Table</li>
                  <li>Garden Set</li>
                </ul>
              </div>
              <div className={styles.recentComments}>
                <h5>Recent Comments</h5>
                <ul></ul>
              </div>
              <div className={styles.archives}>
                <h5>Archives</h5>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faSquareFull}></FontAwesomeIcon> June 2020
                  </li>
                </ul>
              </div>
              <div className={styles.categories}>
                <h5>Categories</h5>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> Information
                  </li>
                </ul>
              </div>
              <div className={styles.meta}>
                <h5>Meta</h5>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> Information
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> Shop
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> Furniture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
