import axios from 'axios';

const Organization = {
  getMembers: async () => {
    return axios
      .get('https://5fe220547a9487001768215e.mockapi.io/api/v1/members')
      .then((res) => res);
  }
};

export default Organization;
