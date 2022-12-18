import React, { useState, useEffect } from "react";

export function useResizeHook() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeFunc = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  });
  return width;
}
