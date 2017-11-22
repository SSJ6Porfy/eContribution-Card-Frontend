import { RECEIVE_CONTRIBUTION_ERRORS,
         RECEIVE_CONTRIBUTION } from '../actions/contribution_actions';

const ContributionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONTRIBUTION_ERRORS:
      return action.errors;
    case RECEIVE_CONTRIBUTION:
      return [];
    default:
      return state;
  }
};

export default ContributionErrorsReducer;