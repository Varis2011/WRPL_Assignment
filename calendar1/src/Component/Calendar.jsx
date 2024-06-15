import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  // Define a state to keep track of events
  const [events, setEvents] = React.useState([]);

  // Function to handle event click
  const handleEventClick = (info) => {
    // Ask user to confirm event deletion
    const isConfirmed = window.confirm(`Are you sure you want to delete the event '${info.event.title}'?`);
    if (isConfirmed) {
      // Remove the event from the events array
      const updatedEvents = events.filter(event => event.id !== info.event.id);
      setEvents(updatedEvents);
    }
  };

  // Function to handle date click
  const handleDateClick = (info) => {
    // Prompt user to enter event name
    const eventName = window.prompt("Enter event name:");
    if (eventName) {
      // Add the new event to the events array
      const newEvent = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random id for the event
        title: eventName,
        start: info.dateStr, // Use the clicked date as the start date
        allDay: true // Treat the event as an all-day event
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={events} // Pass events data to the calendar
        eventClick={handleEventClick} // Handle event click
        dateClick={handleDateClick} // Handle date click
        editable={true} // Allow event editing
        selectable={true} // Allow date selection
        selectMirror={true} // Visual effect for date selection
        dayMaxEvents={true} // Show "more" link for days with too many events
      />
    </div>
  );
}

export default Calendar;
