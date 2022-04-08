// example theme
import theme from "@theme-ui/preset-roboto";

import { hero } from "./hero";
import layout from "./layouts";

const styles = {
  ...theme.styles,
  p: {
    ...theme.styles.p,
    color: "white",
    fontWeight: "light",
    fontSize: [3],
  },
  h2: {
    color: "primary",
    fontSize: [5],
    fontWeight: "light",
  },
};

export default {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Ubuntu, Roboto, system-ui, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  fontWeights: {
    light: 300,
    body: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    ...theme.colors,
    primary: "#F58840",
    muted: "#C5C2C2",
    bg: "#101010",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
  styles: {
    ...styles,
  },
  text: {
    ...styles,
    paragraph: {
      ...styles.p,
    },
    default: {
      ...styles.p,

    },
    heading: {
      primary: {
        fontFamily: "heading",
        color: "primary",
        letterSpacing: [2],
        fontSize: [5],
        my: [3],
        fontWeight: "body",
        //lineHeight: [2],
      },
      white: {
        fontFamily: "heading",
        color: "white",
        letterSpacing: [1],
        fontSize: [6],
        //lineHeight: [2],
      },
      small: {
        fontFamily: "heading",
        variant: "text.heading.primary",
        fontSize: [4],
      },
      muted: {
        fontFamily: "heading",
        color: "muted",

        letterSpacing: [3],
        fontSize: [4],
        lineHeight: [2],
        //textTransform: "uppercase",
      },
    },
    bold: {
      variant: "text.default",
      fontWeight: "bold",
    },
    muted: {
      variant: "paragraph",
      color: "muted",
    },
    small: {
      variant: "paragraph",
      color: "white",
      fontSize: [2],
    },
  },
  ...layout,
  ...hero,
};
