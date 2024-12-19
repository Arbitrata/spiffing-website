import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Counter({ start, end, label }) {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.25, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Update the state when the element becomes visible
      setIsVisible(entry.isIntersecting);
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-fit w-fit text-center" ref={counterRef}>
      {isVisible && (
        <>
          <div>
            <CountUp
              className="text-rotorwhite text-[33px] font-bold"
              start={start}
              end={end}
              duration={2.75}
              prefix="+"
            />
          </div>
          <h1 className="text-[18px] font-semibold text-rotorwhite mt-2">
            {label}
          </h1>
        </>
      )}
    </div>
  );
}
