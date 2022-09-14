import '../styles/Details.css'

import { Link, Navigate, useParams } from 'react-router-dom'

import Button from '../components/Button'
import { useStore } from '../store'

const Details = () => {
	const { title } = useParams()
	const { getTaskByTitle, changeDetails } = useStore()
	const details = getTaskByTitle(title!)?.details ?? ''
	return details === null ? (
		<Navigate to='/error' />
	) : (
		<>
			<h1 className='truncate'>{title}</h1>
			<div className='flex-wrap h-full mt-5 rounded-md bg-zinc-600'>
				<span
					role='textbox'
					contentEditable
					onBlur={(e) => changeDetails(title!, e.currentTarget.innerText)}
					className='block overflow-y-auto text-xl whitespace-pre-wrap max-h-96 textarea-ghost textarea focus:textarea-primary empty:text-gray-300 caret-lime-400'
				>
					{details}
				</span>
			</div>
			<div className='flex items-end justify-end p-4'>
				<Link to='/'>
					<Button>Voltar</Button>
				</Link>
			</div>
		</>
	)
}

export default Details
