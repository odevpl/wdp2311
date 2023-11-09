import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { swipeLeft, swipeRight } from './Swipeable.module.scss';
import useSwipeable from './useSwipeable';

function Swipeable({ leftAction = () => {}, rightAction = () => {}, children }) {
  const ref = useRef();
  const { initSwipe, onSwipeLeft, onSwipeRight, onSwiping } = useSwipeable({
    deadMove: 50,
  });

  const getFirstChild = () => ref.current.children[0];

  const resetClasses = () => {
    const firstChild = getFirstChild();
    if (firstChild) {
      firstChild.classList.remove(swipeLeft);
      firstChild.classList.remove(swipeRight);
    }
  };

  onSwiping(direction => {
    resetClasses();
    direction > 0
      ? getFirstChild().classList.add(swipeLeft)
      : getFirstChild().classList.add(swipeRight);
  });

  onSwipeLeft(() => {
    resetClasses();
    leftAction();
  });

  onSwipeRight(() => {
    resetClasses();
    rightAction();
  });

  return (
    <div ref={ref} {...initSwipe()}>
      {children}
    </div>
  );
}

export default Swipeable;

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};
