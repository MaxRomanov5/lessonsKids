import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './TodoForm.module.css'
const TodoForm = ({tasks,setTasks}) => {


    function onSubmit(e) {
        e.preventDefault()
    const taskText = e.target.elements.task.value
    if(taskText===''){
alert('enter task')
return
    }
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
            <form className={s.form} onSubmit={onSubmit} action="submit">
    <input className={s.input} type="text" name="task" />
    <button className={s.button} type='submit'>Add Task</button>
</form>
        </div>
    );
}

export default TodoForm;
