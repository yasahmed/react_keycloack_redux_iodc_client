import { ADD_NEW_CLIENT, REMOVE_CLIENT } from '@constants';

const clients = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_CLIENT:
      return [
        ...state,
        {
          id: action.client.id,
          age: action.client.age,
          name: action.client.name,
        },
      ];

    case REMOVE_CLIENT:
      const newState = [...state];
      return newState.filter(i => i.id !== action.id);

    default:
      return state;
  }
};

export default clients;
