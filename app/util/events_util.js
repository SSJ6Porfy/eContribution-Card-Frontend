import axios from 'axios';

export const fetchEvents = () => (
    axios.get('api/events', {})
);

export const fetchEvent = (eventId) => (
    axios.get(`api/events/${eventId}`, {})
);

export const createEvent = (event) => (
    axios.post('api/events', { event })
);

export const updateEvent = (event) => (
    axios.patch(`api/events/${event.id}`, { event })
);

export const deleteEvent = (eventId) => (
    axios.delete(`api/events/${eventId}`, {})
);