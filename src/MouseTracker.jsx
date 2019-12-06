import React from "react";
import useCurrentMouseLocation from "./useCurrentMouseLocation";

const MouseTracker = () => {
  const { x, y } = useCurrentMouseLocation();

  return (
    <div>
      x: {x}, y:{y}
    </div>
  );
}; // end MouseTracker

export default MouseTracker;

/* const MouseTracker = () => {
  const coords = useCurrentMouseLocation();

  return (
    <div>
      x: {coords.x}, y:{coords.y}
    </div>
  );
}; // end MouseTracker */
