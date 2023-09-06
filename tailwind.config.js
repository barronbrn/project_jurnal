/** @type {import('tailwindcss').Config} */
export default {
  content: ["./resources/**/*.blade.php",
            "./resources/**/*.js",
            "./resources/**/*.vue",],
  theme: {
    mytheme: {
      "primary": "#4C3431",
      "secondary": "#9B5231",
      "accent": "##B58449",
      "neutral": "#3d4451",
      "base-100": "#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

