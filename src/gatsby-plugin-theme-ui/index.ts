// example theme
import theme from "@theme-ui/preset-roboto";

import { hero } from "./hero";
import layout from "./layouts";

const styles = {
  ...theme.styles,
  h2: {
    color: "primary",
    fontSize: [5],
    fontWeight: "thin",
  },
};

export default {
  ...theme,
  fontWeights: {
    thin: 200,
    body: 400,
    heading: 900,
    bold: 700,
  },
  colors: {
    ...theme.colors,
    primary: "#F58840",
    muted: "#96918C",
    bg: "#101010",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
  styles: {
    ...styles,
  },
  text: {
    ...styles,
    heading: {
      primary: {
        color: "primary",
        letterSpacing: [1],
        fontSize: [7],
        //lineHeight: [2],
      },
      small: {
        variant: "text.heading.primary",
        fontSize: [4],
      },
      muted: {
        color: "muted",

        letterSpacing: [3],
        fontSize: [4],
        lineHeight: [2],
        textTransform: "uppercase",
      },
    },
  },
  ...layout,
  ...hero,
};
