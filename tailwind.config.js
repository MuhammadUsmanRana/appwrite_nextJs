/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--basic-primary-color)',
        secondary: 'var(--basic-secondary-color)',
      },
      fontFamily: {
        playFairDisplay: ['var(--font-play-fair-display)', 'serif'],
        ibmPlexSerifBold: ['var(--font-ibmplexserif-bold)', 'serif'],
        ibmPlexSerifRegular: ['var(--font-ibmplexserif-regular)', 'serif'],
        ibmPlexSerifMedium: ['var(--font-ibmplexserif-medium)', 'serif'],
        ibmPlexSerifLight: ['var(--font-ibmplexserif-light)', 'serif'],
      },
    },
  },
  plugins: [],
}