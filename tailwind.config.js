/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: { gw: "var(--gw-radius)" },
      boxShadow: { gw: "var(--gw-shadow)" },
      colors: {
        gw: {
          green: "var(--gw-green)",
          blue: "var(--gw-blue)",
          ink: "var(--gw-ink)",
          sand: "var(--gw-sand)",
          white: "var(--gw-white)",
        }
      },
      backgroundImage: {
        "gw-brand-90": "var(--gw-grad-brand-90)",
        "gw-brand-135": "var(--gw-grad-brand-135)",
        "gw-sand": "var(--gw-grad-sand)",
      },
      backdropBlur: { 16: "16px" },
      transitionTimingFunction: {
        snappy: "cubic-bezier(.2,.8,.2,1)",
        standard: "cubic-bezier(.4,0,.2,1)"
      },
      keyframes: {
        shine: { "0%":{transform:"translateX(-150%)"},"100%":{transform:"translateX(150%)"} },
        float: { "0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-6px)"} },
        aurora: { "0%":{transform:"translate3d(0,0,0) scale(1)"},
                  "50%":{transform:"translate3d(6%,-6%,0) scale(1.05)"},
                  "100%":{transform:"translate3d(0,0,0) scale(1)"} }
      },
      animation: {
        shine: "shine 1.2s ease-in-out",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 12s ease-in-out infinite"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
