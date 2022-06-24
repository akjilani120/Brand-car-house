import React, { useRef } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import bgImg from '../image/loginBg.jpg';
import google from '../image/google.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IsLoading from '../Hooks/IsLoading';
import CustomUser from '../Hooks/CustomUser';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        eUser,
        userLoading,
        userError,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
      const [updatePassword, updating, error] = useUpdatePassword(auth);
    const handleSubmit =(event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
    }
    const emailRef = useRef()    
   const handlePassword = async() =>{
      const email = emailRef.current.value;      
      await updatePassword(email)
      toast("Send Email")
   }
    const handleGoogle =() =>{
        signInWithGoogle()
    };
    const navigate = useNavigate()
    const [addUser] = CustomUser(eUser || guser)
    if(addUser){
        navigate("/")
     }
    let showErro ;
    
    if(userError || gerror){
        showErro= userError.message || gerror.message
    }
    return (
        <div className='sign-header' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='sign-overflow d-flex justify-content-center align-items-center'>
                <div className='sign-model'>
                    <h3 className='text-center signUp-title '>Please Login </h3>
                    <div className='form-head'>
                        <form onSubmit={handleSubmit}>                         
                            
                           <div className='input-items '>                            
                           <input type="email" ref={emailRef}  placeholder='Email' name='email' required />
                          
                           </div>

                              <div className='input-items '>
                                
                              <input type="password" placeholder='Password' name='password' required />
                              
                             
                              </div>
                              <h6 className='text-white text-start w-75 mx-auto'>If You have account <Link to='/signup' className="text-warning fw-bold ms-3" >Sign Up </Link> </h6>
                              <h6 className='text-white text-start w-75 mx-auto'>If Forget Password <span onClick={handlePassword} className="text-warning  ms-3" style={{cursor:"pointer", textDecoration:"underline"}} >Remember Password </span> </h6>

                              <h6 className='text-danger text-start w-75 mx-auto' >{showErro}</h6>
                            <input className='btn btn-warning px-5 py-2 text-white fw-bold mb-4 mt-4 submit-btn' type="submit" value="Login" />
                        </form>
                    </div>
                    <div className='d-flex justify-content-center align-items-center '>
                        <p className='border-pera'></p>
                        <h5 className='text-white'>OR</h5>
                        <p className='border-pera'></p>
                    </div>
                    <div className='my-4'>
                    <p onClick={handleGoogle} className='d-flex justify-content-center align-items-center mt-2 google-account   mx-auto'><img className='google-logo ' src={google}></img>
                    <p className=' ms-4   '>Google account</p>
                    </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;