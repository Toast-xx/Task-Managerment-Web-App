import React, { useState } from 'react';
import './WorkPage.css'; // Importing the CSS file for styling

const WorkPage = ({ tasks }) => {
    // State to manage the list of tasks
    const [taskList, setTaskList] = useState(tasks);

    // Function to move a task to a new status
    const moveTask = (index, newStatus) => {
        // Update the task's status based on the provided index and new status
        const updatedTasks = taskList.map((task, i) => 
            i === index ? { ...task, status: newStatus } : task
        );
        // Update the state with the new task list
        setTaskList(updatedTasks);
    };

    // Function to filter tasks based on their status
    const filterTasks = (status) => {
        return taskList.filter(task => task.status === status);
    };

    return (
        <div className="work-page">
            <h1>Professional Boards</h1> {/* Main title of the WorkPage */}
            <div className="boards-container">
                <div className="board-container">
                    <h2>Board Title 1</h2> {/* Title of the board */}
                    <div className="description-card">
                        <p>Description of Board Title 1</p> {/* Description of the board */}
                    </div>
                    <div className="tasks-container">
                        {/* Container for tasks in the "To-do" status */}
                        <div className="todo-container">
                            <h3>To-do</h3> {/* Section title for To-do tasks */}
                            <ul>
                                {filterTasks('To-do').map((task, index) => (
                                    <li key={index}>
                                        <h3>{task.name}</h3> {/* Task name */}
                                        <p>{task.description}</p> {/* Task description */}
                                        <p>Assigned Members: {task.members.join(', ')}</p> {/* List of assigned members */}
                                        <p>Email: {task.email}</p> {/* Task-related email */}
                                        <p>Phone: {task.phone}</p> {/* Task-related phone */}
                                        <p>Start Date: {task.startDate}</p> {/* Task start date */}
                                        <p>End Date: {task.endDate}</p> {/* Task end date */}
                                        <p>Status: {task.status}</p> {/* Current status of the task */}
                                        {/* Buttons to move the task to different statuses */}
                                        <button onClick={() => moveTask(index, 'In Progress')}>Start Progress</button>
                                        <button onClick={() => moveTask(index, 'Completed')}>Complete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Container for tasks in the "In Progress" status */}
                        <div className="in-progress-container">
                            <h3>In Progress</h3> {/* Section title for In Progress tasks */}
                            <ul>
                                {filterTasks('In Progress').map((task, index) => (
                                    <li key={index}>
                                        <h3>{task.name}</h3> {/* Task name */}
                                        <p>{task.description}</p> {/* Task description */}
                                        {/* Buttons to move the task to different statuses */}
                                        <button onClick={() => moveTask(index, 'To-do')}>Move to To-do</button>
                                        <button onClick={() => moveTask(index, 'Completed')}>Complete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Container for tasks in the "Completed" status */}
                        <div className="completed-container">
                            <h3>Completed</h3> {/* Section title for Completed tasks */}
                            <ul>
                                {filterTasks('Completed').map((task, index) => (
                                    <li key={index}>
                                        <h3>{task.name}</h3> {/* Task name */}
                                        <p>{task.description}</p> {/* Task description */}
                                        {/* Buttons to move the task to different statuses */}
                                        <button onClick={() => moveTask(index, 'In Progress')}>Move to In Progress</button>
                                        <button onClick={() => moveTask(index, 'To-do')}>Move to To-do</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Placeholder for additional boards if needed */}
            </div>
        </div>
    );
};

export default WorkPage;
