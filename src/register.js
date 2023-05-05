import './login.css';
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import {setUser} from './Redux/action'
import Header from './Component/header'
import { useEffect } from 'react';
const Login= (props) =>  {
  const { register, formState: { errors }, handleSubmit,setValue } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(setUser(data))
  };
  const formData=useSelector(state=>state.currentUser.user)
console.log(formData)

useEffect(()=>{
setValue("firstName",formData.firstName)
setValue("mail",formData.mail)
},[])
  return (<div>
    <Header text="Register your detail here"/>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label for="fname">First Name:</label>
      <input 
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
      </div>
      <div>
      <label for="lname">Last Name:</label>
      <input 
        {...register("lastname", { required: true })} 
        aria-invalid={errors.lastname ? "true" : "false"} 
      />
      {errors.lastname?.type === 'required' && <p role="alert">First name is required</p>}
      </div>
      <div>
      <label for="mail">Email:</label>
      <input 
        {...register("mail", 
        { 
          required: "Email Address is required",
         validate: {
          maxLength: (v) =>
            v.length <= 50 || "The email should have at most 50 characters",
          matchPattern: (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "Email address must be a valid address",
        },
       }
       )} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      </div>
      <div>
      <label for="password">Password:</label>
      <input 
        {...register("password", 
        { 
          required: "password is required",
         validate: {
          maxLength: (v) =>
            v.length <= 50 || "The email should have at most 50 characters",
          matchPattern: (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "password must be a valid",
        },
       }
       )} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}
      </div>
      <input type="submit" />
    </form>
    </div>
);
}

export default Login;