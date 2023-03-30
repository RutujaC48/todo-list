import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoList(){
    
    
    
    //State Array which hold all TODOs
    const [todos,setTodos]=useState([]);
//Add todo list
    const addTask = task =>{
        if (!task.text){
            return
        }
        const newTodos =[task,...todos];
        setTodos(newTodos);
    }

//Remove todo from list
const removeTask = id =>{
    let updateTasks=[...todos].filter(task=>task.id!==id)
    setTodos(updateTasks)
}
//Task is completed
const completeTask = id =>{
    let updateTasks=todos.map(todo=>{
        if (todo.id===id){
            todo.isComplete=true;
        }
        return todo;
    })
    setTodos(updateTasks)
}


    return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>;

}