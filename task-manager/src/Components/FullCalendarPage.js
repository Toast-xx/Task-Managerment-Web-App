import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const FullCalendarPage = () => {
    const [events, setEvents] = React.useState([
        { title: 'Meeting', start: new Date(), end: new Date(), allDay: false }
    ]);

    const handleSelectSlot = (slotInfo) => {
        const title = window.prompt('New Event name');
        if (title) {
            setEvents([...events, { title, start: slotInfo.start, end: slotInfo.end, allDay: slotInfo.slots.length === 1 }]);
        }
    };

    return (
        <div className="full-calendar-page">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100vh', width: '100%' }} // Ensure the calendar takes full viewport height and width
                views={['month', 'week', 'day']}
                selectable={true}
                onSelectSlot={handleSelectSlot}
            />
        </div>
    );
};

export default FullCalendarPage;
