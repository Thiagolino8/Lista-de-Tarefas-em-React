import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
	plugins: [WindiCSS(), preact()], esbuild: {
		define: {
			this: 'window'
		}
	},
	resolve: {
		alias: {
			react: 'preact/compat',
			"react-dom": 'preact/compat',
			'react/jsx-runtime': 'preact/compat',
			'react/jsx-compiler': 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils'
		},
	},
})
