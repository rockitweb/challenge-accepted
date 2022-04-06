import * as React from "react";
import "./src/styles/styles.css";
import { ParallaxProvider } from 'react-scroll-parallax';

 export const wrapRootElement = ({ element }) => (
     <ParallaxProvider>{element}</ParallaxProvider>
 );