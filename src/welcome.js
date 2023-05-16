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
              'Authorization': `Bearer ${token}`
            }
          };
        
axios(config)  
.then(function (response) {
    console.log(JSON.stringify(response.data));
    setStatusres(response.data)
    if(response.data !== "success"){
      navigate("/")
    }
  })
  .catch(function (error) {
    console.log(error);
  });
    },[])
console.log("statusres,", statusres)
    return(
        <div>
          {statusres == "success" ?  <Header text="Welcome"/> : ""}  
        </div>
    )
}

export default Welcome