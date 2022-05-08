type ColorTypeKeys =
  | "darker"
  | "dark"
  | "gray"
  | "lightGray"
  | "light"
  | "error"
  | "info"
  | "warning"
  | "success";

type ColorTypes = {
  [index in ColorTypeKeys]: string;
};

const ColorPalette: ColorTypes = Object.freeze({
  darker: "#121212",
  dark: "#333333",
  gray: "#444444",
  lightGray: "#888888",
  light: "#fafafa",
  error: "#e63946",
  info: "#0096c7",
  warning: "#ffba08",
  success: "#43aa8b",
});

export default ColorPalette;
