/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  safelist: [
    'text-pink-600',
    'text-emerald-400',
    'text-sky-600',
    'text-amber-400',
    'text-violet-500',
    'bg-pink-600',
    'bg-emerald-400',
    'bg-sky-600',
    'bg-amber-400',
    'bg-violet-500',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
