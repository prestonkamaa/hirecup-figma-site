module.exports = {
  // mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
            'sans': ['Inter', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'body': ['Inter'],
      },

transformOrigin: {
      "0": "0%",
    },
    zIndex: {
      "-1": "-1",
    },


    }, 







  },
 
  variants: {
  borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
},


  plugins: [],
}
