import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import CompareProducts from '../../views/CompareProducts/CompareProducts';
import { connect } from 'react-redux';
import { getLayout } from '../../../redux/layoutRedux';
import Heading from '../../common/Heading/Heading';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFading: false,
    fadeTiming: parseInt(styles.animationTime),
    priceRange: [0, 1000],
    selectedColor: null,
  };

  handlePageChange(newPage, isSwipe) {
    if (isSwipe) return this.setState({ activePage: newPage });
    this.setState({ isFading: true }, () => {
      setTimeout(() => {
        this.setState({
          activePage: newPage,
          isFading: false,
        });
      }, this.state.fadeTiming);
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

  handlePriceChange = (newRange) => {
    this.setState({ priceRange: newRange });
  };

  handleColorChange(newColor) {
    this.setState({ selectedColor: newColor });
  }

  handleColorLinkClick = (color) => {
    this.setState({ selectedColor: color });
  };

  renderColorFilters() {
    const { products } = this.props;
    const { selectedColor } = this.state;

    const uniqueColors = [...new Set(products.map((item) => item.color))];

    return uniqueColors.map((color, index) => (
      <li key={index}>
        <a
          className={`${styles.colorLink} ${color === selectedColor ? styles.active : ''}`}
          onClick={() => this.handleColorLinkClick(color)}
        >
          <span
            style={{
              backgroundColor: color,
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              transition: 'margin-left 0.1s ease-out', 
              marginLeft: color === selectedColor ? '10px' : '0',
            }}
            onClick={() => this.handleColorLinkClick(color)}
          />
          {color} 
        </a>
      </li>
    ));
  }

  render() {
    const { categories, products, layout } = this.props;
    const { activeCategory, activePage, isFading, priceRange, selectedColor } = this.state;

    const productsPerPage = {
      DESKTOP: 6,
      TABLET: 3,
      MOBILE: 3,
    };

    const categoryCounts = categories.reduce((acc, category) => {
      const count = products.filter((item) => item.category === category.id).length;
      acc[category.id] = count;
      return acc;
    }, {});

    const pagesCount = Math.ceil(categoryCounts[activeCategory] / productsPerPage[layout]);

    const previousPage = () => activePage > 0 && this.handlePageChange(activePage - 1, true);
    const nextPage = () => activePage + 1 < pagesCount && this.handlePageChange(activePage + 1, true);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a onClick={() => this.handlePageChange(i)} className={i === activePage ? styles.active : ''}>
            Page {i}
          </a>
        </li>
      );
    }

    const filteredProducts = products
      .filter((item) => item.category === activeCategory)
      .filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1])
      .filter((item) => !selectedColor || item.color === selectedColor);

    return (
      <Swipeable activePage={activePage} pagesCount={pagesCount} leftAction={nextPage} rightAction={previousPage}>
        <div className={styles.root}>
          <div className="container">
            <div className="row">
              <div className={`col-md-9 ${styles.mainContent}`}>
                <div className={styles.panelBar}>
                  <div className="row no-gutters align-items-end flex-column">
                    <div className={`col-auto ${styles.heading}`}>
                      <h3>New Furniture</h3>
                    </div>
                    <div className={`col ${styles.menu}`}>
                      <ul>
                        {categories.map((item) => (
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
                    <div className={`col-auto ${styles.dots}`}>
                      <ul>{dots}</ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`row swipeableContent ${styles.productsContainer} ${
                    isFading ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  {filteredProducts
                    .slice(activePage * productsPerPage[layout], (activePage + 1) * productsPerPage[layout])
                    .map((item) => (
                      <div key={item.id} className="col-12 col-md-4">
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
                      {categories.map((item) => (
                        <li key={item.id}>
                          <a
                            className={item.id === activeCategory ? styles.active : ''}
                            onClick={() => this.handleCategoryChange(item.id)}
                          >
                            {item.name}{' '}
                            <span
                              className={`${styles.categoryCount} ${item.id === activeCategory ? styles.active : ''}`}
                            >
                              {categoryCounts[item.id]}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h4>FILTER BY PRICE</h4>
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    trackStyle={{ backgroundColor: 'black', height: 7 }}
                    railStyle={{ backgroundColor: 'lightgrey', height: 7 }}
                    handleStyle={{
                      borderColor: 'orange',
                      backgroundColor: 'white',
                      width: 20,
                      height: 20,
                      marginTop: -8,
                      boxShadow: 'none',
                    }}
                  />

                  <div className={styles.filterButtonContainer}>
                    <button className={styles.filterButton}>FILTER</button>
                    <div className={styles.priceRange}>${priceRange[0]} - ${priceRange[1]}</div>
                  </div>
                  <div className={styles.colorFilterContainer}>
                    <h4>FILTER BY COLOR</h4>
                    <ul className={styles.colorFilters}>
                      {this.renderColorFilters()}
                      <li>
                        <a
                          id="color-link-all"
                          className={`${styles.colorLink} ${!selectedColor ? styles.active : ''}`}
                       
                        >
                        </a>
                      </li>
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
      color: PropTypes.string,
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
