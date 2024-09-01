import React from 'react'; // Import the React library to use JSX and create components.
import './TodaysTaskSchedule.css'; // Import the CSS file for styling the TodaysTaskSchedule component.

const TodaysTaskSchedule = () => {
    return (
        <div className="todays-task-schedule"> {/* Main container for today's schedule and upcoming tasks */}
            <h3>Today's Schedule</h3> {/* Heading for today's schedule section */}
            <div className="task-list"> {/* Container for today's scheduled tasks */}
                <div className="task-item"> {/* Individual task item for today */}
                    <p>9:00 AM - Team Meeting</p> {/* Description of the task */}
                </div>
                <div className="task-item"> {/* Individual task item for today */}
                    <p>11:00 AM - Project Review</p> {/* Description of the task */}
                </div>
                <div className="task-item"> {/* Individual task item for today */}
                    <p>2:00 PM - Client Call</p> {/* Description of the task */}
                </div>
                {/* Add more tasks as needed */} {/* Placeholder for additional tasks */}
            </div>
            <h3>Upcoming Tasks</h3> {/* Heading for upcoming tasks section */}
            <div className="upcoming-tasks"> {/* Container for tasks that are upcoming */}
                <div className="task-item"> {/* Individual task item for upcoming tasks */}
                    <p>Task 1: Complete Report</p> {/* Description of the upcoming task */}
                </div>
                <div className="task-item"> {/* Individual task item for upcoming tasks */}
                    <p>Task 2: Prepare Presentation</p> {/* Description of the upcoming task */}
                </div>
                {/* Add more tasks as needed */} {/* Placeholder for additional upcoming tasks */}
            </div>
        </div>
    );
};

export default TodaysTaskSchedule; // Export the TodaysTaskSchedule component for use in other parts of the application.
