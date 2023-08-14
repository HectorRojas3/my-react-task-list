import React, { useState } from "react";
import Task from "./Task";

export default function TaskList() {
    const tasks = [
        { id: 1, name: "Ver repeticion de React intro", done: true },
        { id: 1, name: "Presentar proyecto integrador", done: false },
        { id: 1, name: "Leer presentacion Hooks 1", done: false },
    ];
    /* el estado newTaskName es para almacenar el nombre de la nueva tarea */
    const [newTaskName, setNewTaskName] = useState("");

    /* el parametro taskId indica a handleToggleTask la tarea que se debe cambiar  */
    const handleToggleTask = (taskId) => {
        setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };

    /* verifica el nombre de la tarea */
    const handleAddTask = () => {
        if (newTaskName.trim() !== "") {
        const newTask = {
            id: tasks.length + 1,
            name: newTaskName,
            done: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTaskName("");
        }
    };

    return (
        <>
            <div>
                {tasks.map((task) => (
                <Task key={task.id} task={task} onToggle={handleToggleTask} />
                ))}
                <div className="add-task">
                    <input
                        type="text"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                        placeholder="Agregar Tarea..."
                    />
                    <button onClick={handleAddTask}>Agregar Tarea</button>
                </div>
            </div>
        </>
    );
};
