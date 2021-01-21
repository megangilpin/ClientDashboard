import axios from 'axios';

const Organization = {
  getClients: async () => {
    return axios
      .get('https://5fe220547a9487001768215e.mockapi.io/api/v1/organization')
      .then((res) => res);
  },
  getClient: async (id) => {
    return axios
      .get(
        `https://5fe220547a9487001768215e.mockapi.io/api/v1/organization/${id}`
      )
      .then((res) => res);
  }
};

export default Organization;
