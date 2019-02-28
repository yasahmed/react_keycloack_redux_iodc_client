const apiConfig = {
  BASIC_API_URL: process.env.REACT_APP_BASE_URL,
  BASIC_API_PORT: 80,
  TIME_OUT: process.env.REACT_APP_TIMEOUT,
  PREFIX: '/',
  BASIC_END_POINS: [{ name: 'todos', path: 'todos' }, { name: 'events', path: 'events' }],
};

export default apiConfig;
