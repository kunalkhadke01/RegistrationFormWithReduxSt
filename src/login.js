import './assest/login.css';
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import {SetUser} from './Redux/action'
import {useNavigate} from 'react-router-dom';
import Header from './Component/header'
// import LoginAuth from './Services/loginAction'
const Login= (props) =>  {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(SetUser(navigate,data))
    // navigate('/welcome')
  };
  const formData=useSelector(state=>console.log(state.currentUser))

  return (<div className='main'>
        <Header text="Welcome to login page"/>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
      <label for="fname">User Name:</label>
      <input 
      type="text"
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert">User name is required</p>}
      </div>
      <div>
      <label for="password">Password:</label>
      <input 
        {...register("password", 
        { 
          required: "Password is required",
         validate: {
          maxLength: (v) =>
            v.length <= 10 || "Password should have at most 10 characters",
          matchPattern: (v) =>
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(v) ||
            "at least one number, one lowercase and one uppercase letter is required",
        },
       }
       )} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}
      </div>
      <span>Forget password</span>/
      <p onClick={()=> navigate('/register')}><span >New Registration</span></p>
      <input type="submit" />
    </form>
</div>);
}

export default Login;