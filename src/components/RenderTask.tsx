import { useNavigate } from 'react-router-dom'
import { CgClose, CgInfo, CgTrash } from 'react-icons/cg'
import { AiOutlineCheck } from 'react-icons/ai'
import { useStore } from '../store'
import type { Task } from '../store'
import { FormEvent, useState } from 'react'

interface Props {
	task: Task
}

const TaskRender = ({ task }: Props) => {
	const [value, setValue] = useState(task.title)
	const navigate = useNavigate()
	const { deleteTask, toggleTask, updateTask, getTaskById, formatTaskTitle } = useStore()
	return (
		<div
			className={`${
				task.completed ? 'border-lime-400' : 'border-zinc-700'
			} bg-zinc-700 border-solid border border-l-8 px-1 py-2 my-3 flex rounded-md justify-between items-center transition-colors duration-200`}
		>
			<div className='w-full pl-1 pr-2'>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onBlur={(e) => {
						if (formatTaskTitle(e.currentTarget.value) !== formatTaskTitle(task.title)) {
							updateTask(task.id, e.currentTarget.value)
						}
						setValue(getTaskById(task.id)?.title ?? '')
					}}
					onBeforeInput={(e) => {
						if ((e as unknown as InputEvent).inputType === 'insertLineBreak') {
							e.currentTarget.blur()
						}
					}}
					className='w-full text-2xl font-bold text-left truncate input-ghost input focus:input-primary caret-lime-400'
				/>
			</div>
			<div className='flex items-end gap-1'>
				<button className='btn btn-link hover:btn-primary swap swap-rotate' onClick={() => toggleTask(task.id)}>
					<input type='checkbox' checked={task.completed} />
					<CgClose className='fill-current swap-on' />
					<AiOutlineCheck className='fill-current swap-off' />
				</button>
				<button className='btn btn-link hover:btn-primary' onClick={() => deleteTask(task.id)}>
					<CgTrash />
				</button>
				<button className='btn btn-link hover:btn-primary' onClick={() => navigate(`/details/${task.title}`)}>
					<CgInfo />
				</button>
			</div>
		</div>
	)
}

export default TaskRender
