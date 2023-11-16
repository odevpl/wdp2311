import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { getAll } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const ProductSearch = () => {
  const allCategories = useSelector(getAll);
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    history.push(`/search/${searchTerm}`);
  };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />

        <ul className={styles.list}>
          <li className={styles.mainItem}>
            {selectedCategory || 'Select category'}
            <ul className={styles.childList}>
              {allCategories.map(category => (
                <li
                  key={category.id}
                  className={styles.childItem}
                  onClick={() => handleCategoryChange(category.name)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder='Search products...'
          type='text'
        />
        <button onClick={handleSearch}>
          <Link to='/search'>
            {' '}
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </Link>
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;
