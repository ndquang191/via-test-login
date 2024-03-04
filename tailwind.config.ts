import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#ECAD48",
			p7: "#DCA245",
			success: "#059669",
			white: "#FFFFFF",
			input: "#A0ABBB",
		},
		extend: {
			backgroundImage: {
				banner: "url('/img/banner/cover.png')",
			},
		},
	},
	plugins: [],
};
export default config;
