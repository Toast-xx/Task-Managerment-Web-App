import React from 'react';
import './CircularProgressBar.css'; // Import the CSS file for styling the component

// Define the CircularProgressBar component, which takes in percentage, color, text, and label as props
const CircularProgressBar = ({ percentage, color, text, label }) => {
    return (
        // Main container for the circular progress bar component
        <div className="circular-progress-bar">
            {/* SVG element representing the circular chart */}
            <svg viewBox="0 0 36 36" className="circular-chart">
                {/* Background circle path, providing a full circular background */}
                <path
                    className="circle-bg"
                    // Define the circular path's shape and size using the arc command
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Foreground circle path representing the current progress */}
                <path
                    className="circle"
                    stroke={color} // Use the color prop to dynamically set the stroke color
                    style={{ strokeDasharray: `${percentage} ${100 - percentage}` }} // Dynamically set the stroke-dasharray based on the percentage prop
                    // Define the circular path's shape and size using the arc command
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            {/* Container for the progress text, typically shown below the chart */}
            <div className="progress-text">
                <p>{text}</p> {/* Display the text prop, typically used for the percentage value */}
                <p>{label}</p> {/* Display the label prop, typically used for additional context or description */}
            </div>
        </div>
    );
};

// Export the CircularProgressBar component for use in other parts of the application
export default CircularProgressBar;
