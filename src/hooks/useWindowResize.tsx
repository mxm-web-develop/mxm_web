'use client'
import { useEffect, useState } from "react";

const useBodySize = () => {
  const [bodySize, setBodySize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setBodySize({ width, height });
      }
    });

    const body = document.querySelector('body');
    if (body) {
      resizeObserver.observe(body);
    }

    return () => {
      if (body) {
        resizeObserver.unobserve(body);
      }
    };
  }, []);

  return bodySize;
};

export default useBodySize