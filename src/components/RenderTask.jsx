import '../styles/RenderTask.css';
import { CgClose, CgInfo } from 'react-icons/cg';

const TaskRender = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const handleInfoClick = (title) => {};
	return (
		<div
			class='task'
			style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
			onClick={() => handleTaskClick(task.id)}
		>
			<div class='task-title'>
				<p>{task.title}</p>
			</div>
			<div class='task-container'>
				<button
					class='task-delete'
					onClick={(e) => {
						e.stopPropagation();
						handleTaskDeletion(task.id);
					}}
				>
					<CgClose />
				</button>
				<button
					class='task-info'
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
