import {SET_USER,REGISTER_USER,GET_USER} from './action'
var initialState = [
    {
      userName: "kunal",
      email: "kumarkhadke01@gmail.com"
    }
  ];
  const currentUser = (state = { initialState }, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          user: action.payload,
          loggedIn: true
        };
        case REGISTER_USER:
          return {
            ...state,
            user: action.payload,
            loggedIn: true
          };
          case GET_USER:
            return{
              ...state,
              user:action.payload
            }
      default:
        return state;
    }
  };
  
  export default currentUser;