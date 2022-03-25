import '../styles/AddTask.css'
import Button from './Button'
import { useState } from 'react'
import { useStore } from '../store'

const AddTask = () => {
    const [inputData, setInputData] = useState('')
    const { addTask } = useStore()

    const handeInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(inputData)
        setInputData('')
    }

    return <form onSubmit={(e) => handleSubmit(e)} className="add-task-container">
        <input onChange={handeInputChange} value={inputData} type="text" className="add-task-input" />
        <div className='add-task-buttom'>
        <Button type='submit'>Inserir</Button>
        </div>
    </form>
}

export default AddTask;