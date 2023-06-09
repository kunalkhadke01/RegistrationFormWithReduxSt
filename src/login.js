// import './login.css';
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import {setUser} from './Redux/action'
import {useNavigate} from 'react-router-dom';
import Header from './Component/header'
const Login= (props) =>  {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(setUser(data))
    navigate('/registration')
  };
  const formData=useSelector(state=>console.log(state.currentUser))

  return (<div>
        <Header text="Welcome to login page"/>
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
      <input type="submit" />
    </form>
</div>);
}

export default Login;