import React, { useState } from 'react';
import './PersonalPage.css';

const PersonalPage = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);

    const moveTask = (index, newStatus) => {
        const updatedTasks = taskList.map((task, i) => 
            i === index ? { ...task, status: newStatus } : task
        );
        setTaskList(updatedTasks);
    };

    const filterTasks = (status) => {
        return taskList.filter(task => task.status === status);
    };

    return (
        <div className="personal-page">
            <h2>Personal Tasks</h2>
            <div className="tasks-container">
                <div className="todo-container">
                    <h3>To-do</h3>
                    <ul>
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
                                <button onClick={() => moveTask(index, 'In Progress')}>Start Progress</button>
                                <button onClick={() => moveTask(index, 'Completed')}>Complete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="in-progress-container">
                    <h3>In Progress</h3>
                    <ul>
                        {filterTasks('In Progress').map((task, index) => (
                            <li key={index}>
                                <h3>{task.name}</h3>
                                <p>{task.description}</p>
                                <button onClick={() => moveTask(index, 'To-do')}>Move to To-do</button>
                                <button onClick={() => moveTask(index, 'Completed')}>Complete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="completed-container">
                    <h3>Completed</h3>
                    <ul>
                        {filterTasks('Completed').map((task, index) => (
                            <li key={index}>
                                <h3>{task.name}</h3>
                                <p>{task.description}</p>
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
