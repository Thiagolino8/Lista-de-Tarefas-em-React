import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { Page404 } from './screens/404'
import Details from './screens/Details'
import { Layout } from './screens/Layout'
import Tasks from './screens/ToDo'

const App = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path='/'>
				<Route index element={<Tasks />} />
				<Route path='details/:title' element={<Details />} />
				<Route path='*' element={<Page404 />} />
			</Route>
		</Route>
	)
)

export default App
