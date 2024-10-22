// colors.js


const lightColors = {
  primary: "#b72c15",
  primaryTransparent: "#b72c15bb",
  accent: "#FF7A5C",
  accentTransparent: "#FF7A5Caa",
  textLight: "#FFFFFF",
  textDark: "#1E1E1E",
  defaultBg: "#f5f5f5",
};

const darkColors = {
  primary: "#b72c15aa",
  primaryTransparent: "#b72c15bb",
  accent: "#FF3D00",
  accentTransparent: "#FF3D00aa",
  textLight: "#B0B0B0",
  textDark: "#FFFFFF",
  defaultBg: "#36454F",
};

const getColors = (mode) => (mode === "dark" ? darkColors : lightColors);

export default getColors;
