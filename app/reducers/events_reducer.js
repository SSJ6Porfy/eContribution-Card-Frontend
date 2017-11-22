import { merge } from 'lodash';
import { RECEIVE_ALL_EVENTS, 
         RECEIVE_EVENT, 
         REMOVE_EVENT } from '../actions/event_actions';

const initialState = {}; 

const EventsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    const blankState = {};
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
            action.events.forEach((event) => {
                blankState[event.id] = event;
            });
            return blankState;
        case RECEIVE_EVENT:
            newState[action.event.id] = action.event;
            return newState;
        case REMOVE_EVENT:
            delete newState[action.event.id];
            return newState;
        default:
            return state;
    }
};

export default EventsReducer;