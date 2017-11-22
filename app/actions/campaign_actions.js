import * as CampaignAPIUtil from "../util/campaigns_util";

export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';
export const RECEIVE_CAMPAIGN_ERRORS = "RECEIVE_CAMPAIGN_ERRORS";

export const fetchCampaigns = () => dispatch => (
  CampaignAPIUtil.fetchCampaigns()
    .then(res => (dispatch(receiveAllCampaigns(res))
    ), err => (dispatch(receiveCampaignErrors(err.responseJSON))))
);
export const fetchCampaign = (id) => dispatch => (
  CampaignAPIUtil.fetchCampaign(id)
    .then(res => (dispatch(receiveCampaign(res))
    ), err => (dispatch(receiveCampaignErrors(err.responseJSON))))
);
export const createCampaign = (campaign) => dispatch => (
  CampaignAPIUtil.createCampaign(campaign)
    .then(res => (dispatch(receiveCampaign(res))
    ), err => (dispatch(receiveCampaignErrors(err.responseJSON))))
);
export const updateCampaign = (campaign) => dispatch => (
  CampaignAPIUtil.updateCampaign(campaign)
    .then(res => (dispatch(receiveCampaign(res))
    ), err => (dispatch(receiveCampaignErrors(err.responseJSON))))
);

export const deleteCampaign = (id) => dispatch => (
  CampaignAPIUtil.deleteCampaign(id)
    .then(res => (dispatch(removeCampaign(res))
    ), err => (dispatch(receiveCampaignErrors(err.responseJSON))))
);


export const receiveAllCampaigns = (campaigns) => ({
  type: RECEIVE_ALL_CAMPAIGNS,
  campaigns
});
export const receiveCampaign = (campaign) => ({
  type: RECEIVE_CAMPAIGN,
  campaign
});

export const removeCampaign = (campaign) => ({
  type: REMOVE_CAMPAIGN,
  campaign
});

export const receiveCampaignErrors = (errors) => ({
  type: RECEIVE_CAMPAIGN_ERRORS,
  errors
});