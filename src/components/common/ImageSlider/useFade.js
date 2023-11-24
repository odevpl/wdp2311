import { useEffect, useState } from 'react';

function useFade(fadeOutClass, fadeInClass) {
  const [isFading, setIsFading] = useState();

  useEffect(() => {
    if (isFading) {
      setIsFading(false);
    }
  }, [isFading]);

  return {
    fadeClass: isFading ? fadeOutClass : fadeInClass,
    doFade: () => setIsFading(true),
  };
}

export default useFade;
