const initialState = {
  username: '',
  email:'',
  password: '',
  logged: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_LOG':
      return { ...state, logged: action.payload };
    default:
      return state;
  }
};

export default loginReducer;