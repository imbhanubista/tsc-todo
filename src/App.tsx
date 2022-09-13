import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputFields/InputField';
import TodoList from './components/todoLists/TodoList';
import {Todo} from './models/model'

const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]> ([])

  // function to add a todo
  const handleTodo = (e: React.FormEvent) =>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),title :todo,completed:false}])
      setTodo("")
    }
  }
  console.log(todos);
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputField  todo={todo} setTodo={setTodo} handleTodo={handleTodo} />
    <br/>
     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
} 

export default App;
