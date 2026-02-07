/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Nah, konfigurasi font atau warna tambahan kamu MASUKIN DI SINI!
      // Kalau ditaruh di luar 'extend', settingan default Tailwind bakal ilang semua!
    },
  },
  plugins: [],
}