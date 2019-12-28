import NavigationService from '../../../NavigationService';
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
    // handle a good response below
    dispatch(addPersonSuccess(name));
    NavigationService.navigate('Home');
    // handle a bad response below
  } catch (error) {
    // catch an error
    console.log('An error occurred!', error);
  }
}
