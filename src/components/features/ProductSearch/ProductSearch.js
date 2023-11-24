import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { getAll } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductSearch = () => {
  const allCategories = useSelector(getAll);
  const [isListVisible, setListVisibility] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSearch} action='' className={styles.root}>
      <div className={styles.category + ' d-none d-md-flex'}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />

        <ul className={styles.list}>
          <li className={styles.mainItem}>
            Select category
            <ul className={`${styles.childList} ${isListVisible && styles.visible}`}>
              {allCategories.map(category => (
                <li key={category.id} className={styles.childItem}>
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
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search products...'
          type='text'
        />
        <button>
          <Link to={`/search?query=${searchQuery}`}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </Link>
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;
