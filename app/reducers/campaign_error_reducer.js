import { RECEIVE_CAMPAIGN_ERRORS,
    RECEIVE_CAMPAIGN } from '../actions/campaign_actions';

const CampaignErrorsReducer = (state = [], action) => {
Object.freeze(state);
switch(action.type) {
case RECEIVE_CAMPAIGN_ERRORS:
 return action.errors;
case RECEIVE_CAMPAIGN:
 return [];
default:
 return state;
}
};

export default CampaignErrorsReducer;