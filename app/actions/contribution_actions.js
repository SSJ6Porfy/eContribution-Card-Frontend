import * as ContributionAPIUtil from "../util/contributions_util";

export const RECEIVE_ALL_CONTRIBUTIONS = 'RECEIVE_ALL_CONTRIBUTIONS';
export const RECEIVE_CONTRIBUTION = 'RECEIVE_CONTRIBUTION';
export const REMOVE_CONTRIBUTION = 'REMOVE_CONTRIBUTION';
export const RECEIVE_CONTRIBUTION_ERRORS = "RECEIVE_CONTRIBUTION_ERRORS";

export const fetchContributions = () => dispatch => (
  ContributionAPIUtil.fetchContributions()
    .then(res => (dispatch(receiveAllContributions(res))
    ), err => (dispatch(receiveContributionErrors(err.responseJSON))))
);
export const fetchContribution = (id) => dispatch => (
  ContributionAPIUtil.fetchContribution(id)
    .then(res => (dispatch(receiveContribution(res))
    ), err => (dispatch(receiveContributionErrors(err.responseJSON))))
);
export const createContribution = (contribution) => dispatch => (
  ContributionAPIUtil.createContribution(contribution)
    .then(res => (dispatch(receiveContribution(res))
    ), err => (dispatch(receiveContributionErrors(err.responseJSON))))
);
export const updateContribution = (contribution) => dispatch => (
  ContributionAPIUtil.updateContribution(contribution)
    .then(res => (dispatch(receiveContribution(res))
    ), err => (dispatch(receiveContributionErrors(err.responseJSON))))
);

export const deleteContribution = (id) => dispatch => (
  ContributionAPIUtil.deleteContribution(id)
    .then(res => (dispatch(removeContribution(res))
    ), err => (dispatch(receiveContributionErrors(err.responseJSON))))
);


export const receiveAllContributions = (contributions) => ({
  type: RECEIVE_ALL_CONTRIBUTIONS,
  contributions
});
export const receiveContribution = (contribution) => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
});

export const removeContribution = (contribution) => ({
  type: REMOVE_CONTRIBUTION,
  contribution
});

export const receiveContributionErrors = (errors) => ({
  type: RECEIVE_CONTRIBUTION_ERRORS,
  errors
});