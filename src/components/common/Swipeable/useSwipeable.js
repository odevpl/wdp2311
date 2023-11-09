import { useState } from 'react';

function useSwipeable({ deadMove = 50 }) {
  const [move, setMove] = useState();

  const getSwipeValue = e => {
    if (e.type.includes('mouse')) {
      return move.x - e.clientX;
    } else {
      return e.touches[0]
        ? move.x - e.touches[0].clientX
        : move.x - e.changedTouches[0].clientX;
    }
  };

  let swipeLeftAction = () => {};
  let swipeRightAction = () => {};
  let swipingAction = () => {};

  const handleMouseMove = e => {
    if (move) {
      const swipeValue = getSwipeValue(e);
      swipeValue > 0 ? swipingAction(1) : swipingAction(-1);
    }
  };

  const handleMouseUp = e => {
    if (move) {
      const isMouse = e.type.includes('mouse');
      const swipeValue = getSwipeValue(e);
      if (Math.abs(swipeValue) > deadMove) {
        if (isMouse) {
          move.x - e.clientX > 0 ? swipeLeftAction() : swipeRightAction();
        } else {
          move.x - e.changedTouches[0].clientX > 0
            ? swipeLeftAction()
            : swipeRightAction();
        }
      }
    }
    setMove();
  };

  const handleMouseDown = e => {
    e.preventDefault();
    setMove({ x: e.clientX });
  };

  const handleTouchStart = e => {
    setMove({ x: e.touches[0].clientX });
  };

  return {
    initSwipe: () => ({
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,

      onTouchStart: handleTouchStart,
      onTouchMove: handleMouseMove,
      onTouchEnd: handleMouseUp,
      onTouchCancel: handleMouseUp,
    }),
    onSwipeLeft: callback => {
      swipeLeftAction = callback;
    },
    onSwipeRight: callback => {
      swipeRightAction = callback;
    },
    onSwiping: callback => {
      swipingAction = callback;
    },
  };
}

export default useSwipeable;
