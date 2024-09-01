import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './FullCalendar.css'; // Ensure you have this file for any additional styling

// Localizer setup for the calendar using moment.js
const localizer = momentLocalizer(moment);

const FullCalendarPage = () => {
    // State hook to manage calendar events
    const [events, setEvents] = useState([
        { title: 'Meeting', start: new Date(), end: new Date(), allDay: false }
    ]);
    
    // State hook to manage the current view of the calendar
    const [currentView, setCurrentView] = useState('week'); // Default view is week

    // Handles slot selection on the calendar to add a new event
    const handleSelectSlot = (slotInfo) => {
        // Prompt user to enter a new event name
        const title = window.prompt('New Event name');
        if (title) {
            // Add new event to the calendar with the selected time slot
            setEvents([...events, { title, start: slotInfo.start, end: slotInfo.end, allDay: slotInfo.slots.length === 1 }]);
        }
    };

    // Handles changes to the calendar view (month, week, or day)
    const handleViewChange = (newView) => {
        setCurrentView(newView); // Update current view state
    };

    return (
        <div className="full-calendar-page">
            {/* View switcher buttons to change calendar view */}
            <div className="view-switcher">
                <button onClick={() => handleViewChange('month')}>Month View</button>
                <button onClick={() => handleViewChange('week')}>Week View</button>
                <button onClick={() => handleViewChange('day')}>Day View</button>
            </div>

            {/* Calendar component */}
            <Calendar
                localizer={localizer}
                events={events} // Pass events state to the calendar
                startAccessor="start" // Field name for event start time
                endAccessor="end" // Field name for event end time
                style={{ height: '100vh', width: '100%' }} // Full viewport height and width
                views={['month', 'week', 'day']} // Available views
                view={currentView} // Set current view from state
                onView={handleViewChange} // Handle view change via buttons
                selectable={true} // Allow slot selection for new events
                onSelectSlot={handleSelectSlot} // Handle slot selection to create new events
            />
        </div>
    );
};

export default FullCalendarPage;
