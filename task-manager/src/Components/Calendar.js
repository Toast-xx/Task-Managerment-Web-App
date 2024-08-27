import React from 'react';
import './Calendar.css'; // Importing CSS styles for the calendar

const Calendar = () => {
    return (
        <div className="calendar">
            <h3>August 2024</h3> {/* Header displaying the current month and year */}
            <div className="calendar-grid">
                {/* Day labels for the week */}
                <div className="calendar-day">S</div> {/* Sunday */}
                <div className="calendar-day">M</div> {/* Monday */}
                <div className="calendar-day">T</div> {/* Tuesday */}
                <div className="calendar-day">W</div> {/* Wednesday */}
                <div className="calendar-day">T</div> {/* Thursday */}
                <div className="calendar-day">F</div> {/* Friday */}
                <div className="calendar-day">S</div> {/* Saturday */}
                
                {/* Add calendar days here */}
                <div className="calendar-day">1</div> {/* Day 1 */}
                <div className="calendar-day">2</div> {/* Day 2 */}
                <div className="calendar-day">3</div> {/* Day 3 */}
                <div className="calendar-day">4</div> {/* Day 4 */}
                <div className="calendar-day">5</div> {/* Day 5 */}
                <div className="calendar-day">6</div> {/* Day 6 */}
                <div className="calendar-day">7</div> {/* Day 7 */}
                {/* Continue adding more days as needed */}
            </div>
        </div>
    );
};

export default Calendar;
