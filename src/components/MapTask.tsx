import { useStore } from '../store';
import TaskRender from './RenderTask';

const TaskMap = () => {
	const { filteredTasks } = useStore();
	return (
		<>
			{filteredTasks.map((task) => (
				<TaskRender task={task} />
			))}
		</>
	);
};
export default TaskMap;
