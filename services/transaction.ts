import { DataItemProps } from '../components/ListItem/interfaces';
import { API_TEST } from './endpoint';

// All of transaction service is here so we can centralize transaction service in here;
export const getTransaction = async (): Promise<Array<DataItemProps>> => {
  try {
    const streamFetch = await fetch(API_TEST.TRANSACTION_LIST);
    const response = await streamFetch.json();

    // get All object key as array
    const ids = Object.keys(response);

    // map response from object to array and return it;
    const responseMapped = ids.map((id) => response[id]);

    return responseMapped;
  } catch (e) {
    console.log(e);
    throw new Error('Error check Log');
  }
};
