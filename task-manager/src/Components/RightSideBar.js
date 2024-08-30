import React, { useState } from 'react';
import FullCalendarPage from './FullCalendarPage.js'; // Ensure this imports your calendar component
import './RightSideBar.css';

const RightSideBar = () => {
    // State to track the selected board
    const [selectedBoard, setSelectedBoard] = useState(null);

    // Dummy data for demonstration
    const tasks = {
        academic: [
            { time: 'Monday 10:00 AM', description: 'Assignment 1' },
            { time: 'Wednesday 2:00 PM', description: 'Exam Prep' },
            { time: 'Friday 4:00 PM', description: 'Group Study' },
        ],
        personal: [
            { time: 'Tuesday 9:00 AM', description: 'Gym' },
            { time: 'Thursday 11:00 AM', description: 'Doctor\'s Appointment' },
            { time: 'Saturday 6:00 PM', description: 'Family Dinner' },
        ],
        work: [
            { time: 'Monday 3:00 PM', description: 'Project Deadline' },
            { time: 'Wednesday 10:00 AM', description: 'Team Meeting' },
            { time: 'Friday 2:00 PM', description: 'Client Presentation' },
        ],
    };

    // Handle board selection
    const handleBoardSelection = (board) => {
        setSelectedBoard(board);
    };

    return (
        <aside className="right-sidebar">
            {/* Conditionally render general content when no board is selected */}
            {selectedBoard === null && (
                <>
                    <div className="schedule-container">
                        <h3>Today's Schedule</h3>
                        <p>Task 1: 10:00 AM - Meeting</p>
                        <p>Task 2: 12:00 PM - Lunch</p>
                        <p>Task 3: 3:00 PM - Project Review</p>
                    </div>
                    <div className="calendar-container">
                        <FullCalendarPage />
                    </div>
                </>
            )}

            {/* Conditionally render board-specific content */}
            {selectedBoard && (
                <div className="board-specific-sidebar">
                    <h3>{selectedBoard.charAt(0).toUpperCase() + selectedBoard.slice(1)} Board - Week's View</h3>
                    <p>Upcoming Tasks & Events:</p>
                    <ul>
                        {tasks[selectedBoard].map((task, index) => (
                            <li key={index}>{task.time} - {task.description}</li>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    );
};

export default RightSideBar;
