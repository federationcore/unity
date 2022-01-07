import {
  //SIGN IN
  SIGN_IN_SUCCESS,
  SIGN_IN_INPROGRESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_INPROGRESS,
  SIGN_OUT_SUCCESS,
} from './user.types';
// import { postSignIn, postSignUp } from '../api/user';

export const signIn = (values) => async (dispatch) => {
  dispatch({
    type: SIGN_IN_INPROGRESS,
  });
  try {
    // const { data } = await postSignIn(values);

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: { user: 'Ben', token: 'something' },
    });
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILURE, err: err.response });
  }
};

export const signUp = (values) => async (dispatch) => {
  dispatch({
    type: SIGN_UP_INPROGRESS,
  });
  try {
    // const { data } = await postSignUp(values);

    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: { user: 'ben', token: 'someting' },
    });
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILURE, err: err.response });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: SIGN_OUT_SUCCESS });
  } catch (err) {
    dispatch({ type: SIGN_UP_FAILURE, err: err.response });
  }
};
