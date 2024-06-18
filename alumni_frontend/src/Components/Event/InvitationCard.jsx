import React, { useState, useEffect } from 'react';
import './InvitationCard.css';
import axios from 'axios';
import toast from 'react-hot-toast';

// const events = [
//   { id: 1, name: 'Annual Alumni Reunion', date: 'July 20, 2024', venue: 'Grand Alumni Hall', timing: '6:00 PM - 9:00 PM', description: 'An evening of nostalgia and networking.' },
//   { id: 2, name: 'Homecoming Sports Gala', date: 'August 15, 2024', venue: 'University Stadium', timing: '10:00 AM - 3:00 PM', description: 'Cheer for your favorite teams at the sports gala.' },
//   { id: 3, name: 'Alumni Art Exhibition', date: 'September 11, 2024', venue: 'City Art Gallery', timing: '1:00 PM - 6:00 PM', description: 'Experience the artistic talents of our alumni.' },
//   { id: 4, name: 'Tech Alumni Symposium', date: 'October 5, 2024', venue: 'Tech Park Auditorium', timing: '9:00 AM - 5:00 PM', description: 'Join the symposium on the latest tech trends.' },
//   { id: 5, name: 'Alumni Charity Ball', date: 'November 25, 2024', venue: 'Downtown Hotel Ballroom', timing: '7:00 PM - Midnight', description: 'A night of elegance for a good cause.' },
//   { id: 6, name: 'Alumni Charity Ball', date: 'November 25, 2024', venue: 'Downtown Hotel Ballroom', timing: '7:00 PM - Midnight', description: 'A night of elegance for a good cause.' }
// ];

const InvitationCard = () => {
  const [confirmedEvents, setConfirmedEvents] = useState([]);

  const [events, setEvents] = useState([]);


useEffect(() => {
  const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/events",
        );
        setEvents(response.data.data || []);
        console.log(events)
      } catch (error) {
        console.log(error);
        toast.error(`Error Loading Jobs ${error.message}`, {
          position: "bottom-right",
          duration: 4000,
        });
      }
    } 
  fetchData();
}, []);


  const handleConfirm = (eventId) => {
    setConfirmedEvents(prev => [...prev, eventId]);
  };

  return (
    <div className="invitation-cards-container">
      {events.map(event => (
        <div key={event.event_id} className="invitation-card">
          <h1 className="event-name">{event.event_name}</h1>
          <p className="event-date">Date: {event.event_date}</p>
          <p className="event-venue">Venue: {event.location}</p>
          <p className="event-timing">Timing: {event.timing}</p>
          <p className="event-description">{event.short_description}</p>
          <button
            className={`rsvp-button ${confirmedEvents.includes(event.event_id) ? 'confirmed' : ''}`}
            onClick={() => handleConfirm(event.event_id)}
          >
            {confirmedEvents.includes(event.event_id) ? 'You are in!' : 'I am in'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default InvitationCard;
