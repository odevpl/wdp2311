import { useEffect, useRef, useState } from 'react';

function useSlider({ step = 3 }) {
  const ref = useRef();
  const [container, setContainer] = useState();

  const scroll = direction =>
    direction
      ? (container.scrollLeft += container.children[0].offsetWidth * step * direction)
      : (container.scrollLeft = 0);

  const centerSlider = e => {
    const containerRect = container.getBoundingClientRect();
    const childRect = e.target.getBoundingClientRect();
    container.scrollLeft +=
      childRect.x - containerRect.x - containerRect.width / 2 + childRect.width / 4;
  };

  useEffect(() => (ref.current ? setContainer(ref.current) : setContainer()), [ref]);

  return {
    initSlider: () => ({
      ref,
      style: { scrollBehavior: 'smooth' },
      onClick: e => centerSlider(e),
    }),
    next: container ? () => scroll(1) : () => {},
    prev: container ? () => scroll(-1) : () => {},
    scrollToFirst: container ? () => scroll(0) : () => {},
  };
}

export default useSlider;
