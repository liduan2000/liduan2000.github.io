/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    fontSize: {
      xxs: "0.5rem",
      xs: "0.75rem",
      sm: "0.938rem",
      base: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.85rem",
      "4xl": "2.5rem",
      "5xl": "4rem",
    },
    fontFamily: {
      'outfit': ['"Outfit"'],
    },
    extend: {
      colors: {
        purple: {
          300: "#878bb0",
          500: "#878BB0",
        },
        pink: {
          500: "#EC74E7",
        },
        blue: {
          100: "#F5FCFF",
        },
        yellow: {
          100: "#FAF7F2",
        },
        green: {
          100: "#E3E8E7",
          300: "#5C8E85",
          500: "#2A5450",
        },
      },

      animation: {
        "slide-in-right": "slideInRight 1.5s  ease-in-out",
        "slide-in-left": "slideInLeft 1.5s  ease-in-out",
        "slide-in-bottom": "slideInBottom 1.5s  ease-in-out",
        "slide-in-left-100": "slideInLeft100 1.5s  ease-in-out",
        "slide-in-right-100": "slideInRight100 1.5s  ease-in-out",
        "fade-in": "fadeIn 1.5s ease-in-out",
        typing: "typing 3s steps(40, end), blink .75s infinite alternate",
      },
      keyframes: {
        slideInRight: {
          from: { transform: "translateX(3%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideInLeft: {
          from: { transform: "translateX(-3%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight100: {
          from: { transform: "translateX(80%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideInLeft100: {
          from: { transform: "translateX(-80%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideInBottom: {
          from: { transform: "translateY(3%)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        typing: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        blink: {
          from: {
            "border-right-color": "transparent",
          },
          to: {
            "border-right-color": "black",
          },
        },
      },
    },
  },
  plugins: [],
};
