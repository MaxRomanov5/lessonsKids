import React, { useState } from 'react'
import delicon from '../../../assets/delicon.png'
import s from './SingleTodo.module.css'
const SingleTodo = ({ tasks, task, setTasks }) => {
  const [visibleChange, setVisibleChange] = useState(false)
  const [changedTask, setChangedTask] = useState('')

  function setClick(e) {
    if (e.target.nodeName === 'BUTTON') {
      if (e.target.dataset.btn === 'delete') {
        const newTasks = tasks.filter((oldTask) => {
          return e.target.id !== oldTask.id
        })

        setTasks(newTasks)
        return
      }
      if (e.target.dataset.btn === 'change') {
        setVisibleChange(true)

        return
      }
      return
    }
    const newTasks = tasks.map((oldTask) => {
      if (e.target.id === oldTask.id) {
        return { ...oldTask, complete: !oldTask.complete }
      }
      return oldTask
    })

    setTasks(newTasks)
  }

  function handleInput(e) {
    setChangedTask(e.target.value)
  }

  function onChangeTask(e) {
    const newTasks = tasks.map((oldTask) => {
      if (e.target.id === oldTask.id) {
        return { ...oldTask, taskText: changedTask }
      }
      return oldTask
    })

    setTasks(newTasks)
    setChangedTask('')
    setVisibleChange(false)
  }

  return (
    <li
      className={task.complete ? s.complete : s.notComplete}
      id={task.id}
      onClick={setClick}
    >
      <p className={s.text} id={task.id}>
        {task.taskText}
      </p>
      <button data-btn="change" id={task.id} className={s.changeBtn}></button>
      <button data-btn="delete" id={task.id} className={s.delBtn}></button>
      {visibleChange && (
        <div className={s.wrap}>
          <input className={s.input} value={changedTask} onInput={handleInput} type="text" />
          <button onClick={onChangeTask} id={task.id}>
            save
          </button>
        </div>
      )}
    </li>
  )
}

export default SingleTodo
