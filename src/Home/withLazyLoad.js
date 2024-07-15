import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const withLazyLoad = (WrappedComponent) => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 1000); // 1-second delay
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return (
      <div ref={ref} style={{ }}>
        {isVisible ? <WrappedComponent {...props} /> : <Spinner />}
      </div>
    );
  };
};

export default withLazyLoad;
