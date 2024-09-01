import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling the header

const Header = () => {
    // State hook to manage the visibility of notifications
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

    // Toggles the visibility of the notifications dropdown
    const toggleNotifications = () => {
        setIsNotificationsVisible(!isNotificationsVisible);
    };

    return (
        <div className="header">
            {/* Main header title */}
            <h1>Dashboard</h1>
            
            {/* Notification icon with click handler to toggle notifications */}
            <div className="notification-icon" onClick={toggleNotifications}>
                <img src="/path/to/notification-icon.png" alt="Notifications" /> {/* Path to notification icon image */}
                
                {/* Conditional rendering of the notification dropdown */}
                {isNotificationsVisible && (
                    <div className="notification-dropdown">
                        <p>Task due soon</p> {/* Example notification item */}
                        <p>Upcoming event</p> {/* Example notification item */}
                    </div>
                )}
            </div>
        </div>
        
    );
};

export default Header;
