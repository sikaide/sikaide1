/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdf85',
          300: '#ffd14c',
          400: '#ffbf1d',
          500: '#f99d07',
          600: '#dd7802',
          700: '#b75506',
          800: '#94430c',
          900: '#7a380f',
          950: '#461c06',
        },
        secondary: {
          50: '#f6f8f8',
          100: '#e0e7ea',
          200: '#c0cdd3',
          300: '#95aab6',
          400: '#728998',
          500: '#577080',
          600: '#435a68',
          700: '#384a56',
          800: '#2f3e49',
          900: '#0f1115',
          950: '#0b0d10',
        },
      },
      backgroundImage: {
        'ghana-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNi41NyAzMC44M2MwLS43MSAxLjgzLS43MSAzLjAyLS43MWE3LjA5IDcuMDkgMCAwIDEgNS45NSAzLjAyYzMuOCAzLjgzIDUuOTYgMy40IDUuOTYgNy4xIDAgMS40LTMuMTIgMi44NC0zLjEzIDQuMjZhMy4xMiAzLjEyIDAgMCAwIDMuMTMgMy4xM1YzMy42NWE0IDQgMCAwIDAtNC00SDM2LjU4djEuMTh6IiBmaWxsPSIjRUZCODRDIiBmaWxsLW9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0yNC44NiAyNy44Yy0uNzEgMC0xLjQyIDAtMS40Mi0yLjEzIDAtLjcxLjcxLTEuNDIgMi4xMi0yLjEzIDEuNDItLjcgMS40Mi0yLjEyIDEuNDItMy41NCAwLTEuNDEtMS40Mi00Ljk1LS43LTYuMzYuNy0xLjQyIDMuNTQtMi44MyA0Ljk1LTIuODMgMS40MSAwIDIuMTIuNyAyLjEyIDIuMTIgMCAxLjQyLS43IDIuMTMtLjcgMy41NCAwIDYuMzcgMCAxMS4zMy0xLjQzIDExLjMzaC02LjM2eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')",
      },
    },
  },
  plugins: [],
};