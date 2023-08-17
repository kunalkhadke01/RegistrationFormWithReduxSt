import Header from './Component/header'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const token = localStorage.getItem("Token")

const Welcome = () => {
const [statusres, setStatusres] = useState("")
const navigate = useNavigate();

    useEffect(()=> {
        var config = {
          method: 'get',
            url: 'https://lokmanya-dev-api.kiplglobal.com/auth/login-auth-legacy',
            headers: { 
              'Authorization': `Bearer ${token.access_token}`
            }
          };
        
axios(config)  
.then(function (response) {
    console.log(JSON.stringify(response.data));
    setStatusres(response.data)

  })
  .catch(function (error) {
    console.log(error);
    setTimeout(()=>{
      if(error.response.status == 401){
        navigate("/")
      }
    }, 3000)

  });
    },[])
console.log("statusres,", statusres)
    return(
        <div>
          {statusres == "success" ?  <Header text={token.user.owner_name}/> : ""}  
        </div>
    )
}

export default Welcome