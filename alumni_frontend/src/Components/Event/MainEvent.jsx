import React from 'react';
import EventBlog from './EventBlog';

const MainEvent = () => {

const [events, setEvents] = useState([]);


useEffect(() => {
  const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/alumni/all-events",
        );
        setEvents(response.data.data || []);
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


// const events = [
//   {
//     eventName: 'React Workshop',
//     date: '2024-06-15',
//     venue: 'Online Event',
//     description:
//       'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
//   },
//   {
//     eventName: 'Java Workshop',
//     date: '2024-06-15',
//     venue: 'Online Event',
//     description:
//       'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
//   },
//   {
//     eventName: 'Spring Boot Workshop',
//     date: '2024-06-15',
//     venue: 'Online Event',
//     description:
//       'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
//   },
//   {
//     eventName: 'C++ Workshop',
//     date: '2024-06-15',
//     venue: 'Online Event',
//     description:
//       'Learn the fundamentals of React and build your first web application. This workshop will cover the basics of components, state, props, and more.',
//   },
//   // Add more event objects here
// ];

  return (
    <div className="event-blogs">
      {events.map((event) => (
        <EventBlog key={event.eventName} {...event} />
      ))}
    </div>
  );
};

export default MainEvent;
