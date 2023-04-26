import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='todo-card'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div className="todo-buttons">
            <FontAwesomeIcon  icon={faPenToSquare} onClick={() => editTodo(task.id)} className="todo-icon edit-icon"/>
            <FontAwesomeIcon  icon={faTrash} onClick={() => deleteTodo(task.id)}   className="todo-icon delete-icon"/>

        </div>
      
    </div>
  )
}

export default Todo;
