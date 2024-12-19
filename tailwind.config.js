/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height:{
        "84":"21rem",
        "88":"22rem",
        "92":"23rem"
      },
      colors: {
        purple: '#9d67f8',
        'light-purple': '#d7cbff',
      },
      lineHeight: {
        'extra-loose': '2.5',
        11: '2.75rem',
        12: '3rem',
      },
      fontFamily: {
        recoleta: ['Recoleta', 'serif'],
      },
    },
  },
  plugins: [],
};
