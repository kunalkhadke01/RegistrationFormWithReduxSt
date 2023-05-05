var initialState = [
    {
      userName: "kunal",
      email: "kumarkhadke01@gmail.com"
    }
  ];
  const currentUser = (state = { initialState }, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
          loggedIn: true
        };
      default:
        return state;
    }
  };
  
  export default currentUser;