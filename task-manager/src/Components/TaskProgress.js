import React from 'react'; // Import the React library to use JSX and create components.

/**
 * TaskProgress component displays a list of tasks with their progress percentages.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.tasks - An array of task objects, each containing 'id', 'name', and 'progress' properties.
 *
 * @returns {JSX.Element} The rendered component displaying task progress.
 */
const TaskProgress = ({ tasks }) => { // Define a functional component that takes 'tasks' as a prop.
    return (
        <div> {/* Main container for the TaskProgress component */}
            <h2>Task Progress</h2> {/* Heading for the task progress section */}
            <ul> {/* Unordered list to display the list of tasks and their progress */}
                {tasks.map(task => { // Iterate over the tasks array and render each task
                    return (
                        <li key={task.id}> {/* Unique key for each list item to help React identify changes */}
                            {task.name}: {task.progress}% {/* Display task name followed by its progress percentage */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TaskProgress; // Export the TaskProgress component for use in other parts of the application.
