/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 ],
  theme: {
    extend: {
      backgroundImage:{
        'bg1': "url('/assets/q.jpeg')",
        'bg2': "url('/assets/q2.jpeg')",
      }  
    },
  },
  plugins: [],
}

