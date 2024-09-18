import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    // State hooks
    const [tasks, setTasks] = useState(() => 
        JSON.parse(localStorage.getItem("tasks")) || [])
    const [text, setText] = useState("")


    // Function to Add Task
    function addTask(text) {
        const newTask = { id: Date.now(), text: text, completed: false }
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setText("");
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Function to Delete Task
    function deleteTask(id) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Function to Toggle Task Completion
    function toggleCompleted(id) {
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Render TodoList Component
    return ( 
    <div className='todo-list'>
        <h1 className='todo-list-header'>Toby's Todo List</h1>
        {tasks.map(task => (
            <TodoItem
                key={task.id} 
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted} 
            />
        ))}
        <input
            value={text}
            onChange={e => setText(e.target.value)} 
        />
        <button 
            className='add-button'
            onClick={() => addTask(text)}
        >
            Add
        </button>
    </div>
    )

}

export default TodoList;