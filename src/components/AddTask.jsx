import '../styles/AddTask.css'
import Button from './Button'
import {useState} from 'react'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handeInputChange = (event) => {
        setInputData(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleTaskAddition(inputData)
        setInputData('')
    }

    return <form onSubmit={(e) => handleSubmit(e)} class="add-task-container">
        <input onChange={handeInputChange} value={inputData} type="text" class="add-task-input" />
        <div class="add-task-buttom">
        <Button type='submit'>Inserir</Button>
        </div>
    </form>
}

export default AddTask;