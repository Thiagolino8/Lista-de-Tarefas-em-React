import AddTask from './components/AddTask';
import './styles/App.css';
import TaskMap from './components/MapTask';

const App = () => {
	return (
		<div className='container'>
			<h1>Lista de Tarefas</h1>
			<AddTask />
			<TaskMap />
		</div>
	);
};

export default App;
