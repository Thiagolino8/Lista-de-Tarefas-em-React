import { AnimatePresence } from 'framer-motion'

import AddTask from '../components/AddTask'
import Search from '../components/Search'
import { Tasks } from '../components/Tasks'
import { useStore } from '../store'

const ToDo = () => {
	const { tasks } = useStore()
	return (
		<>
			<h1>To Do List</h1>
			<AnimatePresence initial={false}>{!!tasks.length && <Search />}</AnimatePresence>
			<AddTask />
			<Tasks />
		</>
	)
}

export default ToDo
