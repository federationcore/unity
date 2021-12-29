import {
  SIGN_IN_SUCCESS,
  SIGN_IN_INPROGRESS,
  SIGN_IN_FAILURE,
} from './user.types';

export const signIn = () => async (dispatch) => {
  dispatch({
    type: SIGN_IN_INPROGRESS,
  });
  try {
    await authNews();
    dispatch({ type: SIGN_IN_SUCCESS });
  } catch (err) {
    dispatch({ type: SIGN_IN_FAILURE, err: err.response });
  }
};
