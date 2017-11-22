import * as UserAPIUtil from '../utils/users_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = (user) => dispatch => (
    UserAPIUtil.fetchUser(user).then((res) => receiveUser(user))
);

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});