import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography'
import form from '@tailwindcss/forms'


const config: Config = {
  mode:'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [
    typography,
    form
  ],
};
export default config;
