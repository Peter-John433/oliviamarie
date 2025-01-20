/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px', // Extra small devices
        sm: '640px', // Small devices
        md: '768px', // Medium devices
        lg: '1024px', // Large devices
        xl: '1280px', // Extra large devices
        '2xl': '1536px', // 2x Extra large devices
        '4k': '2560px', // Custom 4K monitors
      },
      colors: {
        bgColor: '#FFFFFF',
        text: '#000000',
      },
      fontSize: {
        sm: '16px',
        lg: '15px',
        header: '50px',
      },
      boxShadow: {
        shadow: '1.5px 1.5px 3px 0px rgba(0, 0, 0, .6)',
      },
      transform: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
