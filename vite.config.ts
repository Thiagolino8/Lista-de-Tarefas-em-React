import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
	plugins: [preact()],
	esbuild: {
		define: {
			this: 'window',
		},
	},
	resolve: {
		alias: {
			react: 'preact/compat',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/compat',
			'react/jsx-compiler': 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
		},
	},
})
