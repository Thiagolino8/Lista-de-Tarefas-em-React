import { createBrowserRouter, createRoutesFromElements, redirect, Route, Routes } from 'react-router-dom'

import { Layout } from './screens/Layout'
import { Page404 } from './screens/404'
import Details from './screens/Details'
import Tasks from './screens/ToDo'
import { useStore } from './store'

const App = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path='/'>
				<Route index element={<Tasks />} />
				<Route
					path='details/:title'
					element={<Details />}
				/>
				<Route path='*' element={<Page404 />} />
			</Route>
		</Route>
	)
)

export default App
