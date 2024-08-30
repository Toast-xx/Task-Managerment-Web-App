import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ onClose, onAddTask }) => {
    const [selectedBoard, setSelectedBoard] = useState('');
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [members] = useState(['Alice', 'Bob', 'Charlie']);

    const handleBoardChange = (event) => {
        setSelectedBoard(event.target.value);
    };

    const handleMembersChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedMembers(value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (selectedBoard) {
            const taskData = {
                board: selectedBoard,
                name: event.target.taskName.value,
                description: event.target.description.value,
                members: selectedMembers,
                email,
                phone,
                startDate: event.target.startDate.value,
                endDate: event.target.endDate.value,
                status: 'To-do' // Set default status
            };
            onAddTask(taskData);
            onClose();
        }
    };

    return (
        <div className="add-task-container">
            <header className="add-task-header">
                <h2>Add New Task</h2>
                <button className="close-btn" onClick={onClose}>Close</button>
            </header>
            <form className="add-task-form" onSubmit={handleAddTask}>
                <div className="input-group">
                    <input name="taskName" type="text" placeholder="Task name" className="task-input" required />
                </div>
                <div className="input-group">
                    <select className="task-select" onChange={handleBoardChange} required>
                        <option value="">Select Board...</option>
                        <option value="Academic">Academic/Education</option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Professional/Work</option>
                    </select>
                </div>
                <div className="input-group">
                    <textarea name="description" placeholder="Write something..." className="task-textarea"></textarea>
                </div>
                <div className="input-group">
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
                    <button type="button" className="add-subtask-btn">+ Add subtask</button>
                </div>
                <div className="input-group">
                    <button type="button" className="task-attachments-btn">Attachments</button>
                    <button type="button" className="task-reminder-btn">Reminder</button>
                </div>
                <div className="input-group">
                    <label>Start</label>
                    <input name="startDate" type="date" className="task-date-input" />
                    <label>End</label>
                    <input name="endDate" type="date" className="task-date-input" />
                </div>
                <div className="input-group action-buttons">
                    <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button type="submit" className="add-task-btn">Add task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
