import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import styles from './ProductPage.module.scss';
import NewFurnitureSinglePage from '../../features/NewFurniture/NewFurnitureSinglePage';
import Reviews from '../../features/Reviews/Reviews';
import Banner from '../Banner/Banner';
import Button from '../../common/Button/Button';

import {
  faEnvelope,
  faHeart,
  faStar as farStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAngleLeft,
  faAngleRight,
  faChevronLeft,
  faChevronRight,
  faExchangeAlt,
  faMinus,
  faPlus,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// import PropTypes from 'prop-types';

const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(state => getProductById(state, productId));

  return (
    <div className={styles.root}>
      <Banner />
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className={styles.photo}>
              <img src={`/images/beds/${product.name}.jpg`} alt={product.name} />
            </div>
            <div className={styles.slider}>
              <div className={styles.buttonsSlider}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faChevronLeft} className={styles.fa} />
                </Button>
              </div>
              {[1, 2, 3].map(index => (
                <div key={index} className={styles.item}>
                  <img src={`/images/beds/${product.name}.jpg`} alt={product.name} />
                </div>
              ))}
              <div className={styles.buttonsSlider}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.fa} />
                </Button>
              </div>
            </div>
          </div>
          <div className='col-7'>
            <div className='d-flex justify-content-between'>
              <div>
                <p>
                  <b>{product.name}</b>
                </p>
              </div>
              <div className={styles.buttons}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </div>
            </div>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= 2 ? (
                    <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon className={styles.emptyStar} icon={farStar}>
                      {i} stars
                    </FontAwesomeIcon>
                  )}
                </a>
              ))}{' '}
              (0 reviews) | Add Your Review
            </div>
            <div className={styles.line} />
            <div className={styles.price}>
              <span className={styles.oldPrice}>$300</span>
              <span className={styles.priceBox}>$250.00</span>
            </div>
            <div className={styles.line} />
            <div className={styles.actionBtns}>
              <Button variant='outline' className={'cart'}>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Button>
              <div className={styles.amount}>
                <p className={styles.amountTxt}>Quantity:</p>
                <Button variant='outline' className={styles.amountInput}>
                  2
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faPlus}>Add to compare</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.overview}>
              <h5>Quick overview</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className={styles.line} />
            <div className={styles.infos}>
              <p>
                <span>Availability:</span>
                In Stock
              </p>
              <p>
                <span>Category:</span>
                Furniture
              </p>
            </div>
            <div className={styles.line} />
            <div className={styles.socials}>
              <Button variant='outline' className={'facebook'}>
                <FontAwesomeIcon fill={'blue'} icon={faFacebook}></FontAwesomeIcon>{' '}
                Share
              </Button>
              <Button variant='outline' className={'google'}>
                <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon> Goolge+
              </Button>
              <Button variant='outline' className={'twitter'}>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Tweet
              </Button>
              <Button variant='outline' className={'pinterest'}>
                <FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon> Pinterest
              </Button>
              <Button variant='outline' className={'linkedin'}>
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon> Linkedin
              </Button>
            </div>
          </div>
        </div>
        <Reviews />
      </div>
      <NewFurnitureSinglePage />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
