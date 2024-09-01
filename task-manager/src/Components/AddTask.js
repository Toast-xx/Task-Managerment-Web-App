import React, { useState } from 'react'; // Import React and useState hook for managing component state
import './AddTask.css'; // Import the corresponding CSS file for styling

// Define the AddTask component, accepting `onClose` and `onAddTask` as props
const AddTask = ({ onClose, onAddTask }) => {
    // State for storing the selected board (e.g., Academic, Personal, Work)
    const [selectedBoard, setSelectedBoard] = useState('');
    // State for storing selected members assigned to the task
    const [selectedMembers, setSelectedMembers] = useState([]);
    // State for storing the email associated with the task
    const [email, setEmail] = useState('');
    // State for storing the phone number associated with the task
    const [phone, setPhone] = useState('');
    // Hardcoded array of members for the multi-select dropdown
    const [members] = useState(['Alice', 'Bob', 'Charlie']);

    // Handle change in the board selection dropdown
    const handleBoardChange = (event) => {
        setSelectedBoard(event.target.value); // Update the selectedBoard state with the chosen value
    };

    // Handle change in the members multi-select dropdown
    const handleMembersChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value); // Convert selected options to an array of values
        setSelectedMembers(value); // Update the selectedMembers state with the array of selected members
    };

    // Handle change in the email input field
    const handleEmailChange = (event) => {
        setEmail(event.target.value); // Update the email state with the entered email address
    };

    // Handle change in the phone input field
    const handlePhoneChange = (event) => {
        setPhone(event.target.value); // Update the phone state with the entered phone number
    };

    // Handle form submission for adding a new task
    const handleAddTask = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (selectedBoard) { // Check if a board has been selected
            const taskData = {
                board: selectedBoard, // Assign selected board
                name: event.target.taskName.value, // Get the task name from the form
                description: event.target.description.value, // Get the task description from the form
                members: selectedMembers, // Include the selected members
                email, // Include the email address
                phone, // Include the phone number
                startDate: event.target.startDate.value, // Get the start date from the form
                endDate: event.target.endDate.value, // Get the end date from the form
                status: 'To-do' // Set the default status of the task
            };
            onAddTask(taskData); // Call the onAddTask prop function to add the task
            onClose(); // Close the AddTask form after submission
        }
    };

    return (
        // Main container for the AddTask component
        <div className="add-task-container">
            {/* Header containing the title and close button */}
            <header className="add-task-header">
                <h2>Add New Task</h2> {/* Title of the form */}
                <button className="close-btn" onClick={onClose}>Close</button> {/* Close button that triggers the onClose prop */}
            </header>
            {/* Form for creating a new task */}
            <form className="add-task-form" onSubmit={handleAddTask}>
                {/* Input for task name */}
                <div className="input-group">
                    <input name="taskName" type="text" placeholder="Task name" className="task-input" required />
                </div>
                {/* Dropdown for selecting the board */}
                <div className="input-group">
                    <select className="task-select" onChange={handleBoardChange} required>
                        <option value="">Select Board...</option> {/* Default option */}
                        <option value="Academic">Academic/Education</option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Professional/Work</option>
                    </select>
                </div>
                {/* Textarea for task description */}
                <div className="input-group">
                    <textarea name="description" placeholder="Write something..." className="task-textarea"></textarea>
                </div>
                {/* Multi-select for assigning members to the task */}
                <div className="input-group">
                    <label>Assign Members</label>
                    <select multiple className="members-select" onChange={handleMembersChange}>
                        {members.map(member => (
                            <option key={member} value={member}>
                                {member} {/* Display each member as an option */}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Input for adding an email */}
                <div className="input-group">
                    <label>Add by Email</label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="task-input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                {/* Input for adding a phone number */}
                <div className="input-group">
                    <label>Add by Phone</label>
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="task-input"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                {/* Section for adding a subtask */}
                <div className="subtask-group">
                    <button type="button" className="add-subtask-btn">+ Add subtask</button> {/* Button for adding a subtask */}
                </div>
                {/* Section for task attachments and reminders */}
                <div className="input-group">
                    <button type="button" className="task-attachments-btn">Attachments</button> {/* Button for adding attachments */}
                    <button type="button" className="task-reminder-btn">Reminder</button> {/* Button for setting a reminder */}
                </div>
                {/* Inputs for start and end dates */}
                <div className="input-group">
                    <label>Start</label>
                    <input name="startDate" type="date" className="task-date-input" />
                    <label>End</label>
                    <input name="endDate" type="date" className="task-date-input" />
                </div>
                {/* Action buttons for adding the task or canceling */}
                <div className="input-group action-buttons">
                    <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button> {/* Button to cancel and close the form */}
                    <button type="submit" className="add-task-btn">Add task</button> {/* Button to submit the form and add the task */}
                </div>
            </form>
        </div>
    );
};

export default AddTask; // Export the AddTask component as the default export
