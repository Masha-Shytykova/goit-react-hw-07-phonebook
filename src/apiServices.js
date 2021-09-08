import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/contacts';

export const addContacts = ({ contact }) => {
  return axios
    .post(contact, {
      params: {},
    })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export const getContacts = () => {
  return axios
    .get()
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
