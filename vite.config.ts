import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
	plugins: [WindiCSS(), preact()],
	resolve: {
		alias: {
			react: 'preact/compat',
		},
	},
})
