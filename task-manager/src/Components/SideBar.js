import React, { useState } from 'react';
import './SideBar.css';

const Sidebar = ({ onAddTaskClick, onBoardSelect, onReportsClick }) => {
    const [isTaskDropdownOpen, setIsTaskDropdownOpen] = useState(false);
    const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState('Select a Board');
    
    const toggleTaskDropdown = () => {
        setIsTaskDropdownOpen(!isTaskDropdownOpen);
    };

    const toggleBoardDropdown = () => {
        setIsBoardDropdownOpen(!isBoardDropdownOpen);
    };

    const handleBoardSelect = (board) => {
        setSelectedBoard(board);
        setIsBoardDropdownOpen(false);
        onBoardSelect(board); // Notify the parent component of the board selection
    };

    return (
        <div className="sidebar">
            <a href="/" className="home-link">Home</a>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="task-dropdown">
                <button className="dropdown-button" onClick={toggleTaskDropdown}>
                    Tasks
                </button>
                {isTaskDropdownOpen && (
                    <div className="dropdown-content">
                        <button onClick={onAddTaskClick}>Add Task</button>
                    </div>
                )}
            </div>
            <div className="board-dropdown">
                <button className="dropdown-button" onClick={toggleBoardDropdown}>
                    {selectedBoard}
                    <i className={`fas fa-chevron-${isBoardDropdownOpen ? 'up' : 'down'}`}></i>
                </button>
                {isBoardDropdownOpen && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={() => handleBoardSelect('academic')}>
                            Academic/Education
                        </button>
                        <button className="dropdown-item" onClick={() => handleBoardSelect('personal')}>
                            Personal
                        </button>
                        <button className="dropdown-item" onClick={() => handleBoardSelect('work')}>
                            Professional/Work
                        </button>
                    </div>
                )}
            </div>
            <div className="reports-section">
                <button className="reports-button" onClick={onReportsClick}>
                    Reports
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
