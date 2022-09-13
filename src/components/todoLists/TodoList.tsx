import React from 'react'
import './todoList.css'
import {Todo} from '../../models/model'
import {AiOutlineEdit,AiOutlineDelete,AiOutlineFileDone} from 'react-icons/ai'

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
  <>
   {
    todos.map((todo)=>(
      <div className="main-container">
      <div className='title-section'>
      <span className="title">Todo List</span>
      </div>
      <div className="action">
        <div className='edit'><AiOutlineEdit/></div>
        <div className='delete'><AiOutlineDelete/></div>
        <div className='done'><AiOutlineFileDone/></div>
      </div>
      </div>
    ))
   }
  </>
  )
}

export default TodoList