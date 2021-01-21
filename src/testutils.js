const clients = [
  {
    id: '1',
    created_at: '2020-10-06T20:33:33.956Z',
    name: 'Client 1',
    headcount: 69,
    is_public: false,
    address_1: '714 Josefa Inlet',
    city: 'South Brendabury',
    zip_code: '69722-8987',
    state: 'MS'
  },
  {
    id: '2',
    created_at: '2020-10-06T20:33:33.956Z',
    name: 'Client 2',
    headcount: 8,
    is_public: false,
    address_1: '50 Broadway',
    city: 'New York',
    zip_code: '10031',
    state: 'NY'
  }
];

const members = [
  {
    created_at: '2020-08-11T16:36:27.612Z',
    id: '1',
    name: 'Destin Fahey',
    organization_id: 'organization_id 1',
    phone_number: '(840) 116-5157 x17522',
    title: 'Officer'
  },

  {
    created_at: '2020-03-09T03:38:36.139Z',
    id: '2',
    name: 'Miss Laverne Effertz',
    organization_id: 'organization_id 2',
    phone_number: '941-079-5733 x931',
    title: 'Executive'
  },

  {
    created_at: '2020-07-28T12:46:25.612Z',
    id: '3',
    name: 'Herminia Pfeffer',
    organization_id: 'organization_id 3',
    phone_number: '512.362.0270 x8191',
    title: 'Technician'
  }
];

const filteredMembers = [
  {
    created_at: '2020-08-11T16:36:27.612Z',
    id: '1',
    name: 'Destin Fahey',
    organization_id: 'organization_id 1',
    phone_number: '(840) 116-5157 x17522',
    title: 'Officer'
  }
];

export { clients, members, filteredMembers };
