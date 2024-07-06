import React from 'react';

const SingleTodo = ({task}) => {
    return (
        <li id={task.id} key={task.id}>
        <p>{task.taskText}</p>
    </li>
    );
}

export default SingleTodo;
