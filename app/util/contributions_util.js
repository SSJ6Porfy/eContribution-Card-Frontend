import axios from 'axios';

export const fetchContributions = () => (
    axios.get('api/contributions', {})
);

export const fetchContribution = (contributionId) => (
    axios.get(`api/contributions/${contributionId}`, {})
);

export const createContribution = (contribution) => (
    axios.post('api/contributions', { contribution })
);

export const updateContribution = (contribution) => (
    axios.patch(`api/contributions/${contribution.id}`, { contribution })
);

export const deleteContribution = (contributionId) => (
    axios.delete(`api/contributions/${contributionId}`, {})
);