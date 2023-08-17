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
    dispatch(SetUser(data))
    console.log(data)
  };
//   const formData=useSelector(state=>state.currentUser.user)
// console.log(formData)

// useEffect(()=>{
// setValue("firstName",formData.firstName)
// setValue("password",formData.mail)
// },[])
  return (<div  className='main'>
    <Header text="Register your account"/>

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
          required: "Password is required",
         validate: {
          maxLength: (v) =>
            v.length <= 10 || "Password should have at most 10 characters",
          matchPattern: (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(v) ||
          "At least one number, one lowercase and one uppercase letter is required",
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
        {...register("Confirm_password", 
        { 
          required: "Password is required",
         validate: {
          value:(v,form)=> form.password ==v || "Password must be same"
        },
       }
       )} 
        aria-invalid={errors.Confirm_password ? "true" : "false"} 
      />
      {errors.Confirm_password && <p role="alert">{errors.Confirm_password?.message}</p>}
      </div>
      <input type="submit" />
    </form>
    </div>
);
}

export default Login;