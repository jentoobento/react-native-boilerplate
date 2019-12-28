import {
  ADD_PERSON,
} from '../types/peopleType';

const initial = {
  person: 'John Doe',
};

const peopleReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_PERSON: 
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
}

export default peopleReducer;
