// src/components/WorkPage.js
import React from 'react';
import './WorkPage.css'; // Create or update this CSS file for styling

const WorkPage = () => {
    return (
        <div className="work-page">
            <h1>Professional Boards</h1>
            <div className="board-container">
                <div className="board-column">
                    <h2>Board Title 1</h2>
                    <div className="description-card">
                        <p>Description of Board Title 1</p>
                    </div>
                    <div className="subtasks-card">
                        <h3>Subtasks</h3>
                        <ul>
                            <li>Subtask 1</li>
                            <li>Subtask 2</li>
                        </ul>
                    </div>
                    <div className="members-card">
                        <h3>Members</h3>
                        <ul>
                            <li>Member 1</li>
                            <li>Member 2</li>
                        </ul>
                    </div>
                </div>
                {/* Add more boards if needed */}
            </div>
        </div>
    );
};

export default WorkPage;
