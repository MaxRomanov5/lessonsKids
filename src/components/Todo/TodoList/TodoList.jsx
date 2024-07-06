import React from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';
import s from './TodoList.module.css'
const TodoList = ({tasks,setTasks}) => {
    return (

        <>
        <h2 className={s.title}>Todo List</h2>
        <ul className={s.list}>
    {tasks.map((task)=>{
return <SingleTodo key={task.id} tasks={tasks} task={task} setTasks={setTasks}/>
    })}
</ul>
</>
    );
}

export default TodoList;
