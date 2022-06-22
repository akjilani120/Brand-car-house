import React from 'react';
import './SignUp.css'
import bgImg from '../image/bgimg.jpg'
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='sign-header' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='sign-overflow d-flex justify-content-center align-items-center'>
                <div className='sign-model'>
                    <h3 className='text-center signUp-title '>Please Sign Up </h3>
                    <div className='form-head'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='input-items'>
                             
                            <input type="text"  placeholder='Name' {...register("name", { required: true })} />
                            <p className='text-danger'>{errors.name?.type === 'required' && "First name is required"}</p>
                            </div>
                           <div className='input-items'>
                            
                           <input type="email"  placeholder='Email' {...register("email", { required: true })} />
                            {errors.email && "Email name is required"}
                           </div>

                              <div className='input-items'>
                                
                              <input type="password" placeholder='Password' {...register("password", { required: true })} />
                            {errors.lastName && "Password name is required"}

                              </div>
                            <input className='btn btn-warning px-5 py-2 text-white fw-bold mb-5' type="submit" />
                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default SignUp;