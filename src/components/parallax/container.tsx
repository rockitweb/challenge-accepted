import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const Container = ({ children, scrollAxis }) => (
  <ParallaxProvider scrollAxis={scrollAxis}>
    <div>
      <div>{children}</div>
    </div>
  </ParallaxProvider>
);
