// eslint-disable-next-line no-undef
const remark = require("remark");
// eslint-disable-next-line no-undef
module.exports = {
  purge: ["./pages/**/*.{tsx}", "./components/**/*.{tsx}"],
  transform: {
    tsx: (content) => {
      return remark().process(content);
    },
  },
  // darkMode: "media", // or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Open Sans", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
