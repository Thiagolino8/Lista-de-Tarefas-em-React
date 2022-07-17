import AddTask from '../components/AddTask'
import Search from '../components/Search'
import { Tasks } from '../components/Tasks'

const ToDo = () => {
	return (
		<>
			<h1>To Do List</h1>
			<Search />
			<AddTask />
			<Tasks />
		</>
	)
}

export default ToDo
