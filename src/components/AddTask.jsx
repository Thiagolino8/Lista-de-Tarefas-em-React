import './styles/AddTask.css'
import Button from './Button'
import {useState} from 'react'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handeInputChange = (event) => {
        setInputData(event.target.value)
    }

    const handleAddClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return <div class="add-task-container">
        <input onChange={handeInputChange} value={inputData} type="text" class="add-task-input" />
        <div class="add-task-buttom">
        <Button onClick={handleAddClick}>Inserir</Button>
        </div>
    </div>
}

export default AddTask;