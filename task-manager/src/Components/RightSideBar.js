import React from 'react';
import FullCalendarPage from './FullCalendarPage.js'; // Ensure this imports your calendar component
import './RightSideBar.css';

const RightSideBar = () => {
    return (
        <aside className="right-sidebar">
            <div className="schedule-container">
                <h3>Today's Schedule</h3>
                <p>Task 1: 10:00 AM - Meeting</p>
                <p>Task 2: 12:00 PM - Lunch</p>
                <p>Task 3: 3:00 PM - Project Review</p>
            </div>
            <div className="calendar-container">
                <FullCalendarPage />
            </div>
        </aside>
    );
};

export default RightSideBar;
