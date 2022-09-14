import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../models/model";
import {
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineFileDone,
} from "react-icons/ai";

import "./todoList.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    //  state to store if the todo is being edited
    const [edit, setEdit] = useState<boolean>(false);
    // state to store the edited todo
    const [editTodo, setEditTodo] = useState<string>(todo.title);

    const handleComplete = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    //   delete a todo item
    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

const handleEdit =(e:React.FormEvent, id:number)=>{
    e.preventDefault()
    setTodos(todos.map((todo)=>(todo.id === id ? {...todo, title:editTodo}:todo)))
    setEdit(false)
}

// when ever edit is true, focus on the input field
useEffect(()=>{
inputRef.current?.focus()
},[edit])
const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id)} >

            {
                edit ? (
                    <input ref={inputRef} className="todos_single--text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} />
                ) : (
                    todo.completed ? (
                        <s className="todos_single--text">{todo.title}</s>
                    ) :

                        <span className="todos_single--text"> {todo.title}</span>

                )
            }


            <div>
                <span className="icon" onClick={()=>{
                    if(!edit && !todo.completed){
                        setEdit(true)
                    }
                }} >
                    <AiOutlineEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)} >
                    <AiOutlineDelete />
                </span>
                <span className="icon" onClick={() => handleComplete(todo.id)}>
                    <AiOutlineFileDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
