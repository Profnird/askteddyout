import React, { useState } from "react";

export const RandomButton = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mousePose, setMousePose] = useState("relative");

  const handleMouseOver = () => {
    const newPosition = {
      top: Math.random() * window.innerHeight + "px",
      left: Math.random() * window.innerWidth + "px",
    };
    setMousePose("absolute");
    setPosition(newPosition);
  };

  return (
    <>
      <button
        onMouseOver={handleMouseOver}
        onTouchStart={handleMouseOver}
        style={{
          position: mousePose,
          top: position.top,
          left: position.left,
        }}
        className="px-3 w-[10em] shadow-2xl hover:shadow-md border-2 py-5"
      >
        No
      </button>
    </>
  );
};
