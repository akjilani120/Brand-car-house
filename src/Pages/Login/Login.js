import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleNavigate =() =>{
        navigate("/signup")
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
                    <p className='d-flex justify-content-center align-items-center mt-2 google-account   mx-auto'><img className='google-logo ' src={google}></img>
                    <p className=' ms-4   '>Google account</p>
                    </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;