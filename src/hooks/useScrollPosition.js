import { throttle } from "lodash";
import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { scrollX, scrollY };
}
