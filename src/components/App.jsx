import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddTask from "./AddTask";
import "./styles/App.css";
import TaskMap from "./MapTask";
import Details from "./Details";

const App = () => {
	const [tasks, setTasks] = useState([]);

	const handleTaskAddition = (taskTittle) => {
		const newTasks = [
			...tasks,
			{
				id: uuidv4(),
				title: taskTittle,
				completed: false,
			},
		];
		setTasks(newTasks);
	};

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});
		setTasks(newTasks);
	};

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	};

	return (
		<Router>
			<div class="container">
				<Route path="/" exact render={() => (
					<>
					<h1>Lista de Tarefas</h1>
					<AddTask handleTaskAddition={handleTaskAddition} />
					<TaskMap
						handleTaskClick={handleTaskClick}
						tasks={tasks}
						handleTaskDeletion={handleTaskDeletion}
					/>
					</>
				)} />
				<Route path="/:taskTitle" exact component={Details} />
			</div>
		</Router>
	);
};

export default App;
