import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLayout, setLayout } from '../../../redux/layoutRedux';

const LAYOUT_BREAKPOINTS = {
  MOBILE: 576,
  TABLET: 992,
  DESKTOP: 1200,
};

const getWidth = () =>
  Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
    window.outerWidth || 0
  );

function useLayoutListener() {
  const currentLayout = useSelector(getLayout);
  const dispatch = useDispatch();

  const setCurrentLayout = () => {
    const width = getWidth();
    let layout = Object.keys(LAYOUT_BREAKPOINTS)[0];
    for (const device in LAYOUT_BREAKPOINTS) {
      if (width > LAYOUT_BREAKPOINTS[device]) {
        layout = device;
      }
    }
    dispatch(setLayout(layout));
  };

  useEffect(() => {
    setCurrentLayout();
    window.onresize = setCurrentLayout;
  }, [setCurrentLayout]);

  return currentLayout;
}

export default useLayoutListener;
