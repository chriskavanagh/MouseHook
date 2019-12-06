import { useState, useEffect } from "react";

const useCurrentMouseLoc = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return coords;
};

export default useCurrentMouseLoc;
