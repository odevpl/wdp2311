import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import styles from './ProductSearch.module.scss';
import { getAll } from '../../../redux/categoriesRedux';

class ProductSearch extends Component {
  render() {
    return (
      <form action='' className={styles.root}>
        <div className={styles.category}>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />

          <ul className={styles.list}>
            <li className={styles.mainItem}>
              Select category
              <ul className={styles.childList}>
                <li className={styles.childItem}>Category</li>
              </ul>
            </li>
          </ul>

          <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
        </div>
        <div className={styles.searchField}>
          <input placeholder='Search products...' type='text' />
          <button>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </button>
        </div>
      </form>
    );
  }
}

/*const mapStateToProps = state => ({
  categories: getAll(state),
});*/

export default ProductSearch;
