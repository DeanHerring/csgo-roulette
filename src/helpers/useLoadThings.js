import axios from 'axios';

export const useLoadThings = async ({ url, method, postData }) => {
  try {
    if (!url) {
      throw new Error('[useLoadThings]: url является обязательным параметром');
    }

    // const responce = await axios.post(url, {
    //   length: 32,
    // });

    const responce = await axios(url, { method, data: postData, responseType: 'json' });

    const { status, data } = responce;

    if (status !== 200 || !data.ok) {
      throw new Error(data.error);
    }

    const things = JSON.parse(data.data);

    return things;
  } catch (error) {
    console.log(error);
  }
};
