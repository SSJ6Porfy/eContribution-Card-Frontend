import axios from 'axios';

export const fetchCampaigns = () => (
    axios.get('api/campaigns', {})
);

export const fetchCampaign = (campaignId) => (
    axios.get(`api/campaigns/${campaignId}`, {})
);

export const createCampaign = (campaign) => (
    axios.post('api/campaigns', { campaign })
);

export const updateCampaign = (campaign) => (
    axios.patch(`api/campaigns/${campaign.id}`, { campaign })
);

export const deleteCampaign = (campaignId) => (
    axios.delete(`api/campaigns/${campaignId}`, {})
);