import { useStore } from '../store';
import TaskRender from './RenderTask';

const TaskMap = () => {
	const { tasks } = useStore();
	return (
		<>
			{tasks.map((task) => (
				<TaskRender task={task} />
			))}
		</>
	);
};
export default TaskMap;
