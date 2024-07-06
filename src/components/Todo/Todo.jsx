import React,{useState} from 'react';

import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
const Todo = () => {
const [tasks, setTasks] = useState([]);




    return (
        <div>
<TodoForm tasks={tasks} setTasks={setTasks}/>
<TodoList tasks={tasks} setTasks={setTasks}/>


            
        </div>
    );
}

export default Todo;
