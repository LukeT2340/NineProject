export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Display"', 'sans-serif'],
      },
      screens: {},
      colors: {
        'bright-cyan': '#58F6F4',
        'dark-blue': '#192958',
        'dark-gray': '#3C4043',
        'light-gray': '#dee3e5',
        'light-green': '#deecc0',
        'lighter-green': '#e8f2f1',
        'light-orange': '#FFE1C3',
        'lighter-orange': '#fff0dd',
        'light-pink': '#f2dcd8'
      },
      fontSize: {
        clampHeading: 'clamp(48px, 6vw, 92px)',
        clampHeading2: 'clamp(30px, 5vw, 54px)',
        '19': ['19px', '36px'],
        '78': ['78px', '100px'],
        '100': ['100px', '135px'],
      },
      lineHeight: {
        tight: '1.00',
        normal: '1.35',
        custom: '1.5',
      },
      backgroundImage: {
        footer: "url('/src/assets/images/desktop/image-1.jpg')",
      },
    },
  },
  plugins: [],
}
