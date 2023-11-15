import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

function Tooltip({ children, placement }) {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const parent = ref.current.parentNode;
      if (parent) {
        parent.addEventListener('mouseover', () => setShow(true));
        parent.addEventListener('mouseleave', () => setShow(false));
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.tooltip} ${show && styles.show} ${styles[placement]}`}
    >
      {children}
    </div>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  placement: PropTypes.string,
  children: PropTypes.node,
};
