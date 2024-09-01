import React from 'react';
import FullCalendarPage from './FullCalendarPage.js'; // Ensure this imports your calendar component
import './RightSideBar.css';

const RightSideBar = ({ selectedBoard, tasks, onCalendarClick }) => {
    return (
        <aside className="right-sidebar">
            {selectedBoard === 'allBoards' && (
                <>
                    {/* Container for the schedule section */}
                    <div className="schedule-container">
                        <h3>Today's Schedule</h3>
                        <p>Task 1: 10:00 AM - Meeting</p>
                        <p>Task 2: 12:00 PM - Lunch</p>
                        <p>Task 3: 3:00 PM - Project Review</p>
                    </div>

                    {/* Container for the calendar section */}
                    <div className="calendar-container">
                        <h3 onClick={onCalendarClick} style={{ cursor: 'pointer' }}>
                            Calendar
                        </h3>
                        {/* FullCalendarPage component displays the calendar */}
                        <FullCalendarPage />
                    </div>
                </>
            )}
        </aside>
    );
};

export default RightSideBar;
