import { ADD_NEW_CLIENT, UPDATE_CLIENT, REMOVE_CLIENT } from '@constants';
import uniqueId from 'lodash/uniqueId';

export const addNewClient = client => ({
  type: ADD_NEW_CLIENT,
  id: uniqueId(),
  client,
});

export const updateCliebt = client => ({
  type: UPDATE_CLIENT,
  client,
});

export const removeClient = id => ({
  type: REMOVE_CLIENT,
  id,
});
