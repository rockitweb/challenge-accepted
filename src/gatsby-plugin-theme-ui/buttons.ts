//import { gradients } from "./colors";

const buttons = {
  buttons: {
    default: {
      display: "block",
      cursor: "pointer",
      py: 1,

      width: "fit-content",
      fontSize: [3, 2, 2],
      borderRadius: "button",
      //textTransform: "uppercase",
      textDecoration: "none",
      //fontWeight: "bold",
    },
    primary: {
      variant: "buttons.default",
      bg: "primary",
      color: "white!important",
      px: [3],
      //boxShadow: "0px 4px 8px #99B4BC, 0px 2px 4px rgba(54, 123, 245, 0.24)",
    },
    disabled: {
      variant: "buttons.default",
      bg: "gray",
      color: "white!important",
      px: [3],
      //boxShadow: "0px 4px 8px #99B4BC, 0px 2px 4px rgba(54, 123, 245, 0.24)",
      cursor: "not-allowed",
    },
    buy: {
      variant: "buttons.default",
      bg: "primary",
      color: "white",
      fontSize: [2],
      px: [3],
      boxShadow: "0px 4px 8px #99B4BC, 0px 2px 4px rgba(54, 123, 245, 0.24)",
    },
    white: {
      variant: "buttons.default",
      bg: "white",
      color: "primary",
      px: [3],
      //boxShadow: "0px 4px 8px #99B4BC, 0px 2px 4px rgba(54, 123, 245, 0.24)",
    },
    secondary: {
      variant: "buttons.default",
      bg: "secondary",
      color: "white",
    },
    outline: {
      variant: "buttons.default",
      bg: "white",
      color: "primary",
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: "1px",
      px: [3],
    },
    textOnly: {
      cursor: "pointer",
      display: "block",
      bg: "transparent",
      m: 0,
      p: 0,
    },
    icon: {
      numericInput: {
        borderRadius: "0px",
        backgroundColor: "transparent",
      },
    },
  },
};

export default buttons;
