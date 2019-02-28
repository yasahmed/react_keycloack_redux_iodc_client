import { combineReducers } from 'redux';

import { reducer as oidc } from 'redux-oidc';
import clients from './clients.reducer';

export default combineReducers({
  appConfig: state => state || {},
  clients,
  oidc,
});
