import axios from 'axios';
import apiConfig from './api-config';

const initAxios = () => {
  const concatWithport = apiConfig.BASIC_API_PORT === 80 ? '' : `:${apiConfig.BASIC_API_PORT}`;
  const baseUrl = `${apiConfig.BASIC_API_URL}${concatWithport}`;

  // Global config
  axios.defaults.baseURL = baseUrl;
  axios.defaults.timeout = apiConfig.TIME_OUT;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  // Interceptors
  axios.interceptors.request.use(
    function(config) {
      // return AuthService.getUser()
      //   .then(user => {
      //     if (user) {
      //       config.headers.authorization = "Bearer " + user.access_token;
      //       return config;
      //     } else {
      //       AuthService.login();
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
};

export default initAxios;
