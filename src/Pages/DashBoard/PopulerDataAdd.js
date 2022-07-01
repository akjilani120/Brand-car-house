import React from 'react';

const PopulerDataAdd = () => {
    return (
        <div className='sign-header' >
            <div className='sign-overflow d-flex justify-content-center align-items-center'>
                <div className='sign-model'>
                    <h3 className='text-center signUp-title '>Please Login </h3>
                    <div className='form-head'>
                        <form >                         
                            
                           <div className='input-items '>                            
                           <input type="email"   placeholder='Email' name='email' required />
                          
                           </div>

                              <div className='input-items '>
                                
                              <input type="password" placeholder='Password' name='password' required />
                              
                             
                              </div>
                             
                            <input className='btn btn-warning px-5 py-2 text-white fw-bold mb-4 mt-4 submit-btn' type="submit" value="Login" />
                        </form>
                    </div>
                   
                    
                </div>
            </div>
           
        </div>
    );
};

export default PopulerDataAdd;