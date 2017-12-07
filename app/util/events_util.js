import axios from 'axios';

export const fetchEvents = () => (
    axios.get('https://e-contribution-card.herokuapp.com/api/events', {})
);

export const fetchEvent = (eventId) => (
    axios.get(`https://e-contribution-card.herokuapp.com/api/events/${eventId}`, {})
);

export const createEvent = (event) => (
    axios.post('https://e-contribution-card.herokuapp.com/api/events', { event })
);

export const updateEvent = (event) => (
    axios.patch(`https://e-contribution-card.herokuapp.com/api/events/${event.id}`, { event })
);

export const deleteEvent = (eventId) => (
    axios.delete(`https://e-contribution-card.herokuapp.com/api/events/${eventId}`, {})
);