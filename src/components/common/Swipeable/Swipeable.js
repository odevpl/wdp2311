import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { swipeLeft, swipeRight, scaleIn } from './Swipeable.module.scss';
import useSwipeable from './useSwipeable';

function Swipeable({
  leftAction = () => {},
  rightAction = () => {},
  children,
  activePage,
  pagesCount,
}) {
  const ref = useRef();
  const {
    initSwipe,
    onSwipeLeft,
    onSwipeRight,
    onSwiping,
    onSwipeCancel,
  } = useSwipeable({
    deadMove: 50,
  });

  const lockFirstPage = activePage === 0;
  const lockLastPage = activePage === pagesCount - 1;

  const getFirstChild = () => ref.current.children[0];
  const getMovableContents = () => ref.current.querySelector('.swipeableContent');

  const scaleInAnimation = movableContents => {
    if (!movableContents) return;
    movableContents.classList.toggle(scaleIn, true);
  };

  const animateMovableContents = (value, movableContents) => {
    if (!movableContents) return;
    movableContents.classList.toggle(scaleIn, false);
    movableContents.style.transform = `translateX(${value * -1}px)`;
    if (lockFirstPage || lockLastPage) return;
    movableContents.style.opacity = 1 / Math.abs(value) + 0.2;
  };

  const resetMovableContentsStyle = movableContents => {
    if (!movableContents) return;
    movableContents.style.transform = 'translateX(0px)';
    movableContents.style.opacity = 1;
    return true;
  };

  const animateContainer = (direction, firstChild) => {
    if (!firstChild) return;
    direction > 0
      ? firstChild.classList.add(swipeLeft)
      : firstChild.classList.add(swipeRight);
  };

  const resetClasses = firstChild => {
    if (!firstChild) return;
    firstChild.classList.remove(swipeLeft);
    firstChild.classList.remove(swipeRight);
  };

  const resetElements = () => {
    resetMovableContentsStyle(getMovableContents());
    resetClasses(getFirstChild());
    scaleInAnimation(getMovableContents());
  };

  onSwiping((direction, value) => {
    resetClasses(getFirstChild());
    animateMovableContents(value, getMovableContents()) ||
      animateContainer(direction, getFirstChild());
  });

  onSwipeLeft(() => {
    if (lockLastPage) return resetMovableContentsStyle(getMovableContents());
    resetElements();
    leftAction();
  });

  onSwipeRight(() => {
    if (lockFirstPage) return resetMovableContentsStyle(getMovableContents());
    resetElements();
    rightAction();
  });

  onSwipeCancel(resetElements);

  return (
    <div ref={ref} {...initSwipe()}>
      {children}
    </div>
  );
}

export default Swipeable;

Swipeable.propTypes = {
  activePage: PropTypes.number,
  pagesCount: PropTypes.number,
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};
