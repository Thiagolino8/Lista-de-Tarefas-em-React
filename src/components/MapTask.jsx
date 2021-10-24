import TaskRender from "./RenderTask";

const TaskMap = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
	return (
		<>
			{tasks.map((task) => (
				<TaskRender
					handleTaskClick={handleTaskClick}
					id={task.id}
					task={task}
					handleTaskDeletion={handleTaskDeletion}
				/>
			))}
		</>
	);
};
export default TaskMap;
