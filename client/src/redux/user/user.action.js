import {
  //SIGN IN
  SIGN_IN_SUCCESS,
  SIGN_IN_INPROGRESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_INPROGRESS,

  //SIGN UP
  // SIGN_UP_INPROGRESS,
  // SIGN_UP_SUCCESS,
  // SIGN_OUT_FAILURE,
} from './user.types';
import { postSignUp } from '../api/user';
// export const signIn = () => async (dispatch) => {
//   dispatch({
//     type: SIGN_IN_INPROGRESS,
//   });
//   try {
//     // await authNews();
//     dispatch({ type: SIGN_IN_SUCCESS });
//   } catch (err) {
//     dispatch({ type: SIGN_IN_FAILURE, err: err.response });
//   }
// };

export const signUp = (values) => async (dispatch) => {
  dispatch({
    type: SIGN_UP_INPROGRESS,
  });
  try {
    const { data } = await postSignUp(values);

    dispatch({ type: SIGN_UP_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILURE, err: err.response });
  }
};
