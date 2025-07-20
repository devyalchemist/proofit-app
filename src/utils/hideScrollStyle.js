export const hideScrollStyle = {
  overflow: "auto", // Ensures content remains scrollable
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE/Edge (camelCase for React)
  "&::-webkit-scrollbar": {
    // Chrome/Safari/Opera
    display: "none",
    width: 0,
    height: 0,
    background: "transparent",
  },
};
