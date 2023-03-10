import { useState, useEffect } from "react";

export const useCheckView = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  const handleResize = () => {
    if (window.innerHeight > window.innerWidth) setIsLandscape(false);
    else setIsLandscape(true);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return [isLandscape];
};
