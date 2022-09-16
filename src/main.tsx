import './styles/index.css'

import { domAnimation, LazyMotion } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'

import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<LazyMotion features={domAnimation} strict>
			<RouterProvider router={App} />
		</LazyMotion>
	</React.StrictMode>,
	document.getElementById('root')
)
