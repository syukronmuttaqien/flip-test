import { API_TEST } from './endpoint';

// All of transaction service is here so we can centralize transaction service in here;
export const getTransaction = async () => {
  const streamFetch = await fetch(API_TEST.TRANSACTION_LIST);
  const response = await streamFetch.json();

  return response;
};
