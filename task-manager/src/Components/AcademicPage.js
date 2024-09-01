import React from 'react'; // Import the React library to use JSX and create components.
import './AcademicPage.css'; // Import the CSS file for styling the AcademicPage component.

/**
 * AcademicPage component displays tasks organized by their status.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.tasks - An array of task objects to be displayed.
 * @param {Function} props.moveTask - A function to move tasks between statuses.
 * 
 * @returns {JSX.Element} The rendered AcademicPage component.
 */
const AcademicPage = ({ tasks, moveTask }) => { // Define a functional component that takes 'tasks' and 'moveTask' as props.
    
    /**
     * Filter tasks based on their status.
     * 
     * @param {string} status - The status to filter tasks by.
     * @returns {Array} The filtered list of tasks.
     */
    const filterTasks = (status) => { // Define a helper function to filter tasks based on their status.
        return tasks.filter(task => task.status === status); // Return tasks that match the given status.
    };

    return (
        <div className="academic-page"> {/* Main container for the academic page layout. */}
            <h2>Academic Tasks</h2> {/* Page title. */}
            <div className="tasks-container"> {/* Container to hold the task lists (To-do, In Progress, Completed). */}
                
                <div className="todo-container"> {/* Container for To-do tasks. */}
                    <h3>To-do</h3> {/* Heading for the To-do task list. */}
                    <ul> {/* Unordered list to display To-do tasks. */}
                        {filterTasks('To-do').map((task) => ( // Map over filtered To-do tasks and render each as a list item.
                            <li key={task.id}> {/* Unique identifier for each task list item. */}
                                <h3>{task.name}</h3> {/* Task name. */}
                                <p>{task.description}</p> {/* Task description. */}
                                <p>Assigned Members: {task.members.join(', ')}</p> {/* List of assigned members. */}
                                <p>Email: {task.email}</p> {/* Contact email for the task. */}
                                <p>Phone: {task.phone}</p> {/* Contact phone number for the task. */}
                                <p>Start Date: {task.startDate}</p> {/* Task start date. */}
                                <p>End Date: {task.endDate}</p> {/* Task end date. */}
                                <p>Status: {task.status}</p> {/* Current status of the task. */}
                                <button onClick={() => moveTask('academic', task.id, 'in progress')}>Start Progress</button> {/* Button to move task to 'In Progress'. */}
                                <button onClick={() => moveTask('academic', task.id, 'completed')}>Complete</button> {/* Button to move task to 'Completed'. */}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="in-progress-container"> {/* Container for In Progress tasks. */}
                    <h3>In Progress</h3> {/* Heading for the In Progress task list. */}
                    <ul> {/* Unordered list to display In Progress tasks. */}
                        {filterTasks('in progress').map((task) => ( // Map over filtered In Progress tasks and render each as a list item.
                            <li key={task.id}> {/* Unique identifier for each task list item. */}
                                <h3>{task.name}</h3> {/* Task name. */}
                                <p>{task.description}</p> {/* Task description. */}
                                <button onClick={() => moveTask('academic', task.id, 'To-do')}>Move to To-do</button> {/* Button to move task back to 'To-do'. */}
                                <button onClick={() => moveTask('academic', task.id, 'completed')}>Complete</button> {/* Button to move task to 'Completed'. */}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="completed-container"> {/* Container for Completed tasks. */}
                    <h3>Completed</h3> {/* Heading for the Completed task list. */}
                    <ul> {/* Unordered list to display Completed tasks. */}
                        {filterTasks('completed').map((task) => ( // Map over filtered Completed tasks and render each as a list item.
                            <li key={task.id}> {/* Unique identifier for each task list item. */}
                                <h3>{task.name}</h3> {/* Task name. */}
                                <p>{task.description}</p> {/* Task description. */}
                                <button onClick={() => moveTask('academic', task.id, 'in progress')}>Move to In Progress</button> {/* Button to move task back to 'In Progress'. */}
                                <button onClick={() => moveTask('academic', task.id, 'To-do')}>Move to To-do</button> {/* Button to move task back to 'To-do'. */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AcademicPage; // Export the AcademicPage component for use in other parts of the application.
