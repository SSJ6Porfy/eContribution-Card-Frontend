import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import ContributionsReducer from './contributions_reducer';
import CampaignsReducer from './campaigns_reducer';

const EntitiesReducer = combineReducers({
    events: EventsReducer,
    contributions: ContributionsReducer,
    campaigns: CampaignsReducer
});

export default EntitiesReducer;