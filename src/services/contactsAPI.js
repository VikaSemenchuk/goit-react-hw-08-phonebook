import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const UserAPI = {
  async register(formData) {
    const { data } = await $publicHost.post(`users/signup`, formData);
    return data;
  },
  async login(formData) {
    const { data } = await $publicHost.post(`users/login`, formData);
    return data;
  },
  async getUserDetails() {
    const { data } = await $privateHost.get(`/users/current`);
    return data;
  },
  async logOut() {
    const { data } = await $privateHost.post(`/users/logout`);
    return data;
  },
};

export const ContactsAPI = {
  async getContacts() {
    const { data } = await $privateHost.get(`/contacts`);
    return data;
  },
  async addContact(contactData) {
    const { data } = await $privateHost.post(`/contacts`, contactData);
    return data;
  },
  async deleteContact(contactId) {
    const { data } = await $privateHost.delete(`/contacts/${contactId}`);
    return data;
  },
};


// import axios from 'axios';

// axios.defaults.baseURL = 'https://646692002ea3cae8dc1a29d6.mockapi.io/api/v1';

// export const getContacts = async () => {
//   const { data } = await axios.get('/contacts');
//   console.log('data :>> ', data);
//   return data;
// };

// export const postContact = async newContact => {
//   const { data } = await axios.post('/contacts', newContact);
//   return data;
// };

// export const deleteContactById = async id => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// };
