import React from 'react';
import './CircularProgressBar.css'; // Correctly import the CSS file

const CircularProgressBar = ({ percentage, color, text, label }) => {
    return (
        <div className="circular-progress-bar">
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    stroke={color}
                    style={{ strokeDasharray: `${percentage} ${100 - percentage}` }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="progress-text">
                <p>{text}</p>
                <p>{label}</p>
            </div>
        </div>
    );
};

export default CircularProgressBar;
