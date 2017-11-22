import { merge } from 'lodash';
import { RECEIVE_ALL_CAMPAIGNS, 
         RECEIVE_CAMPAIGN, 
         REMOVE_CAMPAIGN } from '../actions/campaign_actions';

const initialState = {}; 

const CampaignsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    const blankState = {};
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CAMPAIGNS:
            action.campaigns.forEach((campaign) => {
                blankState[campaign.id] = campaign;
            });
            return blankState;
        case RECEIVE_CAMPAIGN:
            newState[action.campaign.id] = action.campaign;
            return newState;
        case REMOVE_CAMPAIGN:
            delete newState[action.campaign.id];
            return newState;
        default:
            return state;
    }
};

export default CampaignsReducer;