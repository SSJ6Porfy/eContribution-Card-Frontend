import axios from 'axios';

export const fetchContributions = () => (
    axios.get('https://e-contribution-card.herokuapp.com/api/contributions', {})
);

export const fetchContribution = (contributionId) => (
    axios.get(`https://e-contribution-card.herokuapp.com/api/contributions/${contributionId}`, {})
);

export const createContribution = (contribution) => (
    axios.post('https://e-contribution-card.herokuapp.com/api/contributions', { contribution })
);

export const updateContribution = (contribution) => (
    axios.patch(`https://e-contribution-card.herokuapp.com/api/contributions/${contribution.id}`, { contribution })
);

export const deleteContribution = (contributionId) => (
    axios.delete(`https://e-contribution-card.herokuapp.com/api/contributions/${contributionId}`, {})
);