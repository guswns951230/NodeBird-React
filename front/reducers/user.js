export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpDate: {},
  loginData: {},
}

export const loginAction = (data) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios.get('/api/login')
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      })
  }
}

// action creator
export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}

export const loginFailureAction = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
    data,
  }
}

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT_REQUEST',
  }
}

export const logoutSuccessAction = (data) => {
  return {
    type: 'LOG_OUT_SUCCESS',
  }
}

export const logoutFailureAction = (data) => {
  return {
    type: 'LOG_OUT_FAILURE',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;