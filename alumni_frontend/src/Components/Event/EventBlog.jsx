import React, { useState } from 'react';
import './EventBlog.css'; // Import the CSS file

const EventBlog = ({ eventName, date, venue, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="event-blog">
      <div className="event-header">
        <h3 className="event-name">{eventName}</h3>
        <div className="event-meta">
          <span className="event-date">{date}</span>
          <span className="event-venue">{venue}</span>
        </div>
        <button className="details-button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails && (
        <div className="event-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default EventBlog;
