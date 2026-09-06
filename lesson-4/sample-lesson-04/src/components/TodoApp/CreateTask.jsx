import { useState } from "react"

const CreateTask = (props) => {
    const { onAddTask } = props

    const [task, setTask] = useState()

    const handleChangeTaskName = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        onAddTask(task)
    }
    return (
        <>
            <p>Nhập tên công việc mới</p>
            <input value={task} onChange={handleChangeTaskName} type="text" name="" id="" />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default CreateTask