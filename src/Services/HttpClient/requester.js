import apiConfig from './api-config';
import API from './API';

class Requester {
  constructor() {
    this.myAPI = new API();
    this.myAPI.createEntities(apiConfig.BASIC_END_POINS);
  }

  get api() {
    return this.myAPI.endpoints;
  }
}

export const client = new Requester();
