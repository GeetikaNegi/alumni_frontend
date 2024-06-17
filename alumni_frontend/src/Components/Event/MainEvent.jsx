import React from 'react';
import EventBlog from './EventBlog';

const events = [
  {
    eventName: 'React Workshop',
    date: '2024-06-15',
    venue: 'Online Event',
    description:
      'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
  },
  {
    eventName: 'Java Workshop',
    date: '2024-06-15',
    venue: 'Online Event',
    description:
      'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
  },
  {
    eventName: 'Spring Boot Workshop',
    date: '2024-06-15',
    venue: 'Online Event',
    description:
      'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
  },
  {
    eventName: 'C++ Workshop',
    date: '2024-06-15',
    venue: 'Online Event',
    description:
      'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
  },
  // Add more event objects here
];

const MainEvent = () => {
  return (
    <div className="event-blogs">
      {events.map((event) => (
        <EventBlog key={event.eventName} {...event} />
      ))}
    </div>
  );
};

export default MainEvent;
