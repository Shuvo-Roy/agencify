/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'naturalSilver' : '#f5f7fa',
        'naturalGrey' : '#4d4d4d',
        'brandPrimary' : '#4caf4f',
        'naturalGreyB' : '#717171',
        'textGrey' : '#18191f',
        'bgIcon' : '#e8f5e9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

