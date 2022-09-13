import { useEffect, useRef } from 'react'
import { filteredTasks } from '../store'
import TaskRender from './RenderTask'
import autoAnimate from '@formkit/auto-animate'

export const Tasks = () => {
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
	return (
		<div
			className={`${filteredTasks().length ? 'visible' : 'invisible'} overflow-x-clip max-h-80 scrollbar-thin scrollbar-thumb-lime-400`}
			ref={parent}
		>
			{filteredTasks().map((task) => {
				return <TaskRender task={task} key={task.id} />
			})}
		</div>
	)}
