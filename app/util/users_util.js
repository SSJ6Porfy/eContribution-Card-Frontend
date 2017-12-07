import axios from 'axios';

export const fetchUser = (userId) => (
    axios.get(`https://e-contribution-card.herokuapp.com/api/users`, {
        params: {
            ID: userId
        }
    })
);

export const createUser = (user) => (
    axios.post('https://e-contribution-card.herokuapp.com/api/users', { user })
);
