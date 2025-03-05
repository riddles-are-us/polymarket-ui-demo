/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/polymarket-ui/dist/**/*.{js,jsx,ts,tsx}", // 更新路径
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  important: true, // 添加这行确保 Tailwind 样式优先级
};
