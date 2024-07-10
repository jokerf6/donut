import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#fccde1",
        primary2: "#7fe2f3",
        primary3: "#f5c4f1",
        primary4: "#f0226c",
        text: "#101828",
      },
    },
  },
  plugins: [],
};
export default config;
