import React from 'react';
import './SignUp.css'
import bgImg from '../image/bgimg.jpg';
import google from '../image/google.png'
import { useForm } from "react-hook-form";
import { Link , useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import IsLoading from '../Hooks/IsLoading';
import CustomUser from '../Hooks/CustomUser';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        eUser,
        uerLoading,
        userError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
      const [updateProfile, updating, error] = useUpdateProfile(auth);
    const onSubmit = async( data) => {
        const email = data.email
        const password = data.password
        const displayName = data.name
        const photoURL = data.image
        await createUserWithEmailAndPassword(email , password)        
        await updateProfile({ displayName, photoURL });
     }   
     const handleGoogle =() =>{
        signInWithGoogle()
     }
     const [addUser] = CustomUser(eUser || guser)
     const navigate = useNavigate()
     let showErro;
     if(addUser){
        navigate("/")
     }
     if(userError || gerror || error){
        showErro = userError.message || gerror.message || error.message
     }
    return (
        <div className='sign-header' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='sign-overflow d-flex justify-content-center align-items-center'>
                <div className='sign-model'>
                    <h3 className='text-center signUp-title '>Please Sign Up </h3>
                    <div className='form-head'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='input-items'>                             
                            <input type="text"  placeholder='Name' {...register("name", { required: true })} />
                            <p className='text-danger text-start my-0 p-0  mx-auto w-75'>{errors.name?.type === 'required' && "Name is required"}</p>
                            </div>
                            <div className='input-items'>  
                                                       
                            <input type="text"  placeholder='Profile Image Link' {...register("image", { required: false })} />
                           
                            </div>

                           <div className='input-items '>                            
                           <input type="email"  placeholder='Email' {...register("email", { required: true })} />
                            <p className='text-danger text-start  my-0 p-0 mx-auto w-75'>{errors.email && "Email  is required"}</p>
                           </div>

                              <div className='input-items mb-3'>
                                
                              <input type="password" placeholder='Password' {...register("password", { required: true , minLength:6 , maxLength: 13 })} />
                              <p className='text-danger text-start my-0 p-0  mx-auto w-75'> {errors.password?.type === 'required' && "Password is required"} </p>
                              <p className='text-danger text-start my-0 p-0  mx-auto w-75'> {errors.password?.type === 'minLength' && "Password is minimumLenght 6"} </p>
                              <p className='text-danger text-start my-0 p-0  mx-auto w-75'> {errors.password?.type === 'maxLength' && "Password is maxLenght 13"} </p>
                            
                             
                              </div>
                              <h6 className='text-white text-start w-75 mx-auto'>If You have account <Link to='/login' className="text-warning fw-bold ms-3" >Login </Link> </h6>
                              <h6 className='text-white text-start w-75 mx-auto' >{showErro}</h6>
                            <input className='btn btn-warning px-5 py-2 text-white fw-bold mb-4 mt-4 submit-btn' type="submit" value="Sign In" />
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

        </div>
    );
};

export default SignUp;