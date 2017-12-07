import axios from 'axios';

export const fetchCampaigns = () => (
    axios.get('https://e-contribution-card.herokuapp.com/api/campaigns', {})
);

export const fetchCampaign = (campaignId) => (
    axios.get(`https://e-contribution-card.herokuapp.com/api/campaigns/${campaignId}`, {})
);

export const createCampaign = (campaign) => (
    axios.post('https://e-contribution-card.herokuapp.com/api/campaigns', { campaign })
);

export const updateCampaign = (campaign) => (
    axios.patch(`https://e-contribution-card.herokuapp.com/api/campaigns/${campaign.id}`, { campaign })
);

export const deleteCampaign = (campaignId) => (
    axios.delete(`https://e-contribution-card.herokuapp.com/api/campaigns/${campaignId}`, {})
);