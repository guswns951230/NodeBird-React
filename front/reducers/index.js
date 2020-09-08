const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpDate: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }
};

// action creator
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
  }
}

export const logoutAction = (data) => {
  return {
    type: 'LOG_OUT',
  }
}

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;