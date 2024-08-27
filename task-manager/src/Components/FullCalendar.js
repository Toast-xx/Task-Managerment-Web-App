import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './FullCalendar.css'; // For custom styling

const localizer = momentLocalizer(moment);

const FullCalendar = ({ onNavigateToFullCalendar }) => {
    const [events, setEvents] = useState([
        { title: 'Meeting', start: new Date(), end: new Date(), allDay: false }
        // Add more events as needed
    ]);

    const handleSelectSlot = (slotInfo) => {
        const title = window.prompt('New Event name');
        if (title) {
            const newEvent = {
                title,
                start: slotInfo.start,
                end: slotInfo.end,
                allDay: slotInfo.slots.length === 1
            };
            setEvents([...events, newEvent]);
        }
    };

    return (
        <div className="full-calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 400, width: '100%' }} // Adjust the size to fit the sidebar
                selectable={true}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={(event) => alert(event.title)}
                onDoubleClickEvent={() => onNavigateToFullCalendar()} // Navigate to the full calendar view on double click
            />
        </div>
    );
};

export default FullCalendar;
