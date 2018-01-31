import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getNetLearnData = params => { return axios.get(`${base}/netLearnData`, { params: params }); };
export const getRuleListData = params => { return axios.get(`${base}/ruleListData`, { params: params }); };
