import { filteredTasks } from '../store'
import TaskRender from './RenderTask'

export const Tasks = () => (
	<div className='overflow-y-auto max-h-80'>
		{filteredTasks().map((task) => {
			return <TaskRender task={task} key={task.id} />
		})}
	</div>
)
