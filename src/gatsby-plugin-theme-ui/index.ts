// example theme
import theme from "@theme-ui/preset-roboto";

import { hero } from "./hero";
import layout from "./layouts";

const styles = {
  ...theme.styles,
  root: {
    ...theme.styles.root,
    letterSpacing: [".1em"],
  },

  p: {
    ...theme.styles.p,
    color: "white",
    fontWeight: "light",
    fontSize: [1],
    lineHeight: [2],
    marginBlockStart: ["1em"],
    marginBlockEnd: ["1em"],
    //letterSpacing: [".1em"],
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
    grey: "#171717",
    overlay: "rgba(0, 0, 0, 0.7)", //"rgba(55,54,54,.7)", //"rgba(0, 0, 0, 0.7)",
  },
  styles: {
    ...styles,
    ul: {
      fontFamily: "body",
      fontWeight: "light",
      lineHeight: "body",
      fontSize: 1,
      color: "white",
      li: {
        pl: [3],
      },

      pl: [3],
    },
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
        fontSize: [3],
        my: [4],
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
    medium: {
      variant: "text.default",
      fontWeight: "medium",
    },
    large: {
      variant: "text.default",
      fontWeight: "medium",
      fontSize: [3],
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
    ul: {
      fontFamily: "body",
      fontWeight: "light",
      lineHeight: "body",
      fontSize: 3,
      color: "white",
    },
  },

  brand: {
    default: { fontFamily: "heading", color: "white", lineHeight: [1] },
    line1: { variant: "brand.default", fontSize: [5] },
    line2: {
      variant: "brand.default",
      textTransform: "uppercase",
      fontSize: [1],
      fontWeight: "light",
    },
  },
  nav: {
    color: "white",
    item: {
      p: [2],
    },
  },
  ...layout,
  ...hero,
};
