import React, { useState } from 'react';
import './InvitationCard.css';

const events = [
  { id: 1, name: 'Annual Alumni Reunion', date: 'July 20, 2024', venue: 'Grand Alumni Hall', timing: '6:00 PM - 9:00 PM', description: 'An evening of nostalgia and networking.' },
  { id: 2, name: 'Homecoming Sports Gala', date: 'August 15, 2024', venue: 'University Stadium', timing: '10:00 AM - 3:00 PM', description: 'Cheer for your favorite teams at the sports gala.' },
  { id: 3, name: 'Alumni Art Exhibition', date: 'September 11, 2024', venue: 'City Art Gallery', timing: '1:00 PM - 6:00 PM', description: 'Experience the artistic talents of our alumni.' },
  { id: 4, name: 'Tech Alumni Symposium', date: 'October 5, 2024', venue: 'Tech Park Auditorium', timing: '9:00 AM - 5:00 PM', description: 'Join the symposium on the latest tech trends.' },
  { id: 5, name: 'Alumni Charity Ball', date: 'November 25, 2024', venue: 'Downtown Hotel Ballroom', timing: '7:00 PM - Midnight', description: 'A night of elegance for a good cause.' },
  { id: 6, name: 'Alumni Charity Ball', date: 'November 25, 2024', venue: 'Downtown Hotel Ballroom', timing: '7:00 PM - Midnight', description: 'A night of elegance for a good cause.' }
];

const InvitationCard = () => {
  const [confirmedEvents, setConfirmedEvents] = useState([]);

  const handleConfirm = (eventId) => {
    setConfirmedEvents(prev => [...prev, eventId]);
  };

  return (
    <div className="invitation-cards-container">
      {events.map(event => (
        <div key={event.id} className="invitation-card">
          <h1 className="event-name">{event.name}</h1>
          <p className="event-date">Date: {event.date}</p>
          <p className="event-venue">Venue: {event.venue}</p>
          <p className="event-timing">Timing: {event.timing}</p>
          <p className="event-description">{event.description}</p>
          <button
            className={`rsvp-button ${confirmedEvents.includes(event.id) ? 'confirmed' : ''}`}
            onClick={() => handleConfirm(event.id)}
          >
            {confirmedEvents.includes(event.id) ? 'You are in!' : 'I am in'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default InvitationCard;
