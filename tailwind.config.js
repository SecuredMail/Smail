/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button": "#5D5FEF",
        "sidebar": "#F5F7FB",
        "background": "#FFFFFF",
        "sidebar-text": "#303030",
        "school-label": "#3FB416",
        "social-labael": "#AE924B",
        "notification": "#B80F0F",
        "message-notifiacation": "#D9D9D9",
        "office-label": "#F2994A",
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

