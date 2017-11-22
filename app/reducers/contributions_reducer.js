import { merge } from 'lodash';
import { RECEIVE_ALL_CONTRIBUTIONS, 
         RECEIVE_CONTRIBUTION, 
         REMOVE_CONTRIBUTION } from '../actions/contribution_actions';

const initialState = {}; 

const ContributionsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    const blankState = {};
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CONTRIBUTIONS:
            action.contributions.forEach((contribution) => {
                blankState[contribution.id] = contribution;
            });
            return blankState;
        case RECEIVE_CONTRIBUTION:
            newState[action.contribution.id] = action.contribution;
            return newState;
        case REMOVE_CONTRIBUTION:
            delete newState[action.contribution.id];
            return newState;
        default:
            return state;
    }
};

export default ContributionsReducer;