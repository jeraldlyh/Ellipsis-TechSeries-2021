module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      fontSize: {
        'xxs': '.3rem'
      },
      fontFamily: {
        serif: ["Alatsi"]
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
