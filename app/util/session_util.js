import axios from 'axios';

export const login = (user) => (
    axios.post('https://e-contribution-card.herokuapp.com//api/session', { user })
);

export const signup = (user) => (
    axios.post('https://e-contribution-card.herokuapp.com/api/users', { user })
);

export const logout = () => (
    axios.delete('https://e-contribution-card.herokuapp.com/api/session', {})
);

export const updateUser = (user) => (
    axios.patch(`https://e-contribution-card.herokuapp.com/api/users/${user.id}`, { user })
);