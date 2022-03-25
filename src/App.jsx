import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./components/AddTask";
import "./styles/App.css";
import TaskMap from "./components/MapTask";

const App = () => {
	const [tasks, setTasks] = useState([]);

	const handleTaskAddition = (taskTittle) => {
		if (taskTittle.length < 1) return
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
				<div class='container'>
								<h1>Lista de Tarefas</h1>
								<AddTask handleTaskAddition={handleTaskAddition} />
								<TaskMap handleTaskClick={handleTaskClick} tasks={tasks} handleTaskDeletion={handleTaskDeletion} />
				</div>
	);
};

export default App;
