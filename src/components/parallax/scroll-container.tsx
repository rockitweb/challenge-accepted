import React, { PropsWithChildren } from "react";
import { ValidScrollAxis } from "parallax-controller";
import { ParallaxProvider } from "react-scroll-parallax";

export const ScrollContainer = (
  props: PropsWithChildren<{
    scrollAxis?: ValidScrollAxis;
  }>
) => {
  const [scrollEl, setScrollElement] = React.useState(null);
  const ref = React.useRef();

  React.useEffect(() => {
    setScrollElement(ref.current);
  });

  return (
    <div className="scroll-container" ref={ref}>
      <ParallaxProvider
        scrollContainer={scrollEl}
        scrollAxis={props.scrollAxis}
      >
        {props.children}
      </ParallaxProvider>
    </div>
  );
};
