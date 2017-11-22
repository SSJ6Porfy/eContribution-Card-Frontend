import axios from 'axios';

export const fetchUser = (userId) => (
    axios.get(`api/users`, {
        params: {
            ID: userId
        }
    })
);

export const createUser = (user) => (
    axios.post('api/users', { user })
);
