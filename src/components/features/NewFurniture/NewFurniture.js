import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';

import CompareProducts from '../../views/CompareProducts/CompareProducts';

import { connect } from 'react-redux';
import { getLayout } from '../../../redux/layoutRedux';
import Heading from '../../common/Heading/Heading';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFading: false,
    fadeTiming: parseInt(styles.animationTime),
  };

  handlePageChange(newPage, isSwipe) {
    if (isSwipe) return this.setState({ activePage: newPage });
    // Set isFading to true before changing the page to trigger fade-out
    this.setState({ isFading: true }, () => {
      setTimeout(() => {
        // Change the page after a delay to allow fade-out transition
        this.setState({
          activePage: newPage,
          isFading: false, // Set isFading to false to trigger fade-in
        });
      },  this.state.fadeTiming); // Adjust the delay according to your transition duration
    });
  }

  handleCategoryChange(newCategory) {
    this.setState({ isFading: true }, () => {
      setTimeout(() => {
        this.setState({
          activeCategory: newCategory,
          isFading: false,
          activePage: 0,
        });
      }, this.state.fadeTiming);
    });
  }

  render() {
    const { categories, products, layout } = this.props;
    const { activeCategory, activePage, isFading } = this.state;

    const productsPerPage = {
      DESKTOP: 6,
      TABLET: 3,
      MOBILE: 3,
    };

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage[layout]);

    const previousPage = () =>
      activePage > 0 && this.handlePageChange(activePage - 1, true);
    const nextPage = () =>
      activePage + 1 < pagesCount && this.handlePageChange(activePage + 1, true);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable
        activePage={activePage}
        pagesCount={pagesCount}
        leftAction={nextPage}
        rightAction={previousPage}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end flex-column'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New Furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory ? styles.active : ''}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div
              className={`row swipeableContent ${styles.productsContainer} ${
                isFading ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {categoryProducts
                .slice(
                  activePage * productsPerPage[layout],
                  (activePage + 1) * productsPerPage[layout]
                )
                .map(item => (
                  <div key={item.id} className='col-12 col-md-4'>
                    <ProductBox category={item.category}{...item} />
                  </div>
                ))}
            </div>
          </div>
          <div
            className={`row swipeableContent ${styles.productsContainer} ${
              isFading ? styles.fadeOut : styles.fadeIn
            }`}
          >
          </div>
          <div className={styles.compare}>
            <CompareProducts />
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  layout: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

function mapStateToProps(state) {
  return { layout: getLayout(state) };
}

export default connect(mapStateToProps)(NewFurniture);
