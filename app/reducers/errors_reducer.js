import { combineReducers } from "redux";
import SessionErrorReducer from "./session_errors_reducer";
import EventErrorReducer from "./event_error_reducer";
import ContributionErrorReducer from "./contribution_error_reducer";
import CampaignErrorReducer from "./campaign_error_reducer";

export default combineReducers({
  session: SessionErrorReducer,
  events: EventErrorReducer,
  contributions: ContributionErrorReducer,
  campaigns: CampaignErrorReducer
});