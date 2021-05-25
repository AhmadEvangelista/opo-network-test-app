import apiRequest from '../config/index';

export const getSample = async () =>
  (await apiRequest.get('employees')).data.data;
