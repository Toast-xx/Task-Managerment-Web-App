import React from 'react';
import './TodaysTaskSchedule.css';

const TodaysTaskSchedule = () => {
    return (
        <div className="todays-task-schedule">
            <h3>Today's Schedule</h3>
            <div className="task-list">
                <div className="task-item">
                    <p>9:00 AM - Team Meeting</p>
                </div>
                <div className="task-item">
                    <p>11:00 AM - Project Review</p>
                </div>
                <div className="task-item">
                    <p>2:00 PM - Client Call</p>
                </div>
                {/* Add more tasks as needed */}
            </div>
            <h3>Upcoming Tasks</h3>
            <div className="upcoming-tasks">
                <div className="task-item">
                    <p>Task 1: Complete Report</p>
                </div>
                <div className="task-item">
                    <p>Task 2: Prepare Presentation</p>
                </div>
                {/* Add more tasks as needed */}
            </div>
        </div>
    );
};

export default TodaysTaskSchedule;
