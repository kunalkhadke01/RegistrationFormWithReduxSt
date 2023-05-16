import axios from 'axios'


export const SET_USER = "SET_USER"
export const REGISTER_USER="REGISTER_USER"

const SetUser = (navigate, userObj) => {
    console.log(userObj)
    var userdetail="";
    var config = {
        method: 'post',
        url: 'https://lokmanya-dev-api.kiplglobal.com/auth/login-legacy',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        data : {
          "username":userObj.firstName,
          "password":userObj.password
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
                  if(response.data.access_token) {
                    localStorage.setItem("Token", response.data)
                    navigate("/welcome")
                  } else{
                    window.location.replace("/")
                  }
      })
      .catch(function (error) {
        console.log(error);
        if(error){
          alert("User not found")
        }
      });

      return { type: SET_USER, payload: userObj }
}

const registerUser = (userObj) => {
    console.log(userObj)
    return {
        type: REGISTER_USER,
        payload: userObj
    }
}


export {
    SetUser
}