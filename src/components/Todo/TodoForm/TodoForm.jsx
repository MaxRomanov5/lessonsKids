import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoForm = ({tasks,setTasks}) => {


    function onSubmit(e) {
        e.preventDefault()
    const taskText = e.target.elements.task.value
    const newTask = {
       taskText,
        complete:false,
        id:uuidv4()
    }
    e.target.reset()
    setTasks((prev)=>{
        return [...tasks,newTask]
    })
    
    }


    return (
        <div>
            <form onSubmit={onSubmit} action="submit">
    <input type="text" name="task" />
    <button type='submit'>Add Task</button>
</form>
        </div>
    );
}

export default TodoForm;
