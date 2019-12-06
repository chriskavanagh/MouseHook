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
