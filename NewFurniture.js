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
    this.setState({ isFading: true }, () => {
      setTimeout(() => {
        this.setState({
          activePage: newPage,
          isFading: false,
        });
      },  this.state.fadeTiming);
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

    const categoryCounts = categories.reduce((acc, category) => {
      const count = products.filter(item => item.category === category.id).length;
      acc[category.id] = count;
      return acc;
    }, {});

    const pagesCount = Math.ceil(categoryCounts[activeCategory] / productsPerPage[layout]);

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
            Page {i}
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
            <div className='row'>
              <div className={`col-md-9 ${styles.mainContent}`}>
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
                  {products
                    .filter(item => item.category === activeCategory)
                    .slice(
                      activePage * productsPerPage[layout],
                      (activePage + 1) * productsPerPage[layout]
                    )
                    .map(item => (
                      <div key={item.id} className='col-12 col-md-4'>
                        <ProductBox category={item.category} {...item} />
                      </div>
                    ))}
                </div>
              </div>

              <div className={`col-md-3 ${styles.filtersColumn}`}>
                <div className={styles.filtersContainer}>
                  <h4>FILTER BY CATEGORIES</h4>
                  <div className={styles.filterSection}>
                    <ul>
                      {categories.map(item => (
                        <li key={item.id}>
                          <a
                            className={item.id === activeCategory ? styles.active : ''}
                            onClick={() => this.handleCategoryChange(item.id)}
                          >
                            {item.name} <span className={`${styles.categoryCount} ${item.id === activeCategory ? styles.active : ''}`}>{categoryCounts[item.id]}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.compare}>
              <CompareProducts />
            </div>
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
