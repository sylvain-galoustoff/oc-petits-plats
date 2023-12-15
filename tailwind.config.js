/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      primary: "#FFD15B",
      black: "#1B1B1B",
      white: "#fff",
      grey: "#EDEDED",
      lightgrey: "#C6C6C6"
    },
    fontFamily: {
      custom: ['Manrope', 'sans-serif'],
    },
  },
};
export const plugins = [];
