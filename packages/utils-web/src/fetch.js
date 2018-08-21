import 'isomorphic-fetch';

const fetchJSON = (...params) => fetch(...params)
  .then(res => new Promise((resolve, reject) => {
    const contentType = res.headers.get('content-type');
    if ((res.status === 200) && contentType.includes('json')) {
      resolve(res.json());
    } else {
      reject(res);
    }
  }));

const fetchXML = () => {};

export {
  fetchJSON,
  fetchXML
};
