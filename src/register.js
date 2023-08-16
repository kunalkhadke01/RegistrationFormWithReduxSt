import './assest/login.css';
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import {SetUser} from './Redux/action'
import Header from './Component/header'
import { useEffect } from 'react';
const Login= (props) =>  {
  const { register, formState: { errors }, handleSubmit,setValue } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    // dispatch(SetUser(data))
  };
//   const formData=useSelector(state=>state.currentUser.user)
// console.log(formData)

// useEffect(()=>{
// setValue("firstName",formData.firstName)
// setValue("password",formData.mail)
// },[])
  return (<div  className='main'>
    <Header text="Register With us"/>

    <form onSubmit={handleSubmit(onSubmit)} className="form">
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
      <label for="password">Create Password:</label>
      <input 
        {...register("password", 
        { 
          required: "password is required",
         validate: {
          maxLength: (v) =>
            v.length <= 50 || "The email should have at most 50 characters",
          matchPattern: (v) =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "password must be a valided",
        },
       }
       )} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}
      </div>
      <div>
      <label for="password">Confirm Password:</label>
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