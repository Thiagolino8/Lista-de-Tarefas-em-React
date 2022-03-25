import '../styles/RenderTask.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import {useStore} from '../store';

const TaskRender = ({task}) => {
	const { deleteTask, toggleTask } = useStore();
	const handleInfoClick = (task) => {};
	return (
		<div
			className='task'
			style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
			onClick={() => toggleTask(task.id)}
		>
			<div className='task-title'>
				<p>{task.title}</p>
			</div>
			<div className='task-container'>
				<button
					className='task-delete'
					onClick={(e) => {
						e.stopPropagation();
						deleteTask(task.id);
					}}
				>
					<CgClose />
				</button>
				<button
					className='task-info'
					onClick={(e) => {
						e.stopPropagation();
						handleInfoClick(task.title);
					}}
				>
					<CgInfo />
				</button>
			</div>
		</div>
	);
};

export default TaskRender;
