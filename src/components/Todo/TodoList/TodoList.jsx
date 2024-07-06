import React from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';

const TodoList = ({tasks,setTasks}) => {
    return (
        <ul>
    {tasks.map((task)=>{
return <SingleTodo task={task} setTasks={setTasks}/>
    })}
</ul>
    );
}

export default TodoList;
