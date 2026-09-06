import { useState } from "react"
import CreateTask from "./CreateTask"

const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const handleAddTask = (task) => {
        setTasks([task, ...tasks])
    }
    return (
        <>
            <CreateTask onAddTask={handleAddTask} />

            {tasks.map(item => (
                <div className="task">
                    <input type="checkbox" name="" id="" />
                    <input value={item} type="text" name="" id="" />
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            ))}
        </>
    )
}

export default TodoApp