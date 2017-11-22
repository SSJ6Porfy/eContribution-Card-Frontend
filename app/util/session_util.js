import axios from 'axios';

export const login = (user) => (
    axios.post('api/session', { user })
);

export const signup = (user) => (
    axios.post('api/users', { user })
);

export const logout = () => (
    axios.delete('api/session', {})
);

export const updateUser = (user) => (
    axios.patch(`api/users/${user.id}`, { user })
);