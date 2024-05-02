/** @type {import('tailwindcss').Config} */
export default {
    corePlugins: {
        preflight: false,
    },
    content: ['./src/*.{html,js,ts,tsx}', './index.html'],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
}

