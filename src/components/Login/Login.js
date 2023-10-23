import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {


  
    const handleSubmit = (event) => {
      event.preventDefault();
  
    
      const email = event.target.Email.value;
      const password = event.target.Password.value;

      if(email.length<1){
       
      }

        event.target.reset();
    };
    return (
        <div className='bg-cyan-100 h-screen p-9'>
            <div className=' place-content-center  max-w-[600px] mx-auto '>
                <div className='bg-white h-full rounded-l-lg'> 
                    <h1 className='text-4xl font-bold text-cyan-500 mt-8 pt-10 mb-2'>Log in to Mycontacts</h1>
                    
                    <p className='text-slate-400'>or use your email account</p>

                    <div className='mt-8'>
                    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="Email"
        name="Email"
        placeholder="Email"
        className="input input-bordered input-info w-full max-w-xs"

      />

      <br />
      <br />

      <input
        type="password"
        id="Password"
        name="Password"
        placeholder="Password"
        className="input input-bordered input-info w-full max-w-xs"

      />

      <br />
      <br />
<Link to='/home'>
<button  className="btn btn-neutral " type="submit">Submit</button>
</Link>
    

      <br />
      <br />

    </form>   

                </div>

            </div>
            </div>
        </div>
    );
};

export default Login;