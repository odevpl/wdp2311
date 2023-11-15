import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import CompareProducts from '../../views/CompareProducts/CompareProducts';

import { connect } from 'react-redux';
import { getLayout } from '../../../redux/layoutRedux';
import Heading from '../../common/Heading/Heading';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFading: false,
  };

  handlePageChange(newPage) {
    // Set isFading to true before changing the page to trigger fade-out
    this.setState({ isFading: true }, () => {
      setTimeout(() => {
        // Change the page after a delay to allow fade-out transition
        this.setState({
          activePage: newPage,
          isFading: false, // Set isFading to false to trigger fade-in
        });
      }, 400); // Adjust the delay according to your transition duration
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
      }, 600);
    });
  }

  render() {
    const { categories, products, layout } = this.props;
    const { activeCategory, activePage, isFading } = this.state;

    const productsPerPage = {
      DESKTOP: 8,
      TABLET: 6,
      MOBILE: 3,
    };

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage[layout]);

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
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <Heading>New Furniture</Heading>
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
            className={`row ${styles.productsContainer} ${
              isFading ? styles.fadeOut : styles.fadeIn
            }`}
          >
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-12 col-md-4 col-lg-3'>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
          <div className={styles.compare}>
            <CompareProducts />
          </div>
        </div>
      </div>
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
