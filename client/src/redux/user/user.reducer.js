import {
  SIGN_IN_INPROGRESS,
  // SIGN_IN_SUCCESS,
  // SIGN_IN_FAILURE,
} from './user.types';

const initialState = {
  users: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_INPROGRESS:
      return {
        ...state,
        users: {
          ...state.users,
          isInProgress: true,
        },
      };

    default:
      return state;
  }
};

export default usersReducer;
