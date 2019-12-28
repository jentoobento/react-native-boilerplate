import {
  ADD_PERSON,
} from '../types/peopleType';

const addPersonSuccess = payload => ({
  type: ADD_PERSON,
  payload,
});

export const addPerson = (name) => async dispatch => {
  try {
    // await an API response below
    dispatch(addPersonSuccess(name));
  } catch (error) {
    console.log('An error occurred!', error);
  }
}
