import React from 'react';

/**
 * TaskColumn component displays a column of tasks with a title and optional task list.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title to display at the top of the task column.
 * @param {Array} props.tasks - An array of task objects to be displayed in the column.
 * @param {boolean} props.showTasks - A flag to determine whether tasks should be shown or not.
 * 
 * @returns {JSX.Element} The rendered TaskColumn component.
 */
const TaskColumn = ({ title, tasks, showTasks }) => {
    return (
        <div className="task-column">
            {/* Display the column title */}
            <h2>{title}</h2>
            
            {/* Conditionally render the task list based on showTasks flag */}
            {showTasks && (
                <div className="task-list">
                    {/* Map over the tasks array and render each task */}
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">
                            {/* Display task name */}
                            <p>{task.name}</p>
                            {/* Placeholder for additional task details */}
                            {/* Add more task details here */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskColumn;
