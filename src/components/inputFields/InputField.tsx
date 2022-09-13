import React from 'react';
import './style.css'


// we need to define the type of the props that we are passing to the component
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleTodo:(e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> =({todo,setTodo,handleTodo}:Props)=>{
    return(
        <form className="input" onSubmit={handleTodo}>
        <input 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} 
        type="input" 
        placeholder="Enter a task"
         className="input_box"/>
        <button className="add_btn" type="submit">Add</button>
        </form>
    )

}

export default InputField