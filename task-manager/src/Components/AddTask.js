import React, { useState } from 'react';
import './AddTask.css'; // Import CSS for styling the AddTask component

const AddTask = ({ onClose, onBoardSelect }) => {
    // State to manage selected board, members, email, and phone input
    const [selectedBoard, setSelectedBoard] = useState('');
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [members] = useState(['Alice', 'Bob', 'Charlie']); // Example members list

    // Handle change in selected board
    const handleBoardChange = (event) => {
        setSelectedBoard(event.target.value);
    };

    // Handle change in selected members (multiple selection allowed)
    const handleMembersChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedMembers(value);
    };

    // Handle change in email input
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Handle change in phone input
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    // Handle form submission to add a task
    const handleAddTask = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        if (selectedBoard) { // Ensure a board is selected
            onBoardSelect(selectedBoard); // Pass the selected board to parent
            onClose(); // Close the AddTask form
        }
    };

    return (
        <div className="add-task-container">
            <header className="add-task-header">
                <h2>Add New Task</h2>
                {/* Button to close the AddTask form */}
                <button className="close-btn" onClick={onClose}>Close</button>
            </header>
            <form className="add-task-form" onSubmit={handleAddTask}>
                <div className="input-group">
                    {/* Input for task name */}
                    <input type="text" placeholder="Task name" className="task-input" required />
                </div>
                <div className="input-group">
                    {/* Dropdown to select a board */}
                    <select className="task-select" onChange={handleBoardChange} required>
                        <option value="">Select Board...</option>
                        <option value="Academic/Education">Academic/Education</option>
                        <option value="Personal">Personal</option>
                        <option value="Professional/Work">Professional/Work</option>
                    </select>
                    {/* Button to assign members (icon for user selection) */}
                    <button className="assign-btn">
                        <i className="fa fa-user"></i>
                    </button>
                </div>
                <div className="input-group">
                    {/* Textarea for task description */}
                    <textarea placeholder="Write something..." className="task-textarea"></textarea>
                </div>
                <div className="input-group">
                    {/* Multi-select dropdown for assigning members */}
                    <label>Assign Members</label>
                    <select multiple className="members-select" onChange={handleMembersChange}>
                        {members.map(member => (
                            <option key={member} value={member}>
                                {member}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    {/* Input for adding a member by email */}
                    <label>Add by Email</label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="task-input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="input-group">
                    {/* Input for adding a member by phone */}
                    <label>Add by Phone</label>
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="task-input"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="subtask-group">
                    {/* Button to add subtasks */}
                    <button className="add-subtask-btn">+ Add subtask</button>
                </div>
                <div className="input-group">
                    {/* Buttons for task attachments and reminders */}
                    <button className="task-attachments-btn">Attachments</button>
                    <button className="task-reminder-btn">Reminder</button>
                </div>
                <div className="input-group">
                    {/* Date inputs for start and end dates */}
                    <label>Start</label>
                    <input type="date" className="task-date-input" />
                    <label>End</label>
                    <input type="date" className="task-date-input" />
                </div>
                <div className="input-group action-buttons">
                    {/* Cancel button to close the form */}
                    <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    {/* Submit button to add the task */}
                    <button type="submit" className="add-task-btn">Add task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
