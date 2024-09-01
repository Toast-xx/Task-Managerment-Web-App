import React, { useState } from 'react';
import './PersonalPage.css'; // Import the CSS for styling

const PersonalPage = ({ tasks }) => {
    // Initialize state with tasks received from props
    const [taskList, setTaskList] = useState(tasks);

    // Function to move a task to a new status (To-do, In Progress, or Completed)
    const moveTask = (index, newStatus) => {
        // Create a new array with updated task status
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
        <div className="personal-page">
            <h2>Personal Tasks</h2>
            <div className="tasks-container">
                {/* To-do tasks container */}
                <div className="todo-container">
                    <h3>To-do</h3>
                    <ul>
                        {/* Render tasks with 'To-do' status */}
                        {filterTasks('To-do').map((task, index) => (
                            <li key={index}>
                                <h3>{task.name}</h3>
                                <p>{task.description}</p>
                                <p>Assigned Members: {task.members.join(', ')}</p>
                                <p>Email: {task.email}</p>
                                <p>Phone: {task.phone}</p>
                                <p>Start Date: {task.startDate}</p>
                                <p>End Date: {task.endDate}</p>
                                <p>Status: {task.status}</p>
                                {/* Buttons to move the task to other statuses */}
                                <button onClick={() => moveTask(index, 'In Progress')}>Start Progress</button>
                                <button onClick={() => moveTask(index, 'Completed')}>Complete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* In-progress tasks container */}
                <div className="in-progress-container">
                    <h3>In Progress</h3>
                    <ul>
                        {/* Render tasks with 'In Progress' status */}
                        {filterTasks('In Progress').map((task, index) => (
                            <li key={index}>
                                <h3>{task.name}</h3>
                                <p>{task.description}</p>
                                {/* Buttons to move the task to other statuses */}
                                <button onClick={() => moveTask(index, 'To-do')}>Move to To-do</button>
                                <button onClick={() => moveTask(index, 'Completed')}>Complete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Completed tasks container */}
                <div className="completed-container">
                    <h3>Completed</h3>
                    <ul>
                        {/* Render tasks with 'Completed' status */}
                        {filterTasks('Completed').map((task, index) => (
                            <li key={index}>
                                <h3>{task.name}</h3>
                                <p>{task.description}</p>
                                {/* Buttons to move the task to other statuses */}
                                <button onClick={() => moveTask(index, 'In Progress')}>Move to In Progress</button>
                                <button onClick={() => moveTask(index, 'To-do')}>Move to To-do</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PersonalPage;
