import axios from 'axios';

export default class API {
  constructor() {
    this.endpoints = {};
  }

  toCamelCase = str => str.replace(/(\-\w)/g, matches => matches[1].toUpperCase());

  createEntity = entity => {
    const name = this.toCamelCase(entity.name);
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  };

  createEntities = arrayOfEntity => {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  };

  createBasicCRUDEndpoints = ({ path }) => {
    const endpoints = {};

    const resourceURL = `/${path}`;

    endpoints.getAll = ({ query = {} }, config = {}) => axios.get(`${resourceURL}/`, Object.assign({ config }));

    endpoints.getOne = ({ id }, config = {}) => axios.get(`${resourceURL}/${id}`, config);

    endpoints.create = (toCreate, config = {}) => axios.post(`${resourceURL}/`, toCreate, config);

    endpoints.update = (id, toUpdate, config = {}) => axios.put(`${resourceURL}/${id}`, toUpdate, config);

    endpoints.patch = (id, toPatch, config = {}) => axios.patch(`${resourceURL}/${id}/${toPatch}`, config);

    endpoints.delete = (id, config = {}) => axios.delete(`${resourceURL}/${id}`, config);

    return endpoints;
  };
}
