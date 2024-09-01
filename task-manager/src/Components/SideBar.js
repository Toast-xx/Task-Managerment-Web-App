import React, { useState } from 'react';
import './SideBar.css'; // Import styles for the sidebar component

const Sidebar = ({ onAddTaskClick, onBoardSelect, onReportsClick }) => {
    // State to manage the visibility of the task dropdown
    const [isTaskDropdownOpen, setIsTaskDropdownOpen] = useState(false);
    // State to manage the visibility of the board dropdown
    const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);
    // State to track the currently selected board
    const [selectedBoard, setSelectedBoard] = useState('Select a Board');
    
    // Toggle the visibility of the task dropdown
    const toggleTaskDropdown = () => {
        setIsTaskDropdownOpen(!isTaskDropdownOpen);
    };

    // Toggle the visibility of the board dropdown
    const toggleBoardDropdown = () => {
        setIsBoardDropdownOpen(!isBoardDropdownOpen);
    };

    // Handle the selection of a board from the dropdown
    const handleBoardSelect = (board) => {
        setSelectedBoard(board); // Update the selected board state
        setIsBoardDropdownOpen(false); // Close the dropdown
        onBoardSelect(board); // Notify parent component of the selected board
    };

    // Handle the click on the home button
    const handleHomeClick = (e) => {
        e.preventDefault(); // Prevent default behavior (e.g., page reload)
        setSelectedBoard('Select a Board'); // Reset selected board
        onBoardSelect('allBoards'); // Notify parent component to show all boards
    };

    return (
        <div className="sidebar">
            {/* Home button that resets board selection and shows all boards */}
            <button className="home-link" onClick={handleHomeClick}>
                Home
            </button>
            
            {/* Search bar for filtering tasks */}
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            
            {/* Task dropdown for adding new tasks */}
            <div className="task-dropdown">
                <button className="dropdown-button" onClick={toggleTaskDropdown}>
                    Tasks
                </button>
                {isTaskDropdownOpen && (
                    <div className="dropdown-content">
                        {/* Button to trigger the add task functionality */}
                        <button onClick={onAddTaskClick}>Add Task</button>
                    </div>
                )}
            </div>
            
            {/* Board dropdown for selecting different task boards */}
            <div className="board-dropdown">
                <button className="dropdown-button" onClick={toggleBoardDropdown}>
                    {selectedBoard} {/* Display the currently selected board */}
                    <i className={`fas fa-chevron-${isBoardDropdownOpen ? 'up' : 'down'}`}></i> {/* Dropdown arrow */}
                </button>
                {isBoardDropdownOpen && (
                    <div className="dropdown-menu">
                        {/* Buttons to select different boards */}
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
            
            {/* Button to navigate to the reports section */}
            <div className="reports-section">
                <button className="reports-button" onClick={onReportsClick}>
                    Reports
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
