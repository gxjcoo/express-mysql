import axios from 'axios';

const request = val => {
  const { method = 'GET', url, params } = val;

  const standardUrl = 'http://49.232.67.121:3000/api/v1/';
  console.log(url);
  return axios({
    method,
    url: standardUrl + url,
    params
  });
};

const qs = val => {
  
}

export {
  request
};
