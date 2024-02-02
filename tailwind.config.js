/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./section/*/*/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Authorfont: ["Minerva-Modern-Regular", "sans-serif"],
        CooperHewitt: ["CooperHewitt", "sans-serif"],
        Gamiliademo: ["GamiliademoRegular-mL9Ev", "sans-serif"],
        VulturaRegular: ["Vultura-Regular", "sans-serif"],
        HankenGrotesk: ["HankenGrotesk-VariableFont_wght", "serif"],
      },
    },
  },
  plugins: [],
};
