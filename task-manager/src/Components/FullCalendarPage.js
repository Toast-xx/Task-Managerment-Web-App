import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup localizer for the calendar using moment.js
const localizer = momentLocalizer(moment);

const FullCalendarPage = () => {
    // State hook to manage events in the calendar
    const [events, setEvents] = React.useState([
        { title: 'Meeting', start: new Date(), end: new Date(), allDay: false }
    ]);

    // Handles slot selection to add a new event
    const handleSelectSlot = (slotInfo) => {
        // Prompt the user for a new event title
        const title = window.prompt('New Event name');
        if (title) {
            // Update events state with the new event
            setEvents([...events, { title, start: slotInfo.start, end: slotInfo.end, allDay: slotInfo.slots.length === 1 }]);
        }
    };

    return (
        <div className="full-calendar-page">
            {/* Calendar component to display and manage events */}
            <Calendar
                localizer={localizer} // Localizer for date formatting and parsing
                events={events} // Array of events to display
                startAccessor="start" // Field name for event start time
                endAccessor="end" // Field name for event end time
                style={{ height: '100vh', width: '100%' }} // Full viewport height and width for the calendar
                views={['month', 'week', 'day']} // Available views for the calendar
                selectable={true} // Allows selection of calendar slots to create new events
                onSelectSlot={handleSelectSlot} // Function to call when a slot is selected
            />
        </div>
    );
};

export default FullCalendarPage;
