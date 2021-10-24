import './styles/RenderTask.css'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

const TaskRender = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const history = useHistory()
	const handleInfoClick = (title) => {
		history.push(`${title}`)
	}
    return (
			<div
				class="task"
				style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
			>
				<div class="task-title" onClick={() => handleTaskClick(task.id)}>
					<p>{task.title}</p>
				</div>
				<div class="task-container">
					<button
						class="task-delete"
						onClick={() => handleTaskDeletion(task.id)}
					>
						<CgClose />
					</button>
					<button class="task-info" onClick={() => handleInfoClick(task.title)}>
						<CgInfo />
					</button>
				</div>
			</div>
		);
}

export default TaskRender