import axios from 'axios'

const LoginAuth = (arg) => {
    var config = {
        method: 'post',
        url: 'https://lokmanya-dev-api.kiplglobal.com/auth/login-legacy',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
            "username":"9158551212",
            "password":"9226926292"
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}